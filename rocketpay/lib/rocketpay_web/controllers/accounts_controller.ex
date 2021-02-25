defmodule RocketpayWeb.AccountsController do
  use RocketpayWeb, :controller

  alias Rocketpay.Account

  action_fallback RocketpayWeb.FallbackController

  def deposit(conn, params) do
    with {:ok, %Account{} = Account} <- Rocketpay.deposit(params) do
      conn
      |> put_status(:ok)
      |> render("update.json", Account: Account)
    end
  end


end
