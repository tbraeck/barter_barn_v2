class UsersController < ApplicationController
  skip_before_action :authorize, only: [:index, :create]

  def index 
    users = User.all
    render json: users, include: [:goods, :services, :frees], status: :ok
  end
  
  def show
    render json: @current_user
  end
  
  def create
    user = User.new(user_params)

    if user.save
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
   
    def user_params
      params.permit(:id, :username, :password)
    end
end
