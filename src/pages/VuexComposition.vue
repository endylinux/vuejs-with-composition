<template>
  <section>
    <the-counter></the-counter>
    <control-center></control-center>
  </section>
</template>

<script>
import ControlCenter from "@/components/vuexComposition/ControlCenter";
import TheCounter from "@/components/vuexComposition/TheCounter";

export default {
  name: "VuexComposition",
  components: {
    ControlCenter,
    TheCounter
  }
}
</script>

<style scoped>
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
