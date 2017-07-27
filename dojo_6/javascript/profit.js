function Profit(value){
    this.value = value;
}

Profit.prototype.equals = function(anotherProfit){
    return this.value.equals( anotherProfit.value );
}

module.exports = Profit;