Rails.application.routes.draw do
  resources :colors

  root 'colors#index'
end
