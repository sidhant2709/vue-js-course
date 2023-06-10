<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <add-friend @add-contact="addContact"></add-friend>
    <ul>
      <!-- <friend-contact
        name="Jane Doe"
        phone-number="0123 44444 55"
        email-address="janedoe@abc.com"
        :is-fav="true"
      ></friend-contact>
      <friend-contact
        name="John Doe"
        phone-number="0123 45555 55"
        email-address="johndoe@abc.com"
        :is-fav="false"
      ></friend-contact> -->

      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-fav="friend.fav"
        @toggle-favorite="toggleFavoriteStatus"
        @delete="deleteFriend"
      />
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "sidhant",
          name: "Sidhant Sahoo",
          phone: "0123 45678 90",
          email: "sid@abc.com",
          fav: true,
        },
        {
          id: "siddharth",
          name: "Siddharth Sahoo",
          phone: "0123 45678 10",
          email: "sidharth@abc.com",
          fav: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      // alert("This Works");
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      identifiedFriend.fav = !identifiedFriend.fav;
    },
    addContact(name, phone, email) {
      const newFriendContact = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        fav: false,
      };
      this.friends.push(newFriendContact);
    },
    deleteFriend(friendId) {
      this.friends = this.friends.filter((friend) => friend.id !== friendId);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: "Poppins", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 3px solid #e6e6e6;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
