<template lang="pug">
header
    b-container
         
        .header__mobile.d-lg-none 
                .d-flex.justify-content-between.align-items-center
                    .header__burger(@click="isShowBurger =!isShowBurger")
                        .header__burger-line 
                            span 
                            span 
                            span 
                    .header__burger-content(v-show="isShowBurger")
                    .header__burger-content-all(
                        v-show="isShowBurger"
                        @click="isShowBurger =!isShowBurger"
                        ) 2
                    .header__logo 
                        h2 #[img(src="@/assets/images/logo.svg")]Юристов
                        p  юридические консультации онлайн
                    .header__search.d-flex
                        div.pr-2
                            img(
                                src="@/assets/images/search.svg", 
                                alt="alt").global__img
                        div
                            img(
                                src="@/assets/images/user.svg", 
                                alt="alt").global__img  
        .header__descktop.d-none.d-lg-flex
            
            .header__descktop-logo
                .header__logo 
                        h2 #[img(src="@/assets/images/logo.svg")]Юристов
                        p  юридические консультации онлайн
            form.header__descktop-search 
                input(
                    type="text", 
                    placeholder="Я хочу найти..." 
                    )
                button 
            .header__descktop-help 
                button.global__btn.d-flex 
                    img(
                        src="@/assets/images/question.svg", 
                        alt="alt", 
                        ) 
                    p Задать вопрос
                .header__descktop-help-contact 
                    h6 8 909 888-90-90
                    span Бесплатный звонок юристу 24/7
        nav.HeaderNavigator.d-none.d-lg-flex 
            .HeaderNavigator__conect 
                button.btn Закать званок
                button.btn Telegram
            ul.HeaderNavigator__list
                li
                    router-link(to="home").HeaderNavigator__list-item Отзывы
                li
                    router-link(to="home").HeaderNavigator__list-item Вопросы
                li
                    router-link(to="home").HeaderNavigator__list-item Наши юристы
                li
                    router-link(to="home").HeaderNavigator__list-item Статьи
                li
                    router-link(to="home").HeaderNavigator__list-item Контакты
            .HeaderNavigator__auto 
                img(src="@/assets/images/userGreen.svg", alt="alt")
                .HeaderNavigator__auto-container 
                    router-link(to="home") Вход
                    span /
                    router-link(to="main") Регистрация
</template>

<script>
export default {

data(){
    return{
       isShowBurger:false
    
    }
},
mounted(){
    let contentNav = document.querySelector(".HeaderNavigator");
    let contentBurger = document.querySelector(".header__burger-content");
 
    contentBurger.innerHTML = contentNav.innerHTML
   

}
}
</script>

<style lang="scss">
header{
   
}
.header{
    &__burger{
        
        z-index: 4;
        &-content{
            z-index: 3;
            width: 60vw;
            position: fixed;
            height: 100%;
            // border: 1px solid #140A32;
            box-shadow: 0 0 50px #000;
            top: 0;
            left: 0px;
            background: #fff;
            @media(min-width:560px) {
                &{
                    text-align: center;
                }
                
            }
            &-all{
                position: fixed;
                top:0;
                // background: #140A32;
                bottom: 0;
                right: 0;
                left: 0;
                z-index: 2;
            }
        }
        &-line{
            cursor: pointer;
            display: flex;
            width: 20px;
            flex-direction: column;
            gap: 5px;
            height: 16px;
            &>span{
                width: 20px;
                display: block;
                height: 2px;
                border-radius: 10px;
                background: #33836E;
            }
            &>span:nth-child(1){
                
            }
            &>span:nth-child(2){
               
            }
            &>span:nth-child(3){
               
            }
        }
    }
    &__logo{
        h2{
            &>span{
                color: #33836E;
            }
        }
        h2,p{
            padding: 0;
            margin: 0;
            text-align: center;
        }

    }
    &__search{
        >.col{
            padding: 0 !important;
        }
    }
    &__descktop{
        display: flex;
        margin-top: 30px;
        justify-content: space-between;
        align-items: center;
        gap: 25px;
        padding: 0 15px;
        &-logo{
            h2{
                text-align: left;
            }
        }
        &-search{
            background: #2F2B430A;
            display: flex;
            align-items: center;
            flex: 2;
            padding: 14px 20px;
            border-radius: 10px;
            input{
                width: 100%;
                background: transparent;
                border: none;
                outline: none;
            }
            button{
                border: none;
                outline: none;
                height: 24px;
                width: 24px;
                background: transparent;
                background-image: url(@/assets/images/searchGrey.svg);
                background-repeat: no-repeat;
                background-size:contain ;
            }
        }
        &-help{
            display: flex;
            gap:25px;
            p{
                margin: 0;
            }
            button{
                gap:10px;
                align-items: center;
            }
            &-contact{
                h6{
                    color: #140A32;
                    font-size: 20px;
                    font-weight: 700;
                    line-height: 27px;
                    margin: 0;
                }
                span{
                    color: #2F2B4380;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 19px;
                }
            }
        }
    }
}
.HeaderNavigator {
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
    align-items: center;
    &__conect{
        display: flex;
        gap: 15px;
        button{
                border-radius: 10px;
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 4px 20px;
                background: #fff;
                border: 1px solid #2F2B4326 ;
                color: rgba(20, 10, 50, 1);
                &:nth-child(1){
                    &::before{
                    content: url(@/assets/images/phoneGrey.svg);
                    padding-top: 6px;
                    } 
                }
                &:nth-child(2){
                    &::before{
                    content: url(@/assets/images/telegram.svg);
                    padding-top: 4px;
                    } 
                }
               

        }
    }
    &__list{
        margin: 0;
        flex: 2;
        display: flex;
        justify-content: space-evenly;
        list-style-type: none;
        &-item{
            color: #140A32;
            font-weight: 400;
        }
    }
    &__auto {
        display: flex;
        gap: 10px;
        &-container {
            display: flex;
            gap: 3px;
            a{
                color: #140A32;
            }
        }
    }
}


.header__burger-content{
    display: flex;
    padding-top: 55px;
    padding-left: 15px;
    flex-direction: column;
 
    .HeaderNavigator__conect,.HeaderNavigator__list{
        flex-direction: column;
       
    } 
    .HeaderNavigator__auto,.HeaderNavigator__conect button{
           @media(min-width:560px) {
                &{
                    justify-content: center;
                }
                
            }
    }
    .HeaderNavigator__list{
        order: 1;
    }
    .HeaderNavigator__conect{
        order: 2;
        margin: 10px;
    }
}
</style>