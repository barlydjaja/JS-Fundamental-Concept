// example of observer pattern
class Subject {
  constructor() {
    this.observers = [];
  }

  // create method to add an observer
  addObserver(observer) {
    this.observers.push(observer);
  }

  // create method to remove an observer
  removeObserver(observer) {
    const observerIndex = this.observers.findIndex((obs) => {
      return observer === obs;
    });

    if (observerIndex !== -1)
      this.observers = this.observers.slice(observerIndex, 1);
  }

  // loops over this.observers and calls the update method on each observer.
  // the state object will call this method everytime it is updated
  notify(data) {
    if (this.observers.length > 0)
      this.observers.forEach((observer) => observer.update(data));
  }
}

export default Subject;
