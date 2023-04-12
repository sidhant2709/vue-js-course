const App = Vue.createApp({
  data: function () {
    return {
      alertText: "Button is Clicked",
      keydownChangeValue: "",
      onEnterChangeValue: "",
    };
  },
  methods: {
    handleClick() {
      alert(this.alertText);
    },
    handleKeydownChange(event) {
      this.keydownChangeValue = event.target.value;
    },
    handleKeydownClickEnter(event) {
      this.onEnterChangeValue = event.target.value;
    },
  },
});

App.mount("#event-binding");
