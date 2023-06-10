<template>
  <li>
    <!-- <h2>{{ name }} {{ friendIsFavorite === "true" ? "(Favorite)" : "" }}</h2> -->
    <!-- <h2>{{ name }} {{ friendIsFavorite ? "(Favorite)" : "" }}</h2> -->
    <h2>{{ name }} {{ isFav ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails" style="margin-right: 10px">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite">
      <!-- {{ friendIsFavorite === "true" ? "Mark Not Fav" : "Mark Fav" }} -->
      <!-- {{ friendIsFavorite ? "Mark Not Fav" : "Mark Fav" }} -->
      {{ isFav ? "Mark Not Fav" : "Mark Fav" }}
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone : </strong>{{ phoneNumber }}</li>
      <li><strong>Email : </strong>{{ emailAddress }}</li>
    </ul>
    <button style="margin-left: 10px" @click="$emit('delete', id)">
      Delete
    </button>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFav"],
  // props: {
  //   name: String,
  //   phoneNumber: String,
  //   emailAddress: String,
  //   isFav: String,
  // },
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
    isFav: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function (value) {
      //   return value === "true" || value === "false";
      // },
    },
  },
  emits: ["toggle-favorite", "delete"],
  // emits: {
  //   "toggle-favorite": function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn("ID IS MISSING");
  //       return false;
  //     }
  //   },
  // },
  data() {
    return {
      detailsAreVisible: false,
      // friendIsFavorite: this.isFav,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },

    // toggleFavorite() {
    //   if (this.friendIsFavorite === "true") {
    //     this.friendIsFavorite = "false";
    //   } else if (this.friendIsFavorite === "false") {
    //     this.friendIsFavorite = "true";
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
