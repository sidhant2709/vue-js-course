<template>
  <form class="form-control" @submit.prevent="submitForm">
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
    },
  },
};
</script>

<style>
.form-control {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.form-control div {
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  width: 400px;
}

.form-control button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
</style>
