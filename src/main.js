// (function () {

//   // Create our stocks
//   var yhoo = new Stock({ name: 'YHOO' });
//   var aapl = new Stock({ name: 'AAPL' });
//   var goog = new Stock({ name: 'GOOG' });
//   var msft = new Stock({ name: 'MSFT' });

//   // Store in a variable for convenience
//   var stocks = [yhoo, aapl, goog, msft];

//   // Create a view for each stock and render its element to the page
//   _.each(stocks, function (stock) {
//     var view = new StockView({ model: stock });
//     $('.stocks').append(view.el);
//   });

//   // ----
//   // Get realtime stock data
//   // It's not required that you understand the code.

//   window.updateStocks = function (data) {

//     _.each(data.query.results.quote, function (quote) {
//       var stock = _.find(stocks, function (s) { return s.get('name') == quote.symbol });
//       stock.updatePrice(quote.AskRealtime);
//     });
//     setTimeout(updateLoop, 3000);
//   }

//   var updateLoop = function () {
//     $.ajax({
//       url: 'http://mks-cacher.nodejitsu.com/',
//       dataType: 'jsonp'
//     });
//   };
//   updateLoop();


// })();

var stock = new Stock({
  name: 'Yahoo',
  symbol: 'YHOO',
  price: 34.03
});


var stockView = new StockView({ model: stock });
// Render and add to page
stockView.render();
$('.stocks').append(stockView.el);

// Perform an update every two seconds
var updateLoop = function () {
  var priceChangeAmount = Math.round(Math.random() * 300 - 150) / 100;
  stock.change(priceChangeAmount);

  setTimeout(updateLoop, 2000);
};
updateLoop();
