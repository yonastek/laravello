<template>
  <div>
      <div class= " card bg-white rounded-sm p-2 cursor-pointer text-sm hover:bg-gray-100 mb-2 ">{{cardd.title}}</div>
  </div>
</template>

<script>
export default {
   props:{
     cardd:Object
   }
}
</script>

<style scoped>
    
     .card{
         box-shadow: 0 1px 0 rgba(9,30,6,0.25);
     }
</style>