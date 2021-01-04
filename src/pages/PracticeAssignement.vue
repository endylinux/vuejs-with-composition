<template>
  <div>
    <section title="Composition with Refs">
      <base-card>
        <h2>Refs Course Goal</h2>
        <!-- Task 1: Output your main course goal with help of the composition API -->
        <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
        <h3 v-if="courseDataRefs.goalVisibility">{{ courseGoal }}</h3>
        <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
        <button @click="toggleVisibilityRefs">Toggle Goal</button>
        <!-- Task 3: Manage data in three ways -->
        <!-- => Separate refs -->
        <!-- => Ref Object -->
        <!-- => Reactive Object -->
        <!-- Task 4: Also solve the assignment with the Options API -->
      </base-card>
    </section>
    <section title="Composition with Reactive">
      <base-card>
        <h2>Reactive Course Goal</h2>
        <!-- Task 1: Output your main course goal with help of the composition API -->
        <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
        <h3 v-if="courseDataReactive.goalVisibility">{{ goalR }}</h3>
        <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
        <button @click="toggleVisibilityReactive">Toggle Goal</button>
        <!-- Task 3: Manage data in three ways -->
        <!-- => Separate refs -->
        <!-- => Ref Object -->
        <!-- => Reactive Object -->
        <!-- Task 4: Also solve the assignment with the Options API -->
      </base-card>
    </section>
    <section title="Option API">
      <base-card title="Option API">
        <h2>Option Course Goal</h2>
        <!-- Task 1: Output your main course goal with help of the composition API -->
        <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
        <h3 v-if="goalVisible">Option Goal</h3>
        <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
        <button @click="toggleGoalVisible">Toggle Goal</button>
        <!-- Task 3: Manage data in three ways -->
        <!-- => Separate refs -->
        <!-- => Ref Object -->
        <!-- => Reactive Object -->
        <!-- Task 4: Also solve the assignment with the Options API -->
      </base-card>
    </section>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  setup() {

    // Composition with refs
    const courseGoal = ref('Goal is Visible!');
    // const goalIsVisible = ref(false);
    const courseDataRefs = ref({
      goal: 'Ref Goal is visible!!!',
      goalVisibility: false
    });

    // Composition with reactive
    const courseDataReactive = reactive({
      goal: 'Reactive Goal is visible!!!',
      goalVisibility: false
    });

    function toggleVisibilityRefs() {
      // goalIsVisible.value = !goalIsVisible.value;
      courseDataRefs.value.goalVisibility = !courseDataRefs.value.goalVisibility;
    }

    function toggleVisibilityReactive() {
      courseDataReactive.goalVisibility = !courseDataReactive.goalVisibility;
    }

    return {
      courseGoal: courseGoal,
      courseDataRefs,
      toggleVisibilityRefs: toggleVisibilityRefs,

      goalR: courseDataReactive.goal,
      courseDataReactive,
      toggleVisibilityReactive,
    };
  },

  data() {
    return {
      goal: 'Finish the course!',
      goalVisible: false
    };
  },
  methods: {
    toggleGoalVisible() {
      this.goalVisible = !this.goalVisible;
    }
  }
}
</script>
