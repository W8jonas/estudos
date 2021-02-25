defmodule Rocketpay.User do
  use Ecto.Schema

  import Ecto.Changeset
  alias Ecto.Changeset
  alias Rocketpay.Account

  @primary_key {:id, :binary_id, autogenerate: true}

  @required_params [:name, :age, :email, :nickname, :password]

  schema "users" do
    field :name, :string
    field :age, :integer
    field :email, :string
    field :nickname, :string
    field :password, :string, virtual: true
    field :password_hash, :string

    has_one :account, Account

    timestamps()
  end

  def changeset(params) do
    %__MODULE__{}
    |> cast(params, @required_params)
    |> validate_required(@required_params)
    |> validate_length(:password, min: 6)
    |> validate_number(:age, greater_than_or_equal_to: 18)
    |> validate_format(:email, ~r/@/)
    |> unique_constraint([:email])
    |> unique_constraint([:nickname])
    |> put_password_hash()
  end

  defp put_password_hash(%Changeset{valid?: true, changes: %{password: password}} = changeset) do
    change(changeset, Pbkdf2.add_hash(password))
  end

  defp put_password_hash(changeset), do: changeset

end
