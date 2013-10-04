(function () {

  window.Stock = Backbone.Model.extend({
  	color: 'black',

    updatePrice: function (newPrice) {
    	console.log('Updating', this.get('name'), 'price to:', newPrice);
      var newPrice = newPrice;
      // this.set({ price: newPrice });
      var oldPrice = this.previous('price');
      if (oldPrice !== newPrice){
      	this.colorChange(oldPrice);

      }
    },
    change: function(amount){
		var newPrice = this.get('price') + amount;
		this.set({ price: newPrice });
		this.updatePrice(newPrice);
	},

		colorChange: function(oldPrice){
			if (oldPrice < this.get('price')){
				this.set({color: 'green'});
				console.log("the color was changed to green");
			}
			else if (oldPrice > this.get('price')){
				this.set({color: 'red'});
				console.log("the color was changed to red");
			}
    }
  });

})();
