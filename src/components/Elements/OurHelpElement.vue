<template lang="pug">
section.OurHelpElement 
    b-row
        b-col(cols="3").d-flex.align-items-center.justify-content-center
                img(:src="require('@/assets/images/' + images + '' )", alt="alt")
              
        b-col(cols="9") {{ text }}

</template>

<script>
export default {
props:["text","images"]
}
</script>

<style lang="scss" scoped>

.OurHelpElement{
    // &__img{
    //     display: flex;
    //     a
    // }
} 

</style>