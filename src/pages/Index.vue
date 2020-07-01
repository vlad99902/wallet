<template>
  <q-page padding>
      <input
        v-model="message"
        @keyup.esc = "clearMessage"
        @keyup.enter = "alertMessage"
        />
      <button @click="clearMessage">Clear</button>
        <h5 class="border-grey" v-show="message.length">{{ message }}</h5>
  </q-page>
</template>

<script>
export default {
    data(){
        return {
            message: 'Hello, world'
        }
    },
    methods: {
        clearMessage (){
            this.message = ''
        },
        /*hadnleKeyup (e){
           // console.log(e)
            if (e.keyCode == 27){
                this.clearMessage()
            }
            else if (e.keyCode == 13){
                this.alertMessage()
            }
        },*/
        alertMessage(){
            alert(this.message)
        }
    }
}
</script>

<style>
    .border-grey{
        border: 1px solid grey;
    }
</style>
