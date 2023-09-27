<template>
  <b-container>
    <h3 class="global__title-h3"> {{ title }}</h3>
    <swiper
      :slides-per-view="3"
      :space-between="30"
      :loop="false"
      :pagination="false"
      :navigation="true"
      class="Myswiper"
      :breakpoints="pois"
    >
    <slot>
      
    </slot>
      <!-- <swiper-slide
        v-for="(item,key) in slider"
        :key="key"
        >
            <slider-Reviews-Element
              :name=item.name
              :question=item.question
              :text=item.text
          />
      </swiper-slide> -->
  
    </swiper>
  </b-container>
</template>

<script>
import { Navigation, Pagination } from 'swiper';
import SliderReviewsElement from '@/components/Elements/SliderReviewsElement.vue';
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2';

// Import Swiper styles
import 'swiper/swiper-bundle.css'
import '@/assets/scss/swiper.scss'

SwiperCore.use([Navigation, Pagination])

export default {
  props:{
    title:{
      type:String
    },
    pois:{
      type:Object,
      default(){
        return {
          300:{ slidesPerView:1,
          }, 
         
          900:{ slidesPerView:2, },
          1024:{ slidesPerView:3, },
          1724:{ slidesPerView:3, } 
      }
    }
    }
  },
  data(){
    
    return{
      swiperOptions:{
     "slides-per-view":3,
      "space-between":30,
      loop:false,
      pagination:false,
      navigation:true
      },
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
  },
  components: {
    Swiper,
    SwiperSlide,
    SliderReviewsElement
  },
  methods: {
   
  }
}
</script>

<style lang="scss" >
.Myswiper {
  .swiper-button-next{
    right: 5px;
    z-index: 3;
    padding-bottom: 30px;
     &:after{
 
  
    }
    @media(max-width:1024px) {
      &{
        display: none;
      }
    }
  }
  .swiper-button-prev{
    left:-2px;
    padding-bottom: 30px;
    @media(max-width:1024px) {
      &{
        display: none;
      }
    }
  }
 
 
}

.img-fluid {
  max-width: 100%;
  height: auto;
}
.w-100 {
  width: 100%;
}
.ml-auto, .mx-auto {
  margin-left: auto;
}
.mr-auto, .mx-auto {
  margin-right: auto;
}
</style>
