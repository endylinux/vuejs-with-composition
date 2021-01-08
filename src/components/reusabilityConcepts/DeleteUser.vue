<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
// import UserAlert from './UserAlert.vue';

import alertMixin from './mixins/alert.js';

export default {
  mixins: [alertMixin],
  data() {
    return {
      alertTitle: 'Delete User?',
      // if true, alertIsVisible overrides mixin
      alertIsVisible: false
    }
  }
  // components: {
  //   UserAlert,
  // },
  // data() {
  //   return {
  //     alertIsVisible: false,
  //   };
  // },
  // methods: {
  //   showAlert() {
  //     this.alertIsVisible = true;
  //   },
  //   hideAlert() {
  //     this.alertIsVisible = false;
  //   },
  // },
};
</script>
