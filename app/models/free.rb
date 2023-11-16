class Free < ApplicationRecord
    # belongs_to :user

    has_many :forums
    has_many :users, through: :forums
end
