<template lang="pug">
section.LegalConsultation
    b-container 
        .LegalConsultation__container 
            .LegalConsultation__header
                h3.LegalConsultation__header-title.global__title-h3.mb-3 Как получить бесплатную юридическую консультацию?
                p.LegalConsultation__header-subtitle Задайте вопрос юристу бесплатно круглосуточно и без регистрации
            .LegalConsultation__content.d-flex.flex-wrap.justify-content-between.mt-4.mb-4
                Legal-Consultation-Element(
                    :title="'По телефону горячей линии'",
                    :phone="88003029270",
                    :linkText="'Заказать звонок'",
                    :imageUrl = "'phone.svg'",
                    :link="'#'"
                    )
                Legal-Consultation-Element(
                    :title="'Задать свой вопрос на сайте и получить ответ онлайн'",
                    :linkText="'Задать вопрос'"
                    :imageUrl = "'arrowAbort.svg'",
                    :link="'#'"
                )
                Legal-Consultation-Element(
                    :title="'Отправить запрос на обратный звонок юриста'",
                    :linkText="'Отправить запрос'"
                    :imageUrl = "'chat.svg'",
                    :link="'#'"
                )
                Legal-Consultation-Element(
                    :title="'Записаться в офис на личную консультацию'",
                    :linkText="'Записаться'",
                    :imageUrl = "'city.svg'",
                    :link="'#'"
                )
        
</template>

<script>
import LegalConsultationElement from '../Elements/LegalConsultationElement.vue'

export default {
    name:"LegalConsultation",
    components:{
        LegalConsultationElement
    }
}
</script>

<style lang="scss">
.LegalConsultation{
    &__header{
        &-subtitle{
            font-size: 14px;
        }
    }
    &__content{
        gap: 10px;
    }
}
</style>