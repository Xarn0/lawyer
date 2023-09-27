<template lang="pug">
section.SelectOur
    .container
        .SelectOur__header
            .SelectOur__info.col-12.col-lg-5.col-md-8.align-self-center
                h3.SelectOur__title.global__title-h3 Почему стоит выбрать нас?
                .SelectOur__text. 
                    Срочно понадобились услуги профессионального юриста или адвоката? Решение есть! Наша горячая юридическая линия – возможность оперативно, абсолютно бесплатно получить ответ на любой вопрос
                ul.SelectOur__list.d-flex 
                    li.SelectOur__list-item
                        h6.SelectOur__list-item-year 100 тыс
                        span Успешных дел
                    li.SelectOur__list-item
                        h6.SelectOur__list-item-year 10 лет
                        span Успешной работы
                    li.SelectOur__list-item
                        h6.SelectOur__list-item-year 100
                        span Юристов онлайн

            .SelectOur__img 
                img(src="@/assets/images/comanda.svg", alt="alt") 
        .SelectOur__conects
            .SelectOur__hotLine 
                p Телефон горячей линии
                h6 8 800 302-92-70
            label.col-12 Заказать обратный звонок
            form.SelectOur__backCall
                
                .SelectOur__backCall-container 
                    .row.gap-2
                        .col-12.col-md-6 
                            input(
                                type="tel"
                                placeholder="Ваш номер телефона"
                            ).col-12
                        .col-12.col-md-6 
                            input(
                                type="submit"
                                name=""
                                value="Заказать звонок" ).col-12
                .SelectOur__backCall-span Отправляя вопрос, вы соглашаетесь с условиями Пользовательского соглашения
</template>

<script>
export default {

}
</script>

<style lang="scss" >
.SelectOur{
    &__header{
        justify-content: space-between;
        display: flex;
        @media(max-width:992px) {
            &{
                flex-direction: column;
            }
            
            
        }
    }
    &__img {
        position: relative;
        text-align: center;
       margin-top: 30px;
        width: 350px;
        @media(max-width:992px) {
                &{
                 
                   align-self: center;
                }
                
            }
        img{
            // position: relative;
            object-fit: contain;
            width: 100%;
          
           @media(min-width:992px) {
                &{
                    // bottom: -50px;
                    position: absolute;
                    left: -20px;
                    bottom: 0;
                }
                
            }

            @media(max-width:400px) {
                &{
                    width: 320px;
                }
                
            }
            
        }
    }
    &__title{
        
    }
    &__text{
        margin-top: 15px;
        margin-bottom: 25px;
        font-size: 14px;
        line-height: 22px;
        font-weight: normal;
        color:#140A32;
    }
    &__list{
        list-style-type: none;
        padding: 0;
        text-align: center;
        display: flex;
        justify-content: space-between;
        gap:5px;
        &-item{
            &-year{
                color: #33836E;
                font-size: 20px;
                line-height: 27.24px;
                font-weight: 700;
                &+span{
                    font-size: 14px;
                    color: #140A32;
                    line-height: 16px;
                    font-weight: 400;
                }
            }
        }
    }
    &__conects{
        background: #33836E;
        // height: 200px;
        padding: 20px;
        border-radius: 20px;
    }
    &__hotLine{
        color: #fff;
        p{
        font-size: 18px;
        padding: 0;
        margin: 0;
        font-weight: 600;
        line-height: 24px;
        @media(min-width:992px) {
            &{
                font-size: 24px;
                line-height: 32px;
            }
            
        }
        }
        h6{
            font-size: 36px;
            font-weight: 700;
            line-height: 49px;
        }
        @media(min-width:992px) {
            &{
                font-size: 42px;
            font-weight: 700;
            line-height: 57px;
            }
            
        }
    }
    &__backCall{
        &-container{
            gap: 10px;
        }
        &-span{
            font-size: 12px;
            font-weight: 600;
            line-height: 16px;
            color: #FFFFFF80;
        }
        
        input{
            border-radius: 10px;
            padding: 15px;
            outline: none;
            border: none;
            text-align: center;
            margin: 10px 0;
            
                
            
        }
        input[type="submit"]{
            background: #33836E;
            border: 1px solid #fff;
            font-size: 16px;
            line-height: 21px;
            color: #fff;
        }
    }
    label{
            color: #fff;
            font-size: 16px;
            font-weight: 600;
            line-height: 21px;
            padding: 0;
        }
}
</style>