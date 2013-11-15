Sequel.migration do
  change do
    create_table(:students) do
      primary_key :id
      String :avatar
      String :name
      String :position
      Text :quote
    end
  end 
end