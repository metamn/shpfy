require 'rubygems'
require 'shopify_api'


unless ARGV.empty? 
  arg = ARGV[1]
  
  source = "#{arg}.upload"
  if File.exists? source
  
    File.open(source, 'r:UTF-8') do |f|
      f.each_line do |line|
        @api = line;
        break;
      end
    end
    
    parent = ARGV[2]
    if parent
      m = "assets/theme.css|layout/theme.liquid"
    else
      m = "(assets|config|layout|snippets|templates)/.*\.*"
    end
    
    puts "Ready to sync ..."    
    watch(m) do |match|
      puts "Updating #{match[0].inspect}..."
      upload_template(match.to_s)
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
end



def upload_template(file)
  # setup instructions: https://github.com/Shopify/shopify_api
  ShopifyAPI::Base.site = @api
  asset = ShopifyAPI::Asset.find(file)
  asset.value = File.read(file)
  asset.save
end




