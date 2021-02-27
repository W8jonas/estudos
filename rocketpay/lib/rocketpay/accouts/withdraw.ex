defmodule Rocketpay.Account.Withdraw do
  alias Rocketpay.Repo
  alias Rocketpay.Account.Operation

  def call(params) do
    params
    |> Operation.call(:withdraw)
    |> run_transation()
  end

  defp run_transation(multi) do
    case Repo.transaction(multi) do
      {:error, _operation, reason, _changes} -> {:error, reason}
      {:ok, %{update_balance: account}} -> {:ok, account}
    end
  end

end
