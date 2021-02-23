defmodule Rocketpay do

  alias Rocketpay.User.Create, as: UserCreate

  defdelegate create_user(params), to: UserCreate, as: :call
end
