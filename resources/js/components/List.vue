<template>
  <div>
        <div class="bg-gray-300 rounded-sm p-2 mr-2 list">
            <div class="flex justify-between ">
                <div class="text-gray-800 pl-2 pb-2 font-bold">{{listt.title}}</div>
            </div>
            <card v-for="card in listt.cards" :key="card.id" :cardd='card'></card>
             
            <card-add-button></card-add-button>
        </div>
  </div>
</template>

<script>
import Card from './Card.vue'
import CardAddButton from './CardAddButton.vue'
export default {
  components: { Card, CardAddButton },
  props:{
    listt:Object
  }

}
</script>
<style scoped>
     
     .list{
         width: 250px;
         min-width: 250px;
     }
     
</style>