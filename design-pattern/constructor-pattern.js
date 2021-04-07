class Car {
    constructor(model, year, miles) {
        this.model = model
        this.year = year
        this.miles = miles
    }
}

Car.prototype.toString = function (){
    return `${this.model} has done ${this.miles} miles`
}

const civic = new Car("Honda", 2020, 1000)
const truck = new Car("BMW", 2015, 10000)

console.log(civic, truck)

