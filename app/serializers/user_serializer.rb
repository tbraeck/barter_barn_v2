class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :frees
  has_many :goods
  has_many :services
  has_many :communities
end
