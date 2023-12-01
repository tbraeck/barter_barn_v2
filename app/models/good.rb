class Good < ApplicationRecord
    belongs_to :user
    
    # has_many :forums
    has_many :users
    has_one_attached :main_image, dependent: :destroy

    # has_many_attached :images do |attachable|
    #     attachable.variant :thumb, resize_to_limit: [100, 200]
    #     end
end
