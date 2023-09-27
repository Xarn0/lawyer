<template lang="pug">
section.NewMaterial
    b-container
        .NewMaterial__container 
            .NewMaterial__header 
            h3.global__title-h3  Новые правовые материалы
            .NewMaterial__content
                template(v-for="(item,key) in elements") 
                    NewMaterialElementVue(
                        :title="item.title"
                        :subtitle="item.subtitle"
                        :image="item.image"
                    )
              

</template>

<script>
import NewMaterialElementVue from '../Elements/NewMaterialElement.vue'

export default {
    components:{
        NewMaterialElementVue
    },
    data(){
        return{
            elements:{
                item1:{
                    title:"Свидетельство о праве на наследство по закону: правила и порядок выдачи",
                    subtitle:'Свидетельства о праве по наследству по закону, что это такое?',
                    image:"newMaterial.png"
                },
                item2:{
                    title:"Алименты для индивидуальных предпринимателей",
                    subtitle:'Узнайте, как получить алименты, если ваш бывший муж является',
                    image:"newMaterial2.png"
                },
                item3:{
                    title:"Как платят алименты самозанятые граждане России",
                    subtitle:'Как рассчитываются и как платят алименты самозанятые. Как взыскать',
                    image:"newMaterial3.png"
                },
            }
        }
    }
}
</script>

<style lang="scss">
.NewMaterial{
    &__content{
        display: flex;
        // flex-wrap: wrap;
        gap: 15px;
       
    display: flex;
    align-items: flex-start;
    width:100%;
    // overflow: scroll;
    // overflow-x:auto;
    @media(max-width:1200px) {
        &{
            overflow-x:auto;
        }
       
    }
    }} 
</style>
