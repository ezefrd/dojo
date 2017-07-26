const Cost = require('./cost');
const Profit = require('./profit');

function Selling(items, sellingPrice) {
    this.items = items;
    this.sellingPrice = sellingPrice;
}

Selling.prototype.calculateProfit = function () {
    var profit = this.sellingPrice.difference(this.calculateTotalCost());
    return new Profit(profit);
}

Selling.prototype.calculateTotalCost = function () {
    var cost = new Cost(0);
    this.items.forEach(function (item) {
        //cost.sum(item.getCost());
        item.accumulateCost(cost);
    }, this);

    return cost;
}

module.exports = Selling;