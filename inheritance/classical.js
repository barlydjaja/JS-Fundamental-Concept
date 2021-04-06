class Human {
  constructor(race) {
    this.race = race;
  }
  showRace() {
    return `This human is of race ${this.race}`;
  }
}

class Age extends Human {
  constructor(race, age) {
    super(race);
    this.age = age;
  }
  showInfo() {
    return this.showRace + `and is of age ${this.age}`;
  }
}

person1 = new Age("Caucasian", 23);
console.log("info about person1", person1.showInfo());
