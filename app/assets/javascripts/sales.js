$(document).ready(function(){

	//Work Orders Js
	work_order_wrappers = $("#sale_work_order");
	work_order_wrappers.each(function(){
		if (this.checked) {
			$(".work_order_items").show();
		}
	});

	$(work_order_wrappers).click(function(){
		if (this.checked) {
		 	$(".work_order_items").show();
		} else {
			$(".work_order_items").hide();
		}
	});

	// Line Items JS


	$(".line_items").on("change", "select", function(e){
		SelectChange(this);
		console.log('intial insert.');
		e.stopPropagation();

	});


	function SelectChange(selected_item) {
		var val = $(selected_item).find("option:selected").text();
		var base_price = val.substr(val.indexOf("$") + 1);

		$(selected_item).parent().parent().find('.item_price').val(base_price);
		if (base_price > 0) {
			$(selected_item).parent().parent().find('.item_total_price').val(base_price);
			$(selected_item).parent().parent().find('.item_total_price').trigger('change');
		} else {
			$(selected_item).parent().parent().find('.item_total_price').val(0.00);
			$(selected_item).parent().parent().find('.item_quantity').val(0);
		}

		// console.log(base_price);
		// console.log('end select change');

	}


	$(document).on("change", '.item_quantity', function(){
		var quantity = $(this).val();
		var base_price = $(this).parent().parent().find('.item_price').val();

		$(this).parent().parent().find('.item_total_price').val(base_price * quantity);
		$(this).parent().parent().find('.item_total_price').trigger('change');
		console.log(parseFloat(base_price * quantity));
	});


	$(document).on("change", '.item_price', function(){
		var base_price = $(this).val();
		var quantity = $(this).parent().parent().find('.item_quantity').val();

		$(this).parent().parent().find('.item_total_price').val(base_price * quantity);
		$(this).parent().parent().find('.item_total_price').trigger('change');
		$('.item_total_price').trigger('change');
	});


	$(document).on("change", '.item_total_price', function(){
		var sale_total = 0.00;

		$('.item_total_price').each(function(){
			var this_item = $(this).val();
			sale_total += parseFloat(this_item)
		});

		$('#sale_total_amount').val(sale_total);
		console.log('new pricing');
	});




});