<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="6">
        <input-panel></input-panel>
      </v-col>
      <v-col cols="6">
        <p>{{countItems}}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import InputPanel from './InputPanel';
  export default {
    name: 'Presentation',
    components: {
      InputPanel
    },
    computed: {
      countItems() {
        return 0;
      },
    }
  }
</script>
