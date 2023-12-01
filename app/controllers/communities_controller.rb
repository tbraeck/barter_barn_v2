class CommunitiesController < ApplicationController
    skip_before_action :authorize, only: [:index, :show, :update, :destroy]
  
    def index
      @communities = Community.all
      render json: @communities
    end
  
    def show
      render json: @community
    end
  
    # def new
    #   @community = Community.new
    # end
  
    def create
      @community = Community.new(community_params)
      if @community.save
        render json: @community, status: :created, location: @community
      else
        render json: @community.errors, status: :unprocessable_entity
      end
    end

    
    def update
      if @community.update(community_params)
        redirect_to @community, notice: 'Community was successfully updated.'
      else
        render :edit
      end
    end
  
    def destroy
      @community.destroy
      redirect_to communities_url, notice: 'Community was successfully destroyed.'
    end
  
    private
  
    def set_community
      @community = Community.find(params[:id])
    end
  
    def community_params
      params.permit(:name, :description, :event_date, :main_image, :user_id)
    end
  end
  