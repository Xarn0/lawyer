<template lang="pug">
footer.footer 
    b-container
        .footer__container
            .footer__logo 
                .footer__logo-log
                    h2 #[img(src="@/assets/images/logo.svg")]Юристов
                    p  юридические консультации онлайн
                .footer__logo-contact 
                    h5 8 867 342-95-70
                    p Бесплатный звонок юристу 24/7
                .footer__logo-email admin@100yuristov.com
                .footer__logo-postion 
                    .footer__logo-postion-img 
                        img(src="@/assets/images/geo.svg", alt="alt")
                    .footer__logo-postion-data.  
                        Москва, Шлвая нажная д. * стр. *
            ul.footer__one 
                li 
                    a(href="#") О проекте
                li 
                    a(href="#") Контакты
                li 
                    a(href="#") Новости
                li 
                    a(href="#") Статьи
                li 
                    a(href="#") Архив
            ul.footer__two 
                li 
                    a(href="") Наши юристы
                li 
                    a(href="") Горячая линия
                li 
                    a(href="") Консультация по телефону
                li 
                    a(href="") Задать вопрос юристу
                li 
                    a(href="") Юридические заявки
            ul.footer__three 
                li 
                    a(href="#") Вебмастерам
                li 
                    a(href="#") Регистрация на сайте
                li 
                    a(href="#") Пользовательское соглашение
                li 
                    ul.footer__network
                        li 
                            a(href="") 
                                img(src="@/assets/images/youtube.svg", alt="alt")
                        li 
                            a(href="") 
                                img(src="@/assets/images/vk.svg", alt="alt")
                        li 
                            a(href="") 
                                img(src="@/assets/images/ok.svg", alt="alt")
                        li 
                            a(href="") 
                                img(src="@/assets/images/tg.svg", alt="alt")
                li 
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer{
    margin-top: 100px;
    ul{
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 15px;
        a{
            color: #140A32;
            font-weight: 400;
            line-height: 22px;
        }
    }
    &__logo{
        display: flex;
        flex-direction: column;
        gap: 22px;
        margin-bottom: 15px;
      
        &-log{
            h2{
                margin: 0;
            }
            p{
                margin: 0;
            }
        }
        &-contact {
            h5{
                font-size: 20px;
                font-weight: 700;
                line-height: 27px;
                color: #140A32;
                margin: 0;
            }
            p{
                font-weight: 400;
                font-size: 12px;
                line-height: 16px;
                color:#2F2B4380 ;
                margin: 0;
            }
        }
        &-email{
            color:#33836E ;
            font-size: 16px;
            font-weight: 600;
            line-height: 22px;
        }
        &-postion {
            display: flex;
            // width: 212px;
            // margin: 0 auto;
            gap: 10px;
            align-items: center;
            &-img{
                width: 37px;
             
                img{
                    object-fit: contain;
                    width: 100%;
                }
            }
        }
    }
    &__container{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        
        
        @media(min-width:768px) {
            &{
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                gap: 20px;
                align-items: start;
            }
            
        }
        @media(min-width:992px) {
            &{
                justify-content: space-between;
                align-items: start;
            }
            
        }
    }
   &__network{
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-direction: row !important; 
    a{
        width: 24px;
        height: 24px;
        img{
            object-fit: contain;
            width: 100%;
        }
    }
   }
}
</style>