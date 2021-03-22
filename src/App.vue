<template>
  <v-app>
    <v-app-bar
            app
            color="primary"
            dark
    >
      <v-btn to="/" tag="router-link">Home</v-btn> |
      <router-link to="/lemurs" tag="v-btn">Lemurs</router-link>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
