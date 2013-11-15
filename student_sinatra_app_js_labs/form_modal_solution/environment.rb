ENV['RACK_ENV'] ||= 'development'

require 'bundler'
Bundler.require(:default, ENV['RACK_ENV'])

require 'sinatra/base'
require 'sinatra/contrib'
require 'sinatra/json'
require 'sinatra/reloader'

require 'sequel'
Sequel::Model.plugin :json_serializer
DB = Sequel.connect('sqlite://students.db')

require './student.rb'
require './site.rb'