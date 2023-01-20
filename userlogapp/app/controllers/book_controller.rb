class BookController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index 
        
        render json: Book.all
    end

def show 
   
        b=Book.find(params[:id])
    render json: b
end
    def create
       
        b = !params[:bookName].empty?
        if(b)
            s = Book.create('bookName': params[:bookName],'bookAuthor': params[:bookAuthor],'bookQuantity': params[:bookQuantity])
            puts s
            render json: "Data Added"
        else
            render json: "Data not Added"
        end

    
    end
    def update
       
        b=Book.find(params[:id])
        if(b.nil?)
            render json: "Book does not exist"
        else
            b.update('bookName': params[:bookName],'bookAuthor': params[:bookAuthor],'bookQuantity': params[:bookQuantity])
            render json: "Book updated"
    end

end
def destroy
    
    b = Book.find(params[:id])
    b.destroy
    render json: "Data Deleted"
end
    

end
