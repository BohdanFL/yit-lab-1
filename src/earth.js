class Earth {
    constructor() {
        this.population = 8000000000; // Кількість людей на планеті
        this.waterLevel = 71; // Відсоток поверхні, вкритої водою
    }

    growPopulation(amount) {
        if (amount < 0) throw new Error("Population increase must be positive");
        this.population += amount;
        return this.population;
    }

    decreaseWaterLevel(percent) {
        if (percent < 0 || percent > 100) throw new Error("Invalid percentage");
        this.waterLevel -= percent;
        if (this.waterLevel < 0) this.waterLevel = 0;
        return this.waterLevel;
    }

    toJSON() {
        return {
            population: this.population,
            waterLevel: this.waterLevel,
        };
    }
}

module.exports = Earth;
