const Cost = require('./cost');
const Profit = require('./profit');

function Selling(itemsOrPackage, sellingPrice) {
    this.itemsOrPackage = itemsOrPackage;
    this.sellingPrice = sellingPrice;
}

Selling.prototype.calculateProfit = function () {
    var profit = this.sellingPrice.difference(this.calculateTotalCost());
    return new Profit(profit);
}

Selling.prototype.calculateTotalCost = function () {
    var cost = new Cost(0);
    this.itemsOrPackage.asArray().forEach(function (item) {
        item.accumulateCost(cost);
    }, this);

    return cost;
}

module.exports = Selling;