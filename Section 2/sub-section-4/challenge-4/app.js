const App = Vue.createApp({
  data() {
    return {
      cssClass: "",
      show: true,
      bgColor: "",
    };
  },
  computed: {
    fullCss() {
      return {
        user1: this.cssClass === "user1",
        user2: this.cssClass === "user2",
        visible: this.show,
        hidden: !this.show,
      };
    },
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
  },
});

App.mount("#assignment-4");
