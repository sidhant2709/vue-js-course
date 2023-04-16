const App = Vue.createApp({
  data() {
    return {
      boxAClicked: false,
      boxBClicked: false,
      boxCClicked: false,
      boxDClicked: false,
      boxEClicked: false,
    };
  },
  computed: {
    boxDClasses() {
      return {
        active: this.boxDClicked,
      };
    },
  },
  methods: {
    isBoxClicked(box) {
      if (box === "A") {
        this.boxAClicked = !this.boxAClicked;
      } else if (box === "B") {
        this.boxBClicked = !this.boxBClicked;
      } else if (box === "C") {
        this.boxCClicked = !this.boxCClicked;
      } else if (box === "D") {
        this.boxDClicked = !this.boxDClicked;
      } else if (box === "E") {
        this.boxEClicked = !this.boxEClicked;
      }
    },
  },
});

App.mount("#styling");
