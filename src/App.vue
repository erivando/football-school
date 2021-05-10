<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <b-col md="8" offset-md="2" class="mt-5">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
