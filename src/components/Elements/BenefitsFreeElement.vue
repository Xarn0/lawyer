<template lang="pug">
.BenefitsFreeelement 
    .BenefitsFreeelement-icon 
        img(:src="require('@/assets/images/'+ image + '')", alt="alt")
    .BenefitsFreeelement-title {{ title }}
    .BenefitsFreeelement-text  {{ text }}
     

</template>

<script>
export default {
props:['image','title','text']
}
</script>

<style lang="scss">
.BenefitsFreeelement{
   padding: 30px;
   border-radius: 20px;
   border: 1px solid #2F2B4326;
    &-icon{
       
        border-radius: 50%;
        background:#33836E ;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px; 
        width: 87px;
        height: 87px
    }
    &-title{
        font-size: 22px;
        font-weight: 600;
        line-height: 30px;
        color: #140A32;
        margin-bottom: 10px;
    }
    &-text{
        font-size: 14px;
        line-height: 21px;
        font-weight: 400;
    }
}
</style>