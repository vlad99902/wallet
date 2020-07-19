<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add task</div>

      <q-space />

      <q-btn v-close-popup flat icon="close" />
    </q-card-section>

<!-- prevent for do not refresh page -->

    <form @submit.prevent="submitForm">
      <q-card-section>
        <div class="row q-mb-sm">
          <q-input
            outlined
            v-model="taskToSubmit.name"
            :rules="[val => !!val || 'Field is required']"
            ref = "name"
            label="Task name"
            class="col"
            autofocus="">

            <!-- clear name field -->
            <template v-slot:append>
              <q-icon 
                v-if="taskToSubmit.name"
                name = "close"
                @click="taskToSubmit.name = ''"
                class="cursor-pointer"
              />

            </template>
          </q-input>
        </div>

        <div class="row q-mb-sm">
          <q-input
            outlined
            v-model="taskToSubmit.dueDate"
            label="Due date"
            mask="date"
            :rules="['date']"
          >
            <template v-slot:append>
              <q-icon 
                v-if="taskToSubmit.dueDate"
                name = "close"
                @click="clearDueDate"
                class="cursor-pointer"
              />
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="taskToSubmit.dueDate" @input="() => $refs.qDateProxy.hide()" />
                </q-popup-proxy>
              </q-icon>
              
            </template>
          </q-input>
        </div>

        <div 
        v-if="taskToSubmit.dueDate"
        class="row q-mb-sm">
          <q-input
            outlined
            v-model="taskToSubmit.dueTime"
            label="Due time" 
            class="col">
          
            <template v-slot:append>

              <q-icon 
                v-if="taskToSubmit.dueTime"
                name = "close"
                @click="taskToSubmit.dueTime = ''"
                class="cursor-pointer"
                
              />

              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="taskToSubmit.dueTime" />
                </q-popup-proxy>
              </q-icon>
              
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="SAVE" color="primary" type="submit" />
      </q-card-actions>
    </form>

    
  </q-card>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  data() {
    return {
      taskToSubmit: {
        name: "",
        completed: false,
        dueDate: "",
        dueTime: ""
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    submitForm() {
      this.$refs.name.validate()
      if (!this.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask (){
      this.addTask(this.taskToSubmit)
      this.$emit('close')
    },
    clearDueDate () {
      this.taskToSubmit.dueDate = ''
      this.taskToSubmit.dueTime = ''
    }
  }
};
</script>