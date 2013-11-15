class Student < Sequel::Model
  one_to_many :sites

  # Sort students by property and possbile sort_order
  # see "Order" at: http://datamapper.org/docs/find.html
  #
  # property  - the Student property to sort by
  # sort_order - asc or desc (ascending or descending)
  #
  def self.sort(property, sort_order)
    # set some reasonable defaults here because nil values would squash these
    property ||= 'id'
    sort_order ||= 'asc'

    # Because any method name, or invalid method names could
    # be passed in, we are going to also catch and rescue any errors before by
    # validating that the property exists and that the sort_order is either
    # asc or desc, to be sure we raise the appropriate errors instead
    #
    self.validate_sort_params(property, sort_order)
    
    if property == 'quote_length'
      self.all_by_quote_length(sort_order)
    else
      # See Sequel documentation. In this case, property is passed as a
      # symbol (property.to_sym) while the sort order (asc or desc) is a method
      # Here we are using Ruby's built in #send method for a bit of 
      # meta-programming in which we pass the method name as a string.
      #
      # http://sequel.rubyforge.org/rdoc/classes/Sequel/Dataset.html#method-i-order
      #
      # http://ruby-doc.org/core-2.0/Object.html#method-i-send
      #
      self.order{Sequel.send(sort_order, property.to_sym)}
    end
  end

  # Use Datamappers #adapter to construct a custom query that will return
  # students by quote length.
  # http://datamapper.org/docs/find.html
  #
  # sort_order - a string, 'asc' or 'desc'
  #
  def self.all_by_quote_length(sort_order)
    # Make sure sort_order is 'asc' or 'desc', otherwise raise an Error
    #
    unless self.sort_order_valid?(sort_order)
      raise Errors::InvalidSortParams, "sort_order must be 'asc' or 'desc',
      you provided: #{sort_order}"
    end
    
    # http://sequel.rubyforge.org/rdoc/classes/Sequel/Dataset.html#method-i-order
    Student.order{length(quote).send(sort_order)}
  end

  # Validate that the params passed for sorting are acceptable, otherwise
  # raise an error with the appropriate custom messages
  #
  # property  - the Student property to sort by
  # sort_order - asc or desc (ascending or descending)
  #
  def self.validate_sort_params(property, sort_order)
    errors = []

    unless self.property_exists?(property) || self.sort_property?(property)
      errors << "Invalid sort property: #{property}"
    end

    unless self.sort_order_valid?(sort_order)
      errors << "sort_order must be 'asc' or 'desc', you provided: #{sort_order}"
    end

    if errors.empty?
      true
    else
      raise Errors::InvalidSortParams, errors
    end
  end

  # Check to see if a property exists on the Student class, or is a custom sort
  # Returns true or false
  #
  # property - any string
  #
  def self.property_exists?(property)
    self.columns.include?(property.to_sym)
  end

  # Check to see if the property is a custom sort property we have set.
  # Returns true or false
  #
  # property - any string
  #
  def self.sort_property?(property)
    ['quote_length'].include? property
  end

  # Check to see if the sort_order is either asc or desc
  # Returns true or false
  #
  # sort_order - any string
  #
  def self.sort_order_valid?(sort_order)
    ['asc', 'desc'].include?(sort_order)
  end

  # Define a module to encapsulate any custom errors
  #
  module Errors
    # Create a custom error class to handle invalid params passed to Student#sort
    class InvalidSortParams < StandardError; end
  end
end