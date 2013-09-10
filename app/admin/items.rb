ActiveAdmin.register Item do

  # belongs_to :sale

  menu :label => "Items"

  index do
  	column :sku
  	column :name
  	column :price
  	column :description

  	column "Add Item" do |item|
      link_to 'Add', url_for(:controller => 'sales', :action => 'add_item', :product_id => item.id), :format => :js, :remote => true
    end
  end

  show do
    # renders app/views/admin/pages/_some_partial.html.erb
    render "form"
  end

  form :partial => "form"
end
