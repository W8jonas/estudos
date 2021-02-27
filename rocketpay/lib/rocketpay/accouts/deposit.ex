defmodule Rocketpay.Accounts.Deposit do
  alias Rocketpay.Repo
  alias Rocketpay.Accounts.Operation

  def call (params) do
    params
    |> Operation.call(:deposit)
    |> run_transation()
  end

  defp run_transation(multi) do
    case Repo.transaction(multi) do
      {:error, _operation, reason, _changes} -> {:error, reason}
      {:ok, %{update_balance: account}} -> {:ok, account}
    end
  end

end
