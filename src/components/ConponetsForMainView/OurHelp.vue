<template lang="pug">
section.OurHelp 
    .container 
        h3.global__title-h3 Как мы сможем помочь вам? 
        .OurHelp__content.row.gap-4
            .col-12.col-md-6
                Our-Help-Element(
                    :images="'phoneHelp.svg'",
                    :text="'Провести бесплатную консультацию на личном приёме у нас в офисе, по телефону горячей линии 8 800 302-92-70, в онлайн чате или по WhatsApp и Telegram'",
                )
            .col-12.col-md-6 
                Our-Help-Element(
                        :images="'bookHelp.svg'",
                        :text="'В ходе консультации будет проанализирована ваша ситуация с точки зрения законодательства Российской Федерации с последними изменениями на сегодняшний день'",
                    )
            .col-12.col-md-6 
                Our-Help-Element(
                        :images="'arrowHelp.svg'",
                        :text="'После чего наш специалист сможет определить все возможные пути решения вашей ситуации выявить все возможные подводные камни и подскажет как их избежать.'",
                    )
            .col-12.col-md-6
                Our-Help-Element(
                        :images="'successHelp.svg'",
                        :text="'Как показывает практика данной консультации бывает достаточно для решения вашего вопроса. Если нет, то вы всегда сможете воспользоваться нашими услугами на выгодных условиях.'",
                    )

</template>

<script>
import OurHelpElement from '@/components/Elements/OurHelpElement.vue';
export default {
    components:{
        OurHelpElement
    }
}
</script>

<style lang="scss">
.OurHelp{
    &__content{
        
        margin: 20px 0;
        @media(max-width:768px) {
            &{
                gap:10px;
            }
        }
        @media(min-width:768px) {
            &{
               .OurHelpElement {
                margin-top: 20px;
               }
            }
        }
    }
}
</style>