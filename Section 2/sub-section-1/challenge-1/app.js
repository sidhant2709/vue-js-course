const App = Vue.createApp({
  data() {
    return {
      myName: "Sidhant Kumar Sahoo",
      myAge: "29",
      imgSrc:
        "https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imgAltText: "sunset",
    };
  },
  methods: {
    calcAge() {
      return Number(this.myAge) + 5;
    },

    randomNumberGenerator() {
      return Math.random().toFixed(2);
    },
  },
});

App.mount("#vue-control-part");
