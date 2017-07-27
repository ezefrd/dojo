require('../array');
require('../number');
const chai = require('chai');
const Item = require('../item');
const SellingPrice = require('../sellingPrice');
const Cost = require('../cost');
const Selling = require('../selling');
const Profit = require('../profit');
const Package = require('../package');
const Package2 = require('../package2');
const Macri = require('../macri');
const Barter = require('../barter');



describe("checkout", () => {
    it("calculate profit selling one item", () => {
        var item = new Item(new Cost(100));
        var selling = new Selling([item], new SellingPrice(150))
        chai.assert.isTrue(selling.calculateProfit().equals(new Profit(50)));
    });

    it("buy one and sell two", () => {
        var item = new Item(new Cost(100));
        var selling = new Selling([item, item], new SellingPrice(250));

        chai.assert.isTrue(selling.calculateProfit().equals(new Profit(50)));
    });

    it("buy N items and sell 1", () => {
        var package = new Package2(2 /* quantity */, new Cost(190));
        var selling = new Selling(
            package,
            new SellingPrice(250)
        );

        var sellingProfit = selling.calculateProfit();
        chai.assert.isTrue(sellingProfit.equals(new Profit(155)));
    });

    it("buy N items and sell 2", () => {
        var package = new Package2(2 /* quantity */, new Cost(190));
        var selling = new Selling(
            [package, package],
            new SellingPrice(250)
        );

        var sellingProfit = selling.calculateProfit();
        chai.assert.isTrue(sellingProfit.equals(new Profit(60)));
    });

    it("buy different items and sell them", () => {
        var cocaPack = new Package2(2 /* quantity */, new Cost(190));
        var fries = new Item(new Cost(100));
        var selling = new Selling(
            [cocaPack, fries],
            new SellingPrice(250)
        );

        var sellingProfit = selling.calculateProfit();
        chai.assert.isTrue(sellingProfit.equals(new Profit(55)));
    });

    it("buy different items and bart them for a macri", () => {
        var fries = new Item(new Cost(100));
        var barting = new Barter(fries, new Macri());

        var bartingProfit = barting.calculateProfit();
        chai.assert.isTrue(
            bartingProfit.equals(
                new Profit(new Macri())
            )
        );
    });
    

    /* it("buy N items and sell 1", () => {
        var item = new Item(new Cost(100));
        var package = new Package(2 , item, new Cost(190));
        var selling = new Selling(
            package.getItems(1),
            new SellingPrice(250)
        );
        console.log(selling.calculateProfit());
        chai.assert.isTrue(selling.calculateProfit().equals(new Profit(155)));
    }); */
});
