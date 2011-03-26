

def color(line)
  s = line.split "#"
  return '' if s[1].nil?
  return s[1] unless s[1].include? " "
  s[1].split(" ")[0]  
end


source = "theme.css"
if File.exists? source
  dest = "theme-custom-colors.css"
  
  colors = []
  ok = false
  File.open(source, 'r:UTF-8') do |f|
    f.each_line do |line|
      ok = true if line.include? "{"
      ok = false if line.include? "}"    
      next if (line.include? "{") || (line.include? "}")
      puts color(line) if ok && (line.include? "#")
    end
  end
  
  puts colors.join ", "
  
  #File.open(dest, 'w') { |f| f.write(ret) }   
  #puts "#{dest} generated succesfuly."    
else
  puts "File does not exists: #{source}" 
end

