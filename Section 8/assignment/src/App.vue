<template>
  <div>
    <active-user :user-name="user.name" :user-age="user.age"></active-user>
    <user-data @set-data="setUserData"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Sidhant",
        age: 27,
      },
    };
  },
  methods: {
    setUserData(name, age) {
      this.user = {
        name: name,
        age: +age,
      };
    },
  },
};
</script>

<style>
html {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
