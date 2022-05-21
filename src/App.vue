<template>
<div>
      <h1>Welcome to Timeline</h1>
      <p>{{this.post}}</p>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      post: null,
    };
  },
  created: async function() {
    await axios
    .get("https://new-timeline.herokuapp.com/graphql")
    .then(result => {
      this.post = result.data;
      console.log(result.data)
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
