<template>
  <div>
      <div class="d-flex align-center">
        Кто самый популярный?
      </div>

      <Presentation/>
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
