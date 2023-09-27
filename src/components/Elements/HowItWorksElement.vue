<template lang="pug">
section.HowItWorksElement 
    .HowItWorksElement__container 
        .HowItWorksElement__content 
            .HowItWorksElement__content-icon
                img(:src="require('@/assets/images/' + icon)", alt="alt")
            .HowItWorksElement__content-title {{ title }}
            .HowItWorksElement__content-text {{ text }}
            button.HowItWorksElement__content-question Задать вопрос
        .HowItWorksElement__left {{ number }}
</template>

<script>
export default {
    props:["title",'icon','text','number']
}
</script>

<style lang="scss">
.HowItWorksElement {
    
   
    @media(max-width:768px) {
         &{
            flex-basis: 47%;
           
         }   
        } 
    @media(max-width:500px) {
         &{
            flex-basis: 100%;
        
         }   
        }
    @media(min-width: 768px) {
        &{
            flex-basis: 31%;
        }
        
        }
    &__container{
        display: flex;
    } 
    &__left{
        font-weight: 700;
        font-size: 42px;
        line-height: 57px;
        color:#2F2B4326 ;
        @media(min-width:500px) {
            &{
               height: 250px;
               padding: 20px;
               padding-top: 0;
            }   
       }
        
        @media(min-width:992px) {
            &{
               height: 200px;
               padding: 20px;
               padding-top: 0;
            }   
       }
    }
    &__content{
        display: flex;
        flex-direction: column;
        gap: 15px;
     
        height: auto;
        // @media(max-width:500px) {
        //     &{
        //         height: 900px;
        //     }   
        // }
        @media(min-width:768px) {
            &{
               height: 230px;
            }   
       }
         @media(min-width:992px) {
            &{
               height: 200px;
            }   
       }
        &-title {
            font-weight: 700;
            font-size: 18px; 
            line-height: 24px;
            color: #140A32;
        }
        &-text{
            font-size: 16px;
            font-weight: 400;
            line-height: 21px;
            color: #140A32;
        }
        &-question{
            line-height: 21px;
            font-size: 16px;
            font-weight: 600;
            color: #33836E;
            border: none;
            padding: 0;
            margin-top: auto;
            align-self: start;
        }
    }
        
}
</style>