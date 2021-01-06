Rails.application.routes.draw do
  get 'hangouts/index'
  devise_for :users
  root 'hangouts#index'
  resources :messages, only: [:create]
end
