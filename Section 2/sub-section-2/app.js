const App = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      counterByNum: 0,
      confirmedNameWithParam: "",
      nameWithParam: "",
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    setNameAgain(event, lastName) {
      this.nameWithParam = event.target.value + " " + lastName;
    },
    setConfirmedNameWithParamAgain() {
      this.confirmedNameWithParam = this.nameWithParam;
    },
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    incrementByNum(num) {
      this.counterByNum = this.counterByNum + num;
    },
    decrementByNum(num) {
      this.counterByNum = this.counterByNum - num;
    },
    handleSubmit(event) {
      // event.preventDefault();
      alert("Submitted");
    },
  },
});

App.mount("#event-binding");
