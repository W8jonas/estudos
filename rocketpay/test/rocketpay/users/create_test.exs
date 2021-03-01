defmodule Rocketpay.User.CreateTest do
  use Rocketpay.DataCase

  alias Rocketpay.User
  alias Rocketpay.User.Create


  describe "call/1" do
    test "when all param are valid, returns an user" do
      params = %{
        name: "Jonas",
        password: "123456",
        nickname: "w8s",
        email: "jonas@gmail.com",
        age: 22
      }

      {:ok, %User{id: user_id}} = Create.call(params)

      user = Repo.get(User, user_id)

      assert %User{name: "Jonas", age: 22, id: ^user_id} = user

    end

    test "when there are  invalid params, returns an error" do
      params = %{
        name: "Jonas",
        nickname: "w8s",
        email: "jonas@gmail.com",
        age: 22
      }

      {:error, changeset} = Create.call(params)

      expected_response = %{
        password: ["can't be blank"]
      }

      assert errors_on(changeset) == expected_response

    end

  end

end
