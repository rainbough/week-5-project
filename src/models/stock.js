(function () {

  window.Stock = Backbone.Model.extend({
    updatePrice: function (newPrice) {
      var newPrice = parseFloat(newPrice);

      console.log('Updating', this.get('name'), 'price to:', newPrice);
      // TODO
      
      this.set({price: newPrice});

    }
  });

})();
