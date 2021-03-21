<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="6">
        <input-panel
                @present="show"
        ></input-panel>
      </v-col>
      <v-col cols="6">
        <p>Самый популярный: <span class="font-weight-bold">{{popular}}</span></p>
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
    data:() => ({
      popular: 'не определено'
    }),
    methods: {
      show(newItem) {
        this.popular = newItem;
      }
    }
  }
</script>
