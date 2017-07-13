const chai = require('chai');
const Item = require('../item');
const SellingPrice = require('../sellingPrice');
const Cost = require('../cost');
const Selling = require('../selling');
const Profit = require('../profit');


describe("checkout", () => {
    describe("dummy", function () {
        it("dummy", () => {
            var item = new Item(new Cost(100));
            var selling = new Selling([item] , new SellingPrice(150))
            chai.assert.isTrue(selling.calculateProfit().equals(new Profit(50)));
        });
    });

    describe("buy one and sell two", function () {
        it("buy one and sell two", () => {
            var item = new Item(new Cost(100));
            var selling = new Selling([item,item],  new SellingPrice(250));

            chai.assert.isTrue(selling.calculateProfit().equals(new Profit(50)));
        });
    });
});
