<template lang="pug">
main()    
    section.lawyer
        b-container 
            .lawyer__container.d-flex.flex-wrap.justify-content-center
                b-col(cols="12" md="5")
                    .lawyer__images.col-12.md-6.text-center
                        img(src="@/assets/images/maneger.png", alt="Фото Юриста", srcset="").d-lg-none
                        img(src="@/assets/images/manegerBig.png", alt="Фото Юриста", srcset="").d-lg-block.d-none
                b-col(cols="12" md="7")
                    .lawyer__content
                        .lawyer__content-title.text-center.text-lg-left. 
                            Горячая линия по оказанию юридической помощи онлайн
                        .lawyer__content-subtitle.text-center.text-md-left. 
                            Профессиональная помощь доступна круглосуточно – заявки обрабатываются в любое время дня и ночи. Обращаясь к специалистам   «100 Юристов», вы можете рассчитывать на прозрачные, понятные условия сотрудничества
                        .align-items-center.lawyer__content-btns
                                b-col(cols="12" lg="5").btn.btn-success Задать Вопрос юристу
                                b-col(cols="12"  lg="6").btn  
                                        div.lawyer__content-btns-number 
                                            p 8 800 302-92-70
                                        span.lawyer__content-btns-subtitle Бесплатный звонок юристу 24/7
                   
                    ul.lawyer__content-service.d-flex.w-100.flex-wrap
                        b-row()
                            b-col(cols="6" lg="6" xl="3") 
                                li.d-flex #[img(src="@/assets/images/clock.svg", alt="alt")] Круглосуточно
                            b-col(cols="6" lg="6" xl="3")  
                                 li.d-flex  #[img(src="@/assets/images/flash.svg", alt="alt")]Быстро
                            b-col(cols="6" lg="6" xl="3")  
                                li.d-flex #[img(src="@/assets/images/money.svg", alt="alt")]Бесплатно
                            b-col(cols="6" lg="6" xl="3")  
                                li.d-flex #[img(src="@/assets/images/lock.svg", alt="alt")]Конфиденциально
                           
                            
                            
    Legal-Assistance
    Legal-Consultation
    Legal-Connection(
        :img="'woman-working-call-center'"
        :width="'400px'"
    )
    Our-Help
    Select-Our
    Our-Sociality
    Ask-Queston
    Slider-Reviews
    Portal-Lawyer
    Thema-References
</template>

<script>
import LegalConsultation from "@/components/ConponetsForMainView/LegalСonsultation.vue";
import LegalAssistance from "@/components/ConponetsForMainView/LegalAssistance.vue";
import LegalConnection from '../components/ConponetsForMainView/LegalConnection.vue';
import OurHelp from "@/components/ConponetsForMainView/OurHelp.vue";
import SelectOur from "@/components/ConponetsForMainView/SelectOur.vue";
import OurSociality from "@/components/ConponetsForMainView/OurSociality.vue";
import AskQueston from "@/components/ConponetsForMainView/askQueston.vue";
import PortalLawyer from '../components/ConponetsForMainView/PortalLawyer.vue';
import SliderReviews from "@/components/ConponetsForMainView/SliderReviews.vue";

import ThemaReferences from '../components/ConponetsForMainView/ThemaReferences.vue';
import { mapGetters } from 'vuex'
export default {
    components:{
        LegalConsultation,
        LegalAssistance,
        LegalConnection,
        OurHelp,
        SelectOur,
        OurSociality,
        AskQueston,
        PortalLawyer,
        SliderReviews,
        ThemaReferences
        
    },
    methods:{
        ...mapGetters["GET_SHOW_BURDER"]
    }
}
</script>

<style lang="scss">
.lawyer{
    &__container{
        margin-top: 50px;
        @media(min-width:768px) {
            &{
              flex-direction:row-reverse  
            }
            
            
        }
    }
    &__content{
        gap: 15px;
        display: flex;
        flex-direction: column;
        &-title{
           font-weight: 700;
           font-size: 22px; 
           color: #140A32;
           line-height: 29.96px;
           @media(min-width: 1024px) {
            &{
                text-align-last: left;
                font-size: 38px;
                line-height: 52px;
            }
            
           }
        }
        &-subtitle{
            font-size: 16px;
            font-weight: 400;
            margin: 15px 0;
            font-family: "opensansR";
            line-height: 22.4px;
            @media(min-width: 1024px) {
            &{
                text-align-last: left;
                font-size: 16px;
                line-height: 25px;
            }
            
           }
        }
        &-btns{
            // gap: 10px;
            display: flex;
            justify-content: space-between;
            &>.btn{
                border-radius: 15px;
            }
            &-number{
                color:#33836E;
                font-weight: 700;
                font-size: 24px;
                p{
                 border-bottom: #33836E 2px solid;   
                 display: inline;
                }
                // display: inline-block;
                font-family: "opensansB";
                
            }
            &-subtitle{
                font-size: 13px;
                color: #2F2B4380;
                font-weight: 400;
                // font-family: "opensansR";
            }
            @media(max-width:990px) {
                &{
                    flex-direction: column;
                }
                
            }
        }
        &-service{
            margin-top: 10px;
            list-style-type: none;
            margin-left: 0;
            // gap: 10px;
            padding-left: 0;
            @media(max-width:1200px) {
                    &{
                      flex-wrap: wrap;
                     
                      
                    }
                    
                }
            & li{
                gap: 7px;
                padding: 0;
                @media(max-width:1200px) {
                    &{
                        margin-bottom: 10px;
                    }
                    
                }

            }
           
        }
    }
}
</style>