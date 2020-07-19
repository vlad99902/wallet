<template>
    <q-item 
      @click="updateTask({ id: id, updates: { completed: !task.completed}})"
      :class = "task.completed ? 'bg-grey-2' : ''"
      clickable
      v-ripple
      >
        
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>
        
        <q-item-section>
          <q-item-label>
            {{task.name}}
          </q-item-label>
        </q-item-section>

        <q-item-section side v-if="task.dueDate">
          <div class="row"> 
            
            <div class="column justify-center">
              <img src="../../img/tag.png" width="50%" height="60%" alt="">
            </div>

            <div class="column justify-center">
              <q-item-label caption class="row justify-end">{{task.dueDate}}</q-item-label>
              <q-item-label caption class="row justify-end">{{task.dueTime}}</q-item-label>
            </div>
            
          </div>
        </q-item-section>
        
        <q-item-section side>
          <!-- click.stop for only this button clicked trigger -->
          <q-btn
            @click.stop="promptToDelete(id)"
            flat
            round
            dense
            color="black"
            icon="delete" />
        </q-item-section>
      </q-item>
</template>

<script>
  import { mapActions } from "vuex";
  export default {
    props: ['task', 'id'],
    //actions form store-task file
    methods: {
      ...mapActions('tasks',['updateTask', 'deleteTask']),
      promptToDelete(id) {
        
        this.$q.dialog({
          title: 'Confirm',
          message: 'Would you like to delete this?',
          cancel: true,
          persistent: true
        }).onOk(() => {
          this.deleteTask(id)
        })
      
      }
  }
}

</script>

<style>

</style>