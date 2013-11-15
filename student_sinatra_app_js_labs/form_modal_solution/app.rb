require './environment.rb'

module StudentSite
  class App < Sinatra::Base
    register Sinatra::RespondWith
    helpers Sinatra::JSON
    
    configure :development do
      register Sinatra::Reloader
    end

    get '/' do
      @students = Student.all
      erb :"students/index"
    end

    get '/students/?', :provides => [:html, :json] do
      # If either sort_by or order params are defined in the url such as:
      # /students/?sort_by=name&order=asc
      #
      # params[:sort_by] - an attribute of the Student model to perform the sort on
      # params[:order]   - asc or desc (ascending or descending)
      #
      if params[:sort_by] || params[:order]
        @students = Student.sort(params[:sort_by], params[:order])
      else
        @students = Student
      end

      # If the Accepts header value is 'application/json' respond with the
      # students as JSON data if it is html respond with the list_view html
      respond_to do |f|
        f.json do
          content_type :json
          @students.to_json(root: :collection, 
            include: { :sites => {:root => :collection}})
        end
        f.html { erb :"students/index" }
      end
    end

    get '/students/:id' do
      @student = Student[params[:id].to_i]
      erb :"students/show"
    end

    post '/students/:id' do
      @student = Student[params[:id].to_i]
      @student.name = params[:name]
      @student.position = params[:position]
      @student.quote = params[:quote]

      params[:sites].each do |url|
        Site.find_or_create(student_id: @student.id, url: url)
      end

      if @student.save
        redirect "students/#{@student.id}"
      else
        "error! Whoa gnarly bro, your student data couldn't be saved...bummer"
      end
    end
  end
end