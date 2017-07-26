function SellingPrice(amount){
    this.amount = amount;
}

SellingPrice.prototype.difference = function(cost){
    return this.amount - cost.amount;
}

module.exports = SellingPrice;
