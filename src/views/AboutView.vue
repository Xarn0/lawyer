<template lang="pug">
section
  b-container
    b-breadcrumb(:items="items") 
 
  
</template>
<script>

export default {
  data(){
    return {
      items:[
        {
          text:"main",
          href:"/"
        },
        {
          text:"about",
          active: true
        }
      ]
    }
  }
}
</script>