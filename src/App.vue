<template>
  <v-app>
    <v-app-bar
            app
            color="primary"
            dark
    >
      <v-btn to="/" tag="router-link" color="primary">Home</v-btn>
      <v-spacer></v-spacer>
      <v-btn to="/lemurs" tag="router-link" color="primary">
        <v-img
              alt="Лемуры"
              class="shrink mt-1 hidden-sm-and-down"
              contain
              min-width="20"
              src="./assets/lemur.png"
              width="40"
        />
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
