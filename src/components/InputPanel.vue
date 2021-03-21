<template>
    <div>
        <v-textarea
                outlined
                name="data-view"
                :label="label"
                v-model="text"
                :disabled="disabling"
                @input="$emit('present', 'ещё не определено')"
        ></v-textarea>
        <v-btn
           elevation="2"
           :disabled="givenCountItems-countItems !== 0 || disabling"
           :loading="disabling"
           @click="calculate"
        >Посчитать</v-btn>
    </div>
</template>

<script>
    /** TODO:
     * 1. add code and radiobutton for delete garbage (commas, extra spaces, blank lines)
     * 2. add input for txt file
     * **/
  export default {
    name: "InputPanel",
    data: () => ({
      text: ''
    }),
    computed: {
      disabling() {
        return this.$store.state.isCalculating;
      },
      label() {
        return `${this.countItems} из ${this.givenCountItems}`;
      },
      arrayItems: function() {
        let items = this.text.split('\n');
        items.shift(); //first item - number
        return items;
      },
      givenCountItems: function(){
        let endFirstStr = this.text.indexOf('\n');
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
    },
    methods: {
      calculatePopular(array) {
          let maps = {};
          let popularElement = array[0],
            maxCount = 1;
          array.forEach((element) => {
            if(maps[element] == null)
              maps[element] = 1;
            else
              maps[element]++;
            if(maps[element] > maxCount)
            {
              popularElement = element;
              maxCount = maps[element];
            }
          });
          return popularElement;
      },
      calculate() {
        this.$store.commit('setCalculating', true);
        this.$emit('present', this.calculatePopular(this.arrayItems));
        this.$store.commit('setCalculating', false);
      }
    }
  }
</script>