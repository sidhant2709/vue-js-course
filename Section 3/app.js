const App = Vue.createApp({
  data() {
    return {
      goals: [],
      inputGoal: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    addGoals() {
      if (this.inputGoal) {
        this.goals.push(this.inputGoal);
      }
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

App.mount("#vue-controlled-section");
