<template>
  <v-app>
    <Header/>
    <router-view/>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  data: () => ({
    
  }),
  created() {
    if (localStorage.getItem('staff') === null) localStorage.setItem('staff', JSON.stringify([]));
  },
};
</script>

<style lang="scss" scoped>
  .header {
    padding: 0;
  }
</style>
