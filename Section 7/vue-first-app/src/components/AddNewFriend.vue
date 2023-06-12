<template>
  <form class="form-control" @submit.prevent="submitForm" ref="friendForm">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="enteredName" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="enteredEmail" />
    </div>
    <div>
      <label for="name">Phone:</label>
      <input type="tel" id="phone" v-model="enteredPhone" />
    </div>
    <div>
      <button>Add Friend</button>
    </div>
  </form>
</template>
<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitForm() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
      //   this.enteredName = "";
      //   this.enteredPhone = "";
      //   this.enteredEmail = "";
      this.$refs.friendForm.reset();
    },
  },
};
</script>
