<template>
  <user-alert v-if="alertIsVisible" :title="title" @close="hideAlert">
    <p>Do you want to continue with adding a user?</p>
  </user-alert>
  <section>
    <h2>Add a User</h2>
    <button @click="showAlert">Add User</button>
  </section>
</template>

<script>
import AlertMixins from '../mixins/alert.js';
import UserAlert from './UserAlert.vue';

/*
pada mixins ini yang hanya bisa di share adalah logic nya (data,methods), untuk components tidak bisa.
untuk penggunaannya adalah dengan cara mixins: [nama import file yang berisi logic yang bisa di share],
*/

export default {
  components: {
    UserAlert,
  },
  data() {
    return {
      /*
      data yang ada pada mixins akan di merge dengan data yang ada pada components local by default.
      dan jika terjadi clash (nama variable sama atau overide variable pada data/method) maka yang ada pada local components 
      yang akan di gunakan atau di run.
      */
      title: 'delete user ??',
      //jika di bawah ini di uncoment maka alertIsVisible yang ada pada mixins di overide oleh alertIsVisible yang
      //ada pada local components.
      //alertIsVisible: false,
    };
  },
  mixins: [AlertMixins],
};
</script>