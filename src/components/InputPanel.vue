<template>
    <div>
        <v-textarea
                outlined
                name="data-view"
                :label="(givenCountItems - countItems).toString()"
                v-model="t"
        ></v-textarea>
        <p>{{text}}</p>
    </div>
</template>

<script>
  export default {
    name: "InputPanel",
    data: () => ({
      t: ''
    }),
    computed: {
      text() {
        return this.$store.state.text
      },
      arrayItems: function() {
        let items = this.t.split('\n');
        items.shift(); //first item - number
        return items;
      },
      givenCountItems: function(){
        let endFirstStr = this.t.indexOf('\n');
        let firstStr = this.text.slice(0, endFirstStr);
        let number = parseInt(firstStr);
        if (number) return number;
        return 0;
      },
      countItems: function() {
        let count = this.arrayItems.length;
        if (count) return count;
        return 0;
      },

    }
  }
</script>

<style scoped>

</style>