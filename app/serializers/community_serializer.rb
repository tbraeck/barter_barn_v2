# app/serializers/good_serializer.rb

class CommunitySerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers 

  attributes :id, :name, :description, :event_date, :user_id, :image
 
  def image
    if object.main_image.attached?
      Rails.application.routes.url_helpers.rails_blob_path(object.main_image, only_path: true)
    else
      nil
    end
  end
end
