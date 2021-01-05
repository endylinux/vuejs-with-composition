<template>
  <section class="container">
    <div class="form-control">
      <h2>{{ userName }}</h2>
      <h3>{{ age }}</h3>
      <button @click="setAge">Change Age</button>
    </div>

    <div class="form-control">
      <input type="text" placeholder="First Name" @input="setFirstName" />
    </div>
    <div class="form-control">
      <input type="text" placeholder="Last Name" @input="setLastName" />
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    // const uName = ref('Eugen');
    const uAge = ref(47);
    const firstName = ref('');
    const lastName = ref('');

    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });


    function setNewAge() {
      uAge.value = uAge.value + 1;
    }

    function setFirstName(event) {
      firstName.value = event.target.value;

    }
    function setLastName(event) {
      lastName.value = event.target.value;
    }

    return {
      userName: uName,
      age: uAge,
      setAge: setNewAge,
      setFirstName,
      setLastName
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
