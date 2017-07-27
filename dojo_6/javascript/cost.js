function Cost(amount){
    this.amount = amount;
}

Cost.prototype.sum = function(cost){
    this.amount += cost.amount;
    return this;
}

Cost.prototype.divide = function(quantity){
    return new Cost(this.amount / quantity);
}

module.exports = Cost;