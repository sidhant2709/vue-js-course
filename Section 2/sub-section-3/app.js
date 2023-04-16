const App = Vue.createApp({
  data() {
    return {
      name: "",
      counterByNum: 0,
      fullName: "",
    };
  },
  methods: {
    /* outputFullName() {
      console.log("Running Again...!");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Sahoo";
    }, */
    setName(event) {
      this.name = event.target.value;
    },
    incrementByNum(num) {
      this.counterByNum = this.counterByNum + num;
    },
    decrementByNum(num) {
      this.counterByNum = this.counterByNum - num;
    },
    resetInput() {
      this.name = "";
    },
  },
  computed: {
    /* fullName() {
      console.log("Running Again...!");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Sahoo";
    }, */
  },
  watch: {
    name(value) {
      if (this.name === "") {
        this.fullName = "";
      } else {
        this.fullName = value + " " + "Sahoo";
      }
    },
  },
});

App.mount("#event-binding");
