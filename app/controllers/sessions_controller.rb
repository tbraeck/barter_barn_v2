class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create, :destroy]
  
    def create
      user = User.find_by(username: user_params[:username])
      if user&.authenticate(user_params[:password])
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: { errors: ["Invalid username or password"] }, status: :unauthorized
      end
    end
  
    def destroy
      session.delete(:user_id)
      head :no_content
    end
  
    private
  
    def user_params
      params.permit(:username, :password)
    end
  end
  