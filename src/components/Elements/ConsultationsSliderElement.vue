<template lang="pug">
section.ConsultationsSliderElement
    .ConsultationsSliderElement__container 
        .ConsultationsSliderElement__time {{ time }}
        .ConsultationsSliderElement__title {{ title }}
        .ConsultationsSliderElement__text {{ text }}
        button.ConsultationsSliderElement__btn 2 ответа

</template>

<script>
export default {
    props:["time",'title','text']
}
</script>

<style lang="scss">
.ConsultationsSliderElement{
    border: 1px solid #2F2B4326;
    border-radius: 30px;
    padding: 20px;
    &__container{
         height: 350px;
         display: flex;
         flex-direction: column;
         gap: 10px;
         @media(min-width:1022px) and (max-width:1200px)  {
            &{
                height: 400px;
            }
         }
    }
   
    &__time{
        color:#2f2b4380 ;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
    }
    &__title{
        color: #140A32;
        font-size: 18px;
        font-weight: 600;
        line-height: 25px;
    }
    &__text{
        color: #140A32;
        font-weight: 400;
        font-size: 16px;
        line-height: 25.6px;

    }
    &__btn{
        border-radius: 10px;
        padding: 17px 36px;
        border: 1px solid #33836E ;
        color: #33836E;
        margin-top: auto;
        align-self: start;
    }
}
</style>