class Community < ApplicationRecord
    validates :name, presence: true
    # has_many :forums
    has_many :users, through: :forums
    has_one_attached :main_image, dependent: :destroy
end
