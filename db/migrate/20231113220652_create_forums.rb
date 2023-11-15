class CreateForums < ActiveRecord::Migration[7.1]
  def change
    create_table :forums do |t|
      t.references :good, null: false, foreign_key: true
      t.references :service, null: false, foreign_key: true
      t.references :free, null: false, foreign_key: true

      t.timestamps
    end
  end
end
