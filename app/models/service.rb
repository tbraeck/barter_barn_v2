class Service < ApplicationRecord
    belongs_to :user
    
    has_many :users
    has_one_attached :main_image, dependent: :destroy


end
