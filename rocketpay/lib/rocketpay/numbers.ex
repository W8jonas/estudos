defmodule Rocketpay.Numbers do
  def sum_from_file(filename) do
    "#{filename}.csv"
    |> File.read()
    |> handle_file()
  end

  defp handle_file({:ok, stringArray}) do
    stringArray = stringArray
    |> String.split(",")
    |> Enum.map(fn number -> String.to_integer(number) end)
    |> Enum.sum()

    {:ok, %{result: stringArray}}

  end
  defp handle_file({:error, _reson}), do: {:error, "invalid file!"}
end
