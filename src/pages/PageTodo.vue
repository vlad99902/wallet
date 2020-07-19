<template>
  <!-- for padding and margin element -->
  <q-page class="q-pa-md">
    <!-- for dosappear line when no elements -->
    <q-list bordered separator v-if="Object.keys(tasks).length" >
      <task v-for="(task, key) in tasks" :key="key" :task="task" :id="key"></task>
    </q-list>

    <!-- show add dialog btn -->
    <div class="fixed-bottom-right absolute-bottom-right text-center">
      <q-btn @click="showAddTask = true" color="black" label="Add" />
    </div>

    <!-- add-task tag from export from file add task in script/components -->
    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      showAddTask: false
    };
  },
  //to return data from store
  computed: {
    ...mapGetters("tasks", ["tasks"])
  },
  //import task.vue from components folder
  components: {
    task: require("components/Tasks/Task.vue").default,
    "add-task": require("components/Tasks/Modals/AddTask.vue").default
  }
};
</script>

<style>
</style>
