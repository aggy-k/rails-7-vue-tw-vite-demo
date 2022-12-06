Rails.application.routes.draw do
  get 'pages/about'
  get 'pages/blog'
  get 'pages/contact'
  root to: 'pages#home'
  get 'about', to: 'pages#about', as: :about
  get 'blog', to: 'pages#blog', as: :blog
  get 'contact', to: 'pages#contact', as: :contact
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
