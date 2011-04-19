
def parse(line)
  ret = ''
  
  args = line.split ' '
    
  source = "#{args[1]}"
  if File.exists? source
    
    File.open(source, 'r:UTF-8') do |f|
      f.each_line do |line|
        if line.include? "include "
          ret += parse line 
        else
          ret += line.gsub("@arg", "#{args[2]}")
        end
      end
    end
      
  else
    puts "File does not exists: #{source}" 
  end
  
  ret
end


unless ARGV.empty? 
  arg = ARGV[0]
  
  source = "#{arg}.shpfy"
  if File.exists? source
    dest= "#{arg}.liquid"
    
    ret = parse "n/a #{source} n/a"
    
    File.open(dest, 'w') { |f| f.write(ret) } 
    
    puts "#{dest} generated succesfuly."    
  else
    puts "File does not exists: #{source}" 
  end
else
  puts "Generate Shopify templates" 
  puts " - Usage: shpfy filename (without extension, .shpfy is used automaticaly)"
  puts " - Output files are put into current directory" 
end
