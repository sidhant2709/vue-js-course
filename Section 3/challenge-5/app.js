const App = Vue.createApp({
  data() {
    return {
      goals: [],
      inputGoal: "",
      showHideList: true,
    };
  },
  computed: {
    buttonText() {
      return this.showHideList ? "Hide List" : "Show List";
    },
  },
  watch: {},
  methods: {
    addGoals() {
      if (this.inputGoal) {
        this.goals.push(this.inputGoal);
      }
    },
    isShowHideList() {
      this.showHideList = !this.showHideList;
    },
  },
});

App.mount("#vue-controlled-section");
