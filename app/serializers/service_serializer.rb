class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :claimant_id,:user_id
end