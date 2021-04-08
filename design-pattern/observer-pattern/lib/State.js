import Subject from "./Subject";

class State extends Subject {
  constructor() {
    super();
    this.state = {};
  }

  // update the state
  // calls the update method on each observer
  update(data = {}) {
    this.state = Object.assign(this.state, data);
    this.notify(this.state);
  }

  get() {
    return this.state;
  }
}

export default State;
