<template>
  <v-container fluid class="header">
    <v-app-bar
      color="green"
      dark
      @click="$router.push({name: 'home'})"
    >
      <v-btn light>Главная</v-btn>
    </v-app-bar>
  </v-container>
</template>

<style lang="scss" scoped>
  .header {
    padding: 0;
  }
</style>