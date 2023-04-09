/* const buttonEl = document.querySelector("button");
const inputField = document.querySelector("input");
const listEl = document.querySelector("ul");

const addGoal = () => {
  const enteredValue = inputField.value;
  if (enteredValue) {
    const listItemEl = document.createElement("li");
    listItemEl.textContent = enteredValue;
    listEl.appendChild(listItemEl);
    inputField.value = "";
  }
};

buttonEl.addEventListener("click", addGoal);
 */

Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");
