defmodule Rocketpay.Numbers do
  def sum_from_file(filename) do
    file = File.read("#{filename}.csv")
    handle_file(file)
  end

  defp handle_file({:ok, file}), do: file
  defp handle_file({:error, _reson}), do: {:error, "invalid file!"}
end
