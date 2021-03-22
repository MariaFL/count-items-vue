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

      <div class="d-flex align-center">
        <a href="">
          <v-img
                  alt="Лемуры"
                  class="shrink mt-1 hidden-sm-and-down"
                  contain
                  min-width="100"
                  src="./assets/lemur.png"
                  width="30"
          />
        </a>
      </div>

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
