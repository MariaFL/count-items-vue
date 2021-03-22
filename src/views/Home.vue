<template>
  <div>





      <div class="d-flex align-center">
        Кто самый популярный?
      </div>



      <div class="d-flex align-center">
        <a href="">
          <v-img
                  alt="Лемуры"
                  class="shrink mt-1 hidden-sm-and-down"
                  contain
                  min-width="100"
                  src="../assets/lemur.png"
                  width="30"
          />
        </a>
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
