# setting up API communication with Shopify
#
# setup instructions: https://github.com/Shopify/shopify_api
#
# to get the input API Key and Secret create a new application in your Shopify Partner Dashboard


# 1. Put these into irb

ShopifyAPI::Session.setup({:api_key => "ab8df6b887a186345a73be93ce14b9d2", :secret => "5150f1d0b74617575b5097dffdd17a4f"})
session = ShopifyAPI::Session.new("scrol.myshopify.com")
url = session.create_permission_url


# 2. Visit the url, and copy the value of t
https://scrol.myshopify.com/?shop=scrol.myshopify.com&timestamp=1303202459&signature=e915c951e0f033b3e1c9f8455de9ee32&t=e8a6e7e2e4b999991370e767390e0dae

# 3. go Back to irb

session = ShopifyAPI::Session.new("scrol.myshopify.com", "e8a6e7e2e4b999991370e767390e0dae")
session.valid?

# 4. now your API key & secret (from 1.) can be used to sync with your theme

ActiveResource::Base.site = session.site  # => "https://ab8df6b887a186345a73be93ce14b9d2:fa0491cdea71830006961aaf07888d4e@scrol.myshopify.com/admin" 

