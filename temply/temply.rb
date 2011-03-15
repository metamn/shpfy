require 'yaml'

page = YAML::load_file('test.yaml')


puts page
puts " -- "

@level = 0
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

hash page



