<template lang="pug">
section.OurHelpElement.col-11.col-lg-6
    .OurHelpElement__header 
        .OurHelpElement__header-icon 
            img(:src="require('@/assets/images/' + image + '')", alt="alt")
        .OurHelpElement__header-title {{ title }}
    .OurHelpElement__content {{ text }}
    
</template>

<script>
export default {
props:["image","title","text"]
}
</script>

<style lang="scss" scoped>
.OurHelpElement{
   display:flex;
   margin-top: 20px;
   width: 520px;
   flex-direction: column;
   
    
    &__header{
        display: flex;
        gap: 10px;
        margin-bottom: 15px;
        align-items: center;
        &-icon{}
        &-title{
            color: #140A32;
            font-size: 16px;
            font-weight: 600;
            line-height: 22px;
            border-bottom: 1px solid #33836E;
        }
    }
    &__content{
        font-size: 14px;
        color:#2F2B43B2;
        font-weight: 400;
        line-height: 21px;


    }
    @media(min-width:992px) {
       &{
        width: 45%; 
       }
    }
    @media(max-width:992px) {
        &{
          
            width: 520px;
         
          
           
        }
        
    }
}
</style>