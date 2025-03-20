const { expect } = require("chai");
const Earth = require("../src/earth");

describe("Earth Class", () => {
    let earth;

    beforeEach(() => {
        earth = new Earth();
    });

    it("should have initial population of 8 billion", () => {
        expect(earth.population).to.equal(8000000000);
    });

    it("should increase population correctly", () => {
        earth.growPopulation(1000000);
        expect(earth.population).to.equal(8001000000);
    });

    it("should decrease water level correctly", () => {
        earth.decreaseWaterLevel(10);
        expect(earth.waterLevel).to.equal(61);
    });

    it("should throw an error if increasing population with a negative value", () => {
        expect(() => earth.growPopulation(-1000000)).to.throw(
            "Population increase must be positive"
        );
    });

    it("should throw an error if decreasing water level with an invalid percentage", () => {
        expect(() => earth.decreaseWaterLevel(-5)).to.throw(
            "Invalid percentage"
        );
        expect(() => earth.decreaseWaterLevel(105)).to.throw(
            "Invalid percentage"
        );
    });
});
