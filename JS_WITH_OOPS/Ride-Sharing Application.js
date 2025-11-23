class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(from, to, distance) {
        this.from = from;
        this.to = to;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance <= 0) throw new Error("Invalid distance!");
        return this.distance * 10; 
    }
}

try {
    const trip = new Trip("Delhi", "Noida", 15);
    console.log("Fare:", trip.calculateFare());

    const badTrip = new Trip("Delhi", "Gurgaon", -5);
    console.log(badTrip.calculateFare());
} catch (err) {
    console.log("Error:", err.message);
}
