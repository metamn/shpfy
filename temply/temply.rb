#!/usr/bin/env ruby


require 'yaml'

class Parser

  def initialize(yaml)
    @yaml = yaml
    @level = 0
  end
  
  def yaml
    @yaml
  end
  
  # Simply prints out the yaml file
  #
  def print
    hash(@yaml)
  end
  
  # creates a HAML page from a hash
  #
  def to_haml
    
  end
  
  protected
  
    def hash(h)
      h.each do |k, v|
        puts " " * @level + k if k.class == String  
        unless v.nil?
          @level += 1
          hash v
        end    
      end
      @level -= 1
    end

end



unless ARGV.empty? 
  arg = ARGV[0]
  
  source = "#{arg}.yaml"
  if File.exists? source
    dest_haml = "#{arg}.haml"
    dest_sass = "#{arg}.sass"
            
    page = Parser.new YAML::load_file source
    page.print 
    
  else
    puts "File does not exists: #{source}" 
  end
else
  puts "Generate HAML and SASS scheletons from YAML" 
  puts " - Usage: temply filename (without extension, .yaml is used automaticaly)"
  puts " - Output files are put into current directory" 
end




