const App = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    add(num) {
      this.number += num;
    },
  },
  computed: {
    checkNum() {
      if (this.number > 37) {
        return "Too Much!";
      } else if (this.number < 37) {
        return "Not there yet";
      } else {
        return this.number;
      }
    },
  },
  watch: {
    checkNum() {
      setTimeout(() => {
        this.number = 0;
      }, 5000);
    },
  },
});

App.mount("#reactivity");
