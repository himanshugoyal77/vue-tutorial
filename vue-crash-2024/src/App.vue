<script setup>
import { onMounted, ref } from "vue";

const name = ref("John Doe");
const status = ref("active");
const tasks = ref(["task1", "task2", "task3"]);
const newTask = ref("lemon");

const toggleStaus = () => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};

const addTask = () => {
  if (newTask.value.trim() === "") return;
  tasks.value.push(newTask.value);
  newTask.value = "";
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

onMounted(async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    tasks.value = data.map((task) => task.title);
  } catch (err) {
    console.log(err);
  }
});

console.log("rendered");
</script>

<template>
  <div>
    <h1>hello {{ name }}</h1>
    <p v-if="status === 'active'">user is active</p>
    <p v-else-if="status === 'pending'">user is pending</p>
    <p v-else>user is not active</p>

    <form @submit.prevent="addTask">
      <label for="newTask">Add task</label>
      <input id="newTask" type="text" name="newTask" v-model="newTask" />
      <button type="submit">Add</button>
    </form>

    <h3>Tasks:</h3>
    <ul>
      <li v-for="(task, index) in tasks" :key="task">
        <span>{{ task }}</span>
        <button @click="deleteTask(index)">X</button>
      </li>
    </ul>

    <!-- <a v-bind:href="link">Click to visit google</a> -->
    <!-- <a :href="link">Click to visit google</a> -->
    <br />
    <button v-on:click="toggleStaus">Change Status</button>
    <!-- <button @click="toggleStaus">Change Status</button> -->
  </div>
</template>

<style scoped></style>
