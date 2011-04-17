require 'rubygems'
require 'shopify_api'

puts "Ready to sync ..."
watch('(assets|config|layout|snippets|templates)/.*\.*') do |match|
  puts "Updating #{match[0].inspect}..."
  upload_template(match.to_s)
  puts "donez."
end

def upload_template(file)
  # setup instructions: https://github.com/Shopify/shopify_api
  ShopifyAPI::Base.site = "https://442c9aad6d17c21cb6ffc457a78b8d87:a794c861b5a450e2456b57e57d780f41@goldner-funk7575.myshopify.com/admin"
  asset = ShopifyAPI::Asset.find(file)
  asset.value = File.read(file)
  asset.save
end

