<template >
    <section class="СonsultationsSlider">
    <Slider-All 
    :pois="point"
    :title="'Последние консультации'">
            <swiper-slide
            v-for="(item,key) in slider"
            :key="key"
            >
                <sloderLaywerElement
                    :name="item.name"
                    :city="item.city"
                    :cpe="item.cpe"
                    :rewers="item.rewers"
                    :image="item.image"
                
                ></sloderLaywerElement>
          </swiper-slide>
        </Slider-All>    
        </section>        
</template>

<script>

import SliderAll from "@/components/ConponetsForMainView/SliderAll.vue"
import sloderLaywerElement from "@/components/Elements/SliderLaywerElement.vue"
import { SwiperSlide } from 'swiper-vue2';

export default {
    components:{
        SliderAll,
        sloderLaywerElement,
        SwiperSlide,
      
    },
    data(){
        return{
            slider:{
                item1:{
                    image:"slider1.png",
                    name:'Кущева Марина Юрьевна',
                    city:'Юрист, Самара',
                    cpe:"Административное право, кредиты, трудовое право",
                    rewers:'5'
                },
                item2:{
                    image:"slider2.png",
                    name:'Гурьянова Вера Владимировна',
                    city:'Юрист, Самара',
                    cpe:"Административное право, кредиты, трудовое право",
                    rewers:'3'
                },
                item3:{
                    image:"slider3.png",
                    name:'Приходин Николай Валерьевич',
                    city:'Юрист, Самара',
                    cpe:"Административное право, кредиты, трудовое право",
                    rewers:'5'
                },
                item4:{
                    image:"slider4.png",
                    name:'Плясунов Константин Андреевич',
                    city:'Юрист, Самара',
                    cpe:"Административное право, кредиты, трудовое право",
                    rewers:'7'
                },
              
            },
            point:{
                300:{ slidesPerView:1,
          }, 
          450:{slidesPerView:2},
          768:{
            slidesPerView:3,
          },
          900:{ slidesPerView:3, },
          1024:{ slidesPerView:4, },
        
            }
        }
    }

}
</script>

<style>

</style>
<style>

</style>
