<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
  <slot></slot>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue';

export default {
  name: "UserData",
  props: ['firstName', 'lastName'],
  // computed: {
  //   userName() {
  //     return this.firstName + ' ' + this.lastName;
  //   }
  // }
  setup(props, context) {
    const uName = computed(function () {
      return props.firstName + ' ' + props.lastName
    });

    console.log(context);
    // context.emit();   //  this.$emit('save-data', 1);

    onBeforeMount(function () {
      console.log('onBeforeMount')
    });
    onMounted(function () {
      console.log('onMounted')
    });
    onBeforeUpdate(function () {
      console.log('onBeforeUpdate')
    });
    onUpdated(function () {
      console.log('onUpdated')
    });
    onBeforeUnmount(function () {
      console.log('onBeforeUnmount')
    });
    onUnmounted(function () {
      console.log('onUnmounted')
    });


    const age = inject('userAge');

    return {
      userName: uName,
      age
    }
  }
}
</script>

<style scoped>

</style>
