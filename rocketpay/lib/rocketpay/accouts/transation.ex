defmodule Rocketpay.Accounts.Transation do
  alias Ecto.Multi

  alias Rocketpay.Accounts.Operation
  alias Rocketpay.Repo


  def call(%{"from" => from_id, "to" => to_id, "value" => value}) do
    withdraw_params = build_params(from_id, value)
    deposit_params = build_params(to_id, value)

    Multi.new()
    |> Multi.merge(fn _changes -> Operation.call(withdraw_params, :withdraw) end )
    |> Multi.merge(fn _changes -> Operation.call(deposit_params, :deposit) end )
    |> run_transation()
  end

  defp build_params(id, value), do: %{"id" => id, "value" => value}

  defp run_transation(multi) do
    case Repo.transaction(multi) do
      {:error, _operation, reason, _changes} -> {:error, reason}
      {:ok, %{deposit: account}} -> {:ok, account}
    end
  end

end
