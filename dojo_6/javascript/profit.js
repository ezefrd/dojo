function Profit(value){
    this.value = value;
}

Profit.prototype.equals = function(anotherProfit){
    return this.value == anotherProfit.value;
}

module.exports = Profit;