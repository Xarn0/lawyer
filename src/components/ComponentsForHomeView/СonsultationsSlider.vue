<template >
    <section class="СonsultationsSlider">
    <Slider-All :title="'Последние консультации'">
            <swiper-slide
            v-for="(item,key) in slider"
            :key="key"
            >
                <Consultations-Slider-Element 
                    :text=item.text
                    :time=item.time
                    :title=item.title></Consultations-Slider-Element>
          </swiper-slide>
        </Slider-All>    
        </section>        
</template>

<script>

import SliderAll from "@/components/ConponetsForMainView/SliderAll.vue"

import { SwiperSlide } from 'swiper-vue2';
import ConsultationsSliderElement from '../Elements/ConsultationsSliderElement.vue';
export default {
    components:{
        SliderAll,
        
        SwiperSlide,
        ConsultationsSliderElement
    },
    data(){
        return{
            slider:{
                item1:{
                    time: "10 минут назад",
                    title:"Материнский капитал",
                    text:"Добрый день дом купленный на материнский капитал но он сгорел при ЧС по курганской области,доли выделены после ЧС могу ли я претендовать на жилищный сертификат в курганской области после чрезвычайной ситуации"
                },
                item2:{
                    time: "Пн 31 июл. 2023",
                    title:"Впервые устроилась на работу мне ничего не давали подписывать взяли паспорт вечером",
                    text:"впервые устроилась на работу, мне ничего не давали подписывать, взяли паспорт, вечером вернули- я работник. сейчас хочу уволиться по собственному, управляющий говор..."
                },
                item3:{
                    time: "Пн 31 июл. 2023",
                    title:"Что делать если несовершеннолетний попал в полицию а его мама нет можно",
                    text:"Что делать если несовершеннолетний попал в полицию а его мама нет можно сеста его забрать"
                },
                item4:{
                    time: "10 минут назад",
                    title:"Материнский капитал",
                    text:"Добрый день дом купленный на материнский капитал но он сгорел при ЧС по курганской области,доли выделены после ЧС могу ли я претендовать на жилищный сертификат в курганской области после чрезвычайной ситуации"
                },
                item5:{
                    time: "10 минут назад",
                    title:"Материнский капитал",
                    text:"Добрый день дом купленный на материнский капитал но он сгорел при ЧС по курганской области,доли выделены после ЧС могу ли я претендовать на жилищный сертификат в курганской области после чрезвычайной ситуации"
                },
            }
        }
    }

}
</script>

<style>

</style>
