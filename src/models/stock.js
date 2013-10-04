(function () {

  window.Stock = Backbone.Model.extend({
    updatePrice: function (newPrice) {
    	console.log('Updating', this.get('name'), 'price to:', newPrice);
      var newPrice = parseFloat(newPrice);
      this.set({ price: newPrice });
    }
  });

})();
