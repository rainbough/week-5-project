(function () {

  window.StockView = Backbone.View.extend({
    className: 'stock',
    template: _.template($('#template .stock').html()),

    initialize: function(options){
    	var initialPrice = this.model.get('price');
        this.initialRender(initialPrice);
		this.listenTo(this.model, 'change:price', function(){
			this.render();
			var price = this.model.get('price');
			this.percentChange(initialPrice, price);
		});

		this.listenTo(this.model, 'change:color', this.colorChange);
		
	},

	colorChange: function(){
		if (this.model.get('color') === 'red'){
			$(this.el).css('color', 'red');
			
		}
		else if (this.model.get('color') === 'green'){
			$(this.el).css('color', 'green');
		}
	

	},

	percentChange: function(inPrice, cPrice){
		var pChange = ((cPrice - inPrice)/inPrice) * 100;
		$('.pchange').html("<p>change: % " + pChange + "</p>");
		if (pChange < 0){
			$('.pchange').css('background', 'red').css('color', 'white');
		}
		else if (pChange > 0){
			$('.pchange').css('background', 'green').css('color', 'white');
		}

	},

	initialRender: function(price){
		var price = price;
		var name = this.model.get('name');
		$('.initial').html('<h3>Initial Price ' + name + ': ' + price + '</h3>');
	},

	render: function(){
		$(this.el).html(this.template(this.model.toJSON()))
		
	}
  });

})();
