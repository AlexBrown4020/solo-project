<template>
  <div id="app">
    <addEvent/>
    <h1>Welcome to Timeline</h1>
     <div v-for="(event, index) in events" v-bind:key="index" class="eventCard">
     <h3>Title: {{ event.title }} </h3>
     <h3>Date: {{ event.date }}</h3>
     <p>Description: {{ event.description }}</p>
  </div>
  </div>
</template>

<script>
// import Events from "./components/Events.vue"
import AddEvent from "./components/AddEvent.vue"
import axios from 'axios'

export default {
  name: 'App',
  components: {
    // events: Events,
    addEvent: AddEvent
  },
  data() {
    return {
      events: "Events"
    };
  },
  created: async function() {
    await axios
    .get("https://new-timeline.herokuapp.com/graphql")
    .then(result => {
      this.events = result.data;
    })
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
