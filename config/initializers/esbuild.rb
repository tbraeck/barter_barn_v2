# config/initializers/esbuild.rb
require 'esbuild/rails'

# Set custom configurations
Esbuild::Rails.install(config, env: :production) if defined?(Esbuild)
