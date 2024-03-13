class GoodsController < ApplicationController
  before_action :authorize, except: [:index, :show]

  # GET /goods
  def index
    @goods = Good.all
    render json: @goods
  end

  # GET /goods/1
  def show
    render json: @good
  end

  # POST /goods
  def create
    @good = Good.new(good_params)

    if @good.save
      render json: @good, status: :created, location: @good
    else
      render json: @good.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /goods/1
  def update
    if @good.update(good_params)
      render json: @good
    else
      render json: @good.errors, status: :unprocessable_entity
    end
  end

  # DELETE /goods/1
  def destroy
    @good = find_good
    @good.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def find_good
      @good = Good.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def good_params
      params.permit(:name, :description, :claimant_id, :user_id, :main_image)
    end
end
