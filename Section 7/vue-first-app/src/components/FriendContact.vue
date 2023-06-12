<template>
  <li>
    <!-- <h2>{{ name }} {{ friendIsFavorite === "1" ? "(Favorite)" : "" }}</h2> -->
    <!-- <h2>{{ name }} {{ friendIsFavorite ? "(Favorite)" : "" }}</h2> -->
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>

    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }}
    </button>
    <button @click="toggleFavorite">
      <!-- {{ friendIsFavorite === "1" ? "Mark Not Favorite" : "Mark Favorite" }} -->
      <!-- {{ friendIsFavorite ? "Mark Not Favorite" : "Mark Favorite" }} -->
      {{ isFavorite ? "Mark Not Favorite" : "Mark Favorite" }}
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },

    // isFavorite: {
    //   type: String,
    //   required: false,
    //   default: "0",
    //   validator: function (val) {
    //     return val == "0" || val == "1";
    //   },
    // },

    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["toggle-favorite", "delete"],
  // emits: {
  //   "toggle-favorite": function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn("Id is Missing");
  //       return false;
  //     }
  //   },
  // },
  data() {
    return {
      detailsAreVisible: false,
      // friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    // toggleFavorite() {
    //   if (this.friendIsFavorite === "1") {
    //     this.friendIsFavorite = "0";
    //   } else if (this.friendIsFavorite === "0") {
    //     this.friendIsFavorite = "1";
    //   }
    // },

    // toggleFavorite() {
    //   this.friendIsFavorite = !this.friendIsFavorite;
    // },

    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
