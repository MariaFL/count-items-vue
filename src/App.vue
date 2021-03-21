<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        Кто самый популярный?
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <Presentation/>
    </v-main>
  </v-app>
</template>

<script>
import Presentation from './components/Presentation';

export default {
  name: 'App',

  components: {
    Presentation,
  },

  data: () => ({
    //
  }),
};
</script>
