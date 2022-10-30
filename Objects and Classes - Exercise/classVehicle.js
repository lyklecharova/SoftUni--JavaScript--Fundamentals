class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;

        this.parts.quality = this.parts.engine * this.parts.power;
    }
    drive(lostFuel) {
        return this.fuel -= lostFuel
    }
}
