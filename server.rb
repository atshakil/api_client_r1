#!/usr/bin/env ruby
require 'webrick'
ARGV.empty? ? puts("Expected a port number") : WEBrick::HTTPServer.new(BindAddress: "0.0.0.0", Port: ARGV[0].to_i, DocumentRoot: File.expand_path('.')).start

