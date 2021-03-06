class ColorsController < ApplicationController
	before_action :find_color, only: [:destroy]

	def index
		@colors = Color.all.order("file_file_name ASC")
		@code = Code.first

		@color = Color.new
	end

	def create
		@color = Color.new(color_params)

		if @color.save
			redirect_to #
		else
			render 'new'
		end
	end

	def destroy
		@color.destroy
	end

	private

	def find_color
		@color = Color.find(params[:id])
	end

	def color_params
		params.require(:color).permit(:file)
	end
end
