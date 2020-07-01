<template>
  <q-page padding>
    <button
      style="position: absolute; right: 10px"
      @click="counter++"
    >
      {{counter}}
    </button>
    <input
      v-model="message"
      @keyup.esc = "clearMessage"
      @keyup.enter = "alertMessage"
      v-autofocus
      :class= "{'error' : message.length > 22}"
      ref="messageInput"/>

    <button @click="clearMessage">Clear</button>

    <div> {{message.length}}</div>

      <h5 v-if="message.length" class="border-grey" >{{ message }}</h5>
    <h6 v-else>No message entered</h6>
    <hr>
    <p>Uppercase message: {{messageUppercase()}}</p>
    <p>Lovercase message: {{message | messageLovercase}}</p>
  </q-page>
</template>


<script>
export default {
  data(){
    return {
      message: 'Hello, world',
      counter: 0
    }
  },
  computed: {
    errorStyle (){
      if (this.message.length > 22) {
        return {
          'color' : 'red',
          'background': 'pink'
        }
      }
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
    },
    messageUppercase(){
      console.log('messageUppercase')
      return this.message.toUpperCase() + this.counter
    }
  },
  filters: {
    messageLovercase(value){
      return value.toLocaleLowerCase()
    }
  },
  directives: {
    autofocus: {
      inserted (el){
        el.focus()
      }
    }
  },
  mounted() {
    console.log (this.$refs)
    this.$refs.messageInput.className = 'bg-green'
  }

}
</script>

<style>
    .border-grey{
        border: 1px solid grey;
    }
  .error {
    color: red;
    background: pink;
  }
  input, button {
    font-size: 23px;
  }
</style>
