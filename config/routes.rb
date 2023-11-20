Rails.application.routes.draw do
  resources :users
  resources :frees
  resources :services
  resources :goods
  resources :forums 
  resources :communities
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
