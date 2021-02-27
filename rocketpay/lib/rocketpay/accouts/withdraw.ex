defmodule Rocketpay.Accounts.Withdraw do
  alias Rocketpay.Repo
  alias Rocketpay.Accounts.Operation

  def call(params) do
    params
    |> Operation.call(:withdraw)
    |> run_transation()
  end

  defp run_transation(multi) do
    case Repo.transaction(multi) do
      {:error, _operation, reason, _changes} -> {:error, reason}
      {:ok, %{account_withdraw: account}} -> {:ok, account}
    end
  end

end
