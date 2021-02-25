defmodule Rocketpay do

  alias Rocketpay.User.Create, as: UserCreate
  alias Rocketpay.Account.Deposit

  defdelegate create_user(params), to: UserCreate, as: :call

  defdelegate deposit(params), to: UserCreate, as: :call

end
