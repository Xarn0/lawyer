<template lang="pug">
section.HowItWorks 
    b-container 
        .HowItWorks__container 
            .HowItWorks__header 
                h3.global__title-h3 Как это работает?
            .HowItWorks__content 
                //- template(v-for="(item,key) in elements" )
                HowItWorksElement(
                    v-for="(item,key) in elements" 
                    :key=key
                    :title="item.title"
                    :text="item.text"
                    :icon="item.icon"
                    :number="item.id"
                    
                )

</template>

<script>
import HowItWorksElement from '../Elements/HowItWorksElement.vue';
export default {
    
    components:{
        HowItWorksElement
    },
    data(){
        return{
            elements:{
                item1:{
                    id:"1",
                    icon:"accusse.svg",
                    title:"Задайте свой вопрос",
                    text:"Мы получаем более 1500 обращений каждый день"
                },
                item2:{
                    id:"2",
                    icon:"accusse.svg",
                    title:"Получите ответы",
                    text:"На обращения круглосуточно отвечают юристы со всей России. Среднее время ответа - 15 минут"
                },
                item3:{
                    id:"3",
                    icon:"like.svg",
                    title:"Проблема решена",
                    text:"95,4% клиентов остаются полностью довольны ответами и рекомендуют нас друзьям"
                },
            }
        }
    }
}
</script>

<style lang="scss">
.HowItWorks{

    
    &__content{
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        // height: 300px;
        @media(max-width:992px) {
            &{
               height: 100%;
               gap: 20px;
            }   
       }

    } 
}

</style>