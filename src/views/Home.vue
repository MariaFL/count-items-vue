<template>
  <div class="d-flex align-center">
      <v-container>
          <h2>Кто самый популярный?</h2>
          <Presentation/>
      </v-container>
  </div>
</template>

<script>
  import Presentation from '../components/Presentation';

  export default {
    name: 'Home',

    components: {
      Presentation,
    },

    data: () => ({
      //
    }),
  };
</script>
