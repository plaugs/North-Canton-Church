Northcantonchurch::Application.routes.draw do

  mount Ckeditor::Engine => '/ckeditor'

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }, :path_names => {:sign_in => 'login', :sign_out => 'logout'}
  devise_scope :user do
    get "/logout" => "devise/sessions#destroy"
  end

  resources :files
  match '/test', :to => "main#test"
  match '/blah', :to => "main#blah"
  resources :file_browsers

  resources :user_sessions

  match '/our-realtors', :to => 'realtors#index'

  resources :pages, :menu_items

  namespace :admin do
    resources :pages
    resources :menu_items
    resources :page_versions
    resources :users
    resources :realtors
  end


  match ':controller/:action/:id'
  match ':controller/:action/:id.:format'

  root :to => 'main#content_page', :path => 'index'

  #All content pages
  match '*path', :controller => 'main', :action => 'content_page'
end
