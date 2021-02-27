defmodule RocketpayWeb.AccountsView do

  alias Rocketpay.{Account}

  def render("update.json", %{
    Account: %Account{ id: account_id, balance: balance }}) do
    %{
      nessage: "Ballance changed successfully",
        account: %{
          id: account_id,
          balance: balance
        }
    }
  end
end
