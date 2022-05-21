<template>
  <div v-for="(event, index) in events" v-bind:key="index" class="eventCard">
     <h3>Title: {{ event.title }} </h3>
     <h3>Date: {{ event.date }}</h3>
     <p>Description: {{ event.description }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EventsCard',
  data() {
    return {

    }
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

</style>
