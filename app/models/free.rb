class Free < ApplicationRecord
    belongs_to :user
    
    has_many :forums
    has_many :users, through: :forums
    has_one_attached :main_image, dependent: :destroy

end
