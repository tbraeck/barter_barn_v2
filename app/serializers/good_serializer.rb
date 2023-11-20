# app/serializers/good_serializer.rb

class GoodSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers # Include the URL helpers module

  attributes :id, :name, :description, :claimant_id, :user_id, :images_urls

  def images_urls
    object.images.map { |image| rails_blob_url(image.blob, only_path: true) if image.blob.present? }
  end
end
