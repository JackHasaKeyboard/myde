class ColorsController < ApplicationController
	def index
		@code = Code.first
	end
end
