class CommunitiesController < ApplicationController
  before_action :authorize
  
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
      @community = find_community
      @community.destroy
      head :no_content    
    end
  
    private
  
    def find_community
      @community = Community.find(params[:id])
    end
  
    def community_params
      params.permit(:name, :description, :event_date, :main_image, :user_id)
    end
  end
  