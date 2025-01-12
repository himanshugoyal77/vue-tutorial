<script>
import { ref } from "vue";

export default {
  setup() {
    const name = ref("John Doe");
    const status = ref("active");
    const tasks = ref(["task1", "task2", "task3"]);

    const toggleStaus = () => {
      if (status.value === "active") {
        status.value = "pending";
      } else if (status.value === "pending") {
        status.value = "inactive";
      } else {
        status.value = "active";
      }
    };

    return { name, status, tasks, toggleStaus };
  },
};
</script>

<template>
  <div>
    <h1>hello {{ name }}</h1>
    <p v-if="status === 'active'">user is active</p>
    <p v-else-if="status === 'pending'">user is pending</p>
    <p v-else>user is not active</p>

    <ul>
      <li v-for="task in tasks" :key="task">{{ task }}</li>
    </ul>

    <!-- <a v-bind:href="link">Click to visit google</a> -->
    <!-- <a :href="link">Click to visit google</a> -->
    <br />
    <button v-on:click="toggleStaus">Change Status</button>
    <!-- <button @click="toggleStaus">Change Status</button> -->
  </div>
</template>

<style scoped></style>
