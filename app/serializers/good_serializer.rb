class GoodSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers 
has_one :user
  attributes :id, :name, :description, :claimant_id, :user_id, :image

  def image
    if object.main_image.attached?
      Rails.application.routes.url_helpers.rails_blob_path(object.main_image, only_path: true)
    else
      nil
    end
  end
end
