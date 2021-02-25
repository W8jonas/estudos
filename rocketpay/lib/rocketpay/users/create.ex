defmodule Rocketpay.User.Create do
  alias Rocketpay.{Repo, User, Account}

  alias Ecto.Multi

  def call(params) do
    Multi.new()
    |> Multi.insert(:create_user, User.changeset(params))
    |> Multi.run(:create_account, fn repo, %{create_user: user} -> insert_account(repo, user.id) end)
    |> Multi.run(:preload_data, fn repo, %{create_user: user} -> preload_data(repo, user) end)
    |> run_transation()
  end

  defp insert_account(repo, user_id) do
    user_id
    |> account_changeset()
    |> repo.insert()
  end

  defp account_changeset(user_id) do
    params = %{user_id: user_id, balance: "0.00"}

    Account.changeset(params)
  end

  defp preload_data(repo, user) do
    {:ok, repo.preload(user, :account)}
  end

  defp run_transation(multi) do
    case Repo.transaction(multi) do
      {:error, _operation, reason, _changes} -> {:error, reason}
      {:ok, %{preload_data: user}} -> {:ok, user}
    end
  end

end
