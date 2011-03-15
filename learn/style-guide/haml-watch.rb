#!/usr/bin/ruby

files = {}
loop do
  Dir.glob("*.haml").each do |file|
    ctime = File.ctime(file).to_i
 
    if ctime != files[file]
      files[file] = ctime
      p "# recompiling: #{file}"
      fork { exec 'haml ' + file + ' > ' + file.sub!(/\.haml/, '.html') }
    end
  end

  sleep 1
end


