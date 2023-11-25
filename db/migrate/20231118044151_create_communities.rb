class CreateCommunities < ActiveRecord::Migration[7.1]
  def change
    create_table :communities do |t|
      t.string :name
      t.text :description
      t.date :event_date
      t.string :user_id

      t.timestamps
    end
  end
end
