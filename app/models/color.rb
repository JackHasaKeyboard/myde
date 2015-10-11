class Color < ActiveRecord::Base
	has_attached_file :file
	validates_attachment_file_name :file, matches: [/tmTheme\Z/]
end
