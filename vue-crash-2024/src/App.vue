<script>
export default {
  data() {
    return {
      name: "John Doe",
      status: "pending",
      link: "https://google.com",
      tasks: ["task one", "task two", "task three"],
    };
  },
  methods: {
    toggleStaus() {
      if (this.status === "active") {
        this.status = "pending";
      } else if (this.status === "pending") {
        this.status = "inactive";
      } else {
        this.status = "active";
      }
    },
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

    <a v-bind:href="link">Click to visit google</a>
    <!-- <a :href="link">Click to visit google</a> -->
    <br />
    <button v-on:click="toggleStaus">Change Status</button>
    <!-- <button @click="toggleStaus">Change Status</button> -->
  </div>
</template>

<style scoped></style>
