<template >
<section>
    <Slider-All
        :title="'Отзывы наших клиентов'"
    >
        <swiper-slide
        v-for="(item,key) in slider"
        :key="key"
        >
            <slider-Reviews-Element
              :name=item.name
              :question=item.question
              :text=item.text
          />
      </swiper-slide>
    </Slider-All>    
    </section>        
</template>

<script>
import SliderAll from "@/components/ConponetsForMainView/SliderAll.vue"
import SliderReviewsElement from '@/components/Elements/SliderReviewsElement.vue';
import { SwiperSlide } from 'swiper-vue2';
export default {
    components:{
        SliderAll,
        SliderReviewsElement,
        SwiperSlide
    },
    data(){
        return{
            slider:{
                item1:{
                name:"Вадим",
                text:"Хочу поблагодарить Веру Владимировну за оказанную мне помощь, объяснила что да как, на душе стало намного легче",
                question:"Заберут ли меня в случае общей мобилизации на войну если я"
                },
                item2:{
                name:"Вадим",
                text:"Спасибо огромное за грамотную помощь. Ответили очень быстро, проконсультировали, подсказали и самое главное помогли в моей ситуации. Высоко квалифицированный специалист, спасибо",
                question:"Заберут ли меня в случае общей мобилизации на войну если я"
                },
                item3:{
                name:"Вадим",
                text:"Хочу поблагодарить Веру Владимировну за оказанную мне помощь, объяснила что да как, на душе стало намного легче",
                question:"Заберут ли меня в случае общей мобилизации на войну если я"
                },
                item4:{
                name:"Вадим",
                text:"Спасибо огромное за грамотную помощь. Ответили очень быстро, проконсультировали, подсказали и самое главное помогли в моей ситуации. Высоко квалифицированный специалист, спасибо",
                question:"Заберут ли меня в случае общей мобилизации на войну если я"
                },
      }
        }
    }
}
</script>

<style>

</style>