<template lang="pug">
section.HowAskQuestion
    b-container 
        .HowAskQuestion__container 
            .HowAskQuestion__content 
                h3.global__title-h3 Как задать вопрос бесплатно?
                p Если вы находитесь в поисках хорошего юриста, здесь вы его точно найдете
                button.global__btn Задать вопрос
            .HowAskQuestion__text 
                p(v-for="item in pah" :key="pah[item]") {{ item }}
  
</template>

<script>
export default {
data(){
    return{
        pah:[
            'Бесплатное консультирование адвокатов и юристов на нашем сайте осуществляется при помощи обращения онлайн на соответствующей странице с предварительной регистрацией или по телефону горячей линии.',
            'На странице есть специальная форма. Ее необходимо заполнить, отправить и дождаться ответа – мы работаем не только бесплатно, но и круглосуточно. На оформление заявления уходит не более 10 минут.',
            'Перед тем, как обратиться за помощью, рекомендуем тщательно продумать вопрос, максимально точно сформулировать его. Таким образом вы упростите задачу специалисту и позволите ему эффективнее помочь.',
            'Специалисту необязательно предоставлять личные данные. Мы гарантируем 100% конфиденциальность. О том, что вы обращались к нам, не узнает никто'
        ]
    }
}
}
</script>

<style lang="scss">
.HowAskQuestion{
    margin: 50px 0;
    &__container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        @media(max-width:992px) {
            &{
                flex-direction: column;
                gap: 20px;
            }
            
        }
    }
    &__content{
        width: 30%;
        display: flex;
        flex-direction: column;
        gap:16px;
        @media(max-width:992px) {
            &{
                width: 50%;
               
                align-self: center;
            }
            
        }
        @media(max-width:768px) {
            &{
                width: 100%;
               
            }
            
        }
        h3{
            margin: 0;
        }
    }
    &__text{
        width: 65%;
        @media(max-width:992px) {
            &{
               width: 100%;
            }
            
        }
    }
}

</style>