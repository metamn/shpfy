require 'rubygems'
require 'shopify_api'


CHILD_FILES = ['assets/theme.css', 'layout/theme.liquid']


unless ARGV.empty? 
  f = ARGV[1]
  
  source = "#{f}.upload"
  if File.exists? source
  
    keys = []
    File.open(source, 'r:UTF-8') do |f|
      f.each_line do |line|
        keys << line unless line.blank?          
      end
    end
    
    
    if keys.size > 1
      m = "(assets|config|layout|snippets|templates)/.*\.*"
    else 
      parent = ARGV[2]    
      if parent
        m = CHILD_FILES.join('|')
        puts m
      end
    end
    
    puts "Ready to sync ..."    
    watch(m) do |match|
      puts "Updating #{match[0].inspect}..."
      upload_template(match.to_s, keys)
      puts "donez."
    end
    
  else
    puts "File does not exists: #{source}" 
  end
else
  puts "Sync local development with Shopify" 
  puts " - Usage: upload.rb key parent"
  puts " - Where: key is the file containing he Shopify API url"
  puts " - Where: parent is the path for the parent theme (optional)"
  puts " - Example: upload.rb scrol-sf scrol"
  puts ""
  puts " If key file contains multiple items (children) all of them will be updated"
end



def upload_template(file, apis)  
  child = false;
  apis.each do |api|    
    next if child && (CHILD_FILES.include? file)
    
    puts "Syncing with #{api} ..."
    ShopifyAPI::Base.site = api
    asset = ShopifyAPI::Asset.find(file)
    asset.value = File.read(file)
    asset.save
    child = true;
  end
end




