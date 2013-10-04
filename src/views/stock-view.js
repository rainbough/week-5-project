(function () {

  window.StockView = Backbone.View.extend({
    className: 'stock',
    template: _.template($('#template .stock').html()),

    initialize: function(options){
		this.listenTo(this.model, 'change:price', this.render)
	},

	render: function(){
		$(this.el).html(this.template(this.model.toJSON()))
	}
  });

})();
