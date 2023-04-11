const App = Vue.createApp({
  data() {
    return {
      interPolation: "Interpolation {{key}}",
      courseGoalA: "Learn VueJS!! concept: methods object",
      courseGoalB: "Master VueJS!! concept: methods object",
      courseGoalC: "<p>Raw HTML content with v-html</p>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outerGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

App.mount("#user-goal");
