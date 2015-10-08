Rails.application.routes.draw do
  resources :posts

  root 'colors#index'
end
