function Item(cost){
    this.cost = cost;
}

Item.prototype.accumulateCost = function(cost){
    cost.sum(this.cost);
    return cost;
}

module.exports = Item;