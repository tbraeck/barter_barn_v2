class CreateCommunities < ActiveRecord::Migration[7.1]
  def change
    create_table :community do |t|
      t.string :name
      t.text :description
    
      t.string :user_id

      t.timestamps
    end
  end
end
