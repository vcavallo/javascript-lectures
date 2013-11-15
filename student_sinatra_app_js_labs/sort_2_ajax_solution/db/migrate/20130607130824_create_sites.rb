Sequel.migration do
  change do
    create_table(:sites) do
      primary_key :id
      foriegn_key :student_id
      String :url
    end
  end
end