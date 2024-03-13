class FreesController < ApplicationController
  before_action :authorize, except: [:index, :show]

  # GET /frees
  def index
    @frees = Free.all

    render json: @frees
  end

  # GET /frees/1
  def show
    render json: @free
  end

  # POST /frees
  def create
    @free = Free.new(free_params)

    if @free.save
      render json: @free, status: :created, location: @free
    else
      render json: @free.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /frees/1
  def update
    if @free.update(free_params)
      render json: @free
    else
      render json: @free.errors, status: :unprocessable_entity
    end
  end

  # DELETE /frees/1
  def destroy
    @frees = find_free
    @frees.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def find_free
      @free = Free.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def free_params
      params.permit(:name, :description, :claimant_id, :user_id, :main_image)
    end 
end
