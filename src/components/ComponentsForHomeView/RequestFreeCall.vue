<template lang="pug">
article.RequestFreeCall 
    b-container 
        .RequestFreeCall__container
            .RequestFreeCall__img 
                img(src="@/assets/images/woman-working-call-center-big.svg", alt="alt")
            .RequestFreeCall__content 
                h5 Или закажите бесплатный звонок
                p На вопросы отвечают юристы со всей России. Среднее время ответа:15 минут
                form
                    input(
                        type="text"
                        placeholder="Номер телефона"
                        )
                    input(
                        type="submit" 
                        value="Заказать звонок") 
                span Отправляя вопрос, вы соглашаетесь с условиями Пользовательского соглашения
</template>

<script>
export default {

}
</script>

<style lang="scss">
.RequestFreeCall{
    margin: 50px 0;
 
    // @media(max-width:992px) {
    //     &{
    //         margin-top: 120px;
    //     }
        
    // }
    &__container{   
        padding: 24px 0;
        padding-bottom: 0;
        background: #33836E;
        border-radius: 20px;
        display: flex;
        // align-items: center;
        // height: 235px;
       
        @media(max-width:992px) {
            &{
              justify-content: center;  
              padding: 20px;
            }
            
        }
        
        
    }
    &__content {
        align-self: center;
        display: flex;
        flex-direction: column;
        gap: 17px;
        padding-bottom: 20px;
        h5{
            color: #fff;
            font-weight: 700;
            font-size: 32px;
            line-height: 43px;
            margin: 0;
        }
        p{
            font-weight: 400;
            font-size: 16px;
            line-height: 21.79px;
            color: #fff;
            margin: 0;

        }
        span{
            font-size: 12px;
            font-weight: 600;
            line-height: 16px;
            color: #FFFFFF80;
        }
        input{
            border-radius: 10px;
            border: none;
            outline: none;
            padding: 16px 36px;
        }
        form{
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        input[type="text"]{
            background: #fff;
            padding-left: 16px;
        }
        input[type="submit"]{
                color: #fff;
                background: transparent;
                border: 1px solid #fff;
        }
        @media(max-width:768px) {
            &{
                display: flex;
                flex-direction: column;
                gap: 10px;
                h5{
                    font-size: 20px;
                    line-height: 27px;
                }
                p{
                    font-size: 12px;
                    line-height: 16px;
                }
                span{
                    font-size: 12px;
                }
                form{
                    flex-direction: column;
                   
                }
                input{
                    text-align: center;
                }
            }
            
        }
    }
    &__img{
        align-self: end;
        @media(max-width:992px) {
            display: none;
            
        }
    }
}
</style>