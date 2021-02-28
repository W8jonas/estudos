defmodule RocketpayWeb.AccountsView do

  alias Rocketpay.{Account}

  def render("update.json", %{account: %Account{ id: account_id, balance: balance }}) do
    %{
      nessage: "Ballance changed successfully",
        account: %{
          id: account_id,
          balance: balance
        }
    }
  end

  def render("transaction.json", %{transaction: %{to_account: to_account, from_account: from_account}}) do
    %{
      nessage: "Transaction done successfully",
      transaction: %{
          from_account: %{
            id: from_account.id,
            balance: from_account.balance
          },
          to_account: %{
            id: to_account.id,
            balance: to_account.balance
          }
        }
    }
  end

end
