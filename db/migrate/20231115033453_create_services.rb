class CreateServices < ActiveRecord::Migration[7.1]
  def change
    create_table :services do |t|
      t.string :name
      t.text :description
      t.integer :claimant_id
      t.string :user_id

      t.timestamps
    end
  end
end
