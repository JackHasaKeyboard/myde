class CreateCodes < ActiveRecord::Migration
  def change
    create_table :codes do |t|
      t.string :name
      t.text :cont

      t.timestamps null: false
    end
  end
end
