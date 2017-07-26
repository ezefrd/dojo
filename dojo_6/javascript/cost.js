function Cost(amount){
    this.amount = amount;
}

Cost.prototype.sum = function(cost){
    this.amount += cost.amount;
    return this;
}

module.exports = Cost;

