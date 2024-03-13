class ServicesController < ApplicationController
  before_action :authorize, except: [:index, :show]

  # GET /services
  def index
    @services = Service.all
    render json: @services
  end

  # GET /services/1
  def show
    render json: @service
  end

  # POST /services
  def create
    @service = Service.new(service_params)

    if @service.save
      render json: @service, status: :created, location: @service
    else
      render json: @service.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /services/1
  def update
    if @service.update(service_params)
      render json: @service
    else
      render json: @service.errors, status: :unprocessable_entity
    end
  end

  # DELETE /services/1
  def destroy
    @service = find_service
    @service.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def find_service
      @service = Service.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def service_params
      params.permit(:name, :description, :claimant_id, :user_id, :main_image )
    end
end
