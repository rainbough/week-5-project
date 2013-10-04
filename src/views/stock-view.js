(function () {

  window.StockView = Backbone.View.extend({
    className: 'stock',
    // TODO
    initialize: function(options){
		this.listenTo(this.model, 'change:price', this.render)
	},
	template: _.template($('#template .stock').html()),

	render: function(){
		this.name = this.model.get('name')
		this.price = this.model.get('price')
		var name = this.name
		var price = this.price
		$(this.el).html(this.template({ name: name, price: price}))
	}
  });

})();
