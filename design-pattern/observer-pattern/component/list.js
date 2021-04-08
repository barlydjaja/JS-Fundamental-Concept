import Observer from "../lib/observer";

class List extends Observer {
  createMarkup(state) {
    return `<ul>
        ${state.users.map((user) => `<li>${user.name}</li>`).join("\n")}
        </ul>`;
  }

  render(state, selector = "app") {
    const markup = this.createMarkup(state);
    const parent = document.getElementById(selector);

    parent.innerHTML = markup;
  }

  // this method will be called by the Subject(state) whenever it updates.
  // notice how it prompts a re-render

  udpate(state) {
    this.render(state, "user-list-container");
  }
}

export default List;
