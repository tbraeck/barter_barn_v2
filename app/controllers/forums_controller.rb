class ForumsController < ApplicationController
  before_action :set_forum, only: %i[ show update destroy ]

  # GET /forums
  def index
    @forums = Forum.all

    render json: @forums
  end

  # GET /forums/1
  # GET /forums/1
  def show
    render json: @forum
  end

  # POST /forums
  def create
    @forum = Forum.new(forum_params)

    if @forum.save
      render json: @forum, status: :created, location: @forum
    else
      render json: @forum.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /forums/1
  def update
    if @forum.update(forum_params)
      render json: @forum
    else
      render json: @forum.errors, status: :unprocessable_entity
    end
  end

  # DELETE /forums/1
  def destroy
    @forum.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_forum
      @forum = Forum.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def forum_params
      params.fetch(:forum )
    end
end
