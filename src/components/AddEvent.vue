<template>
<div>
  <h2>Add Event</h2>
 <form @submit="submit">
  <fieldset>
      <input type="text" placeholder="Title" v-model="title">
      <input type="text" placeholder="Date" v-model="date">
      <input type="text" placeholder="Description" v-model="description">
  </fieldset>   
  <input class="button-primary" type="submit" value="Send">
 </form>
 </div>
</template>

<script>

export default {
  name: 'AddEvent',
  data() {
    return {
        id: "",
        title: "",
        date: "",
        description: "",
    }
  }
}
</script>

<style>

</style>