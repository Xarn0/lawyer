<template lang="pug">
section.FreeLaywerHelp 
    b-container 
        .FreeLaywerHelp__container 
        
            .FreeLaywerHelp__content 
                .FreeLaywerHelp__content-header 
                    h2 Бесплатная юридическая консультация онлайн
                    p Нужна помощь? Проконсультируйтесь с профессиональным юристом прямо сейчас
                .FreeLaywerHelp__content-main 
                    textarea(placeholder="Задайте свой вопрос здесь...")
                    .FreeLaywerHelp-btns 
                        button.global__btn  Задать вопрос
                        button.global__btn-sim Заказать звонок
                .FreeLaywerHelp__content-footer 
                    .FreeLaywerHelp__content-footer-container
                        h5 Почему именно «100 Юристов»
                        ul
                            li.FreeLaywerHelp__content-footer-item 100% гарантия качества
                            li.FreeLaywerHelp__content-footer-item Политика защиты клиентов
                            li.FreeLaywerHelp__content-footer-item 97% довольных клиентов
                    .FreeLaywerHelp__content-footer-img
                        img(src="@/assets/images/FreeLaywer.svg", alt="alt")
            .FreeLaywerHelp__img
                img(src="@/assets/images/FreeLaywerBig.svg", alt="alt")
</template>

<script>
export default {

}
</script>

<style lang="scss">
 .FreeLaywerHelp{
    margin-top: 50px;
    &__container{
        display: flex;
        flex-direction: column;
        @media(min-width: 992px) {
            &{
                flex-direction: row;
            }
            
        }
    }
    &__content{
        &-header{ 
            color: #140A32;
            h2{
                font-size: 26px;
                line-height: 35px;
                font-weight: 700;
                text-align: center;
                @media(min-width:540px) {
                    &{
                        font-size: 37px;
                        line-height: 50px;
                        text-align: left; 
                    }
                }
                @media(min-width:992px) {
                    &{
                        font-size: 48px;
                        line-height: 50px;
                        text-align: left; 
                    }
                }
            }
            p{
                font-size: 14px;
                line-height: 22px;
                font-weight: 400;
                text-align: center;
                @media(min-width:540px) {
                    &{
                        font-size: 16px;
                        line-height: 23px;
                        text-align: left; 
                    }
                }
                @media(min-width:992px) {
                    &{
                        font-size: 18px;
                        line-height: 28px; 
                        text-align: left;
                    }
                   
                }
            }
        }
        &-main{
            textarea{
                width: 100%;
                border: 1px solid #33836E;
                border-radius: 10px;
                color: #140A32;
                padding: 14px 20px;
                height: 166px;
                @media(min-width:992px) {
                    &{
                        width: 657px;
                    }
                    
                }
            }
        }
        &-footer{
            display: flex;
            align-items: center;
            
            ul{
                list-style-type: none;
                display: flex;
                flex-direction: column;
                @media(min-width:992px) {
                    &{
                        flex-direction: row;
                        gap: 30px;
                    }
                    
                }
            }
            &-container{
               
                h5{
                    font-size: 20px;
                    color: #140A32;
                    font-weight: 700;
                    line-height: 27px;
                    @media(min-width:540px) {
                    &{
                        font-size: 25px;
                        line-height: 32px;
                        text-align: left; 
                    }
                }
                    @media(min-width:992px) {
                        &{
                            display: none;
                        }
                        
                    }
                }
            }
            &-item{
                display: flex;
                align-items: center;
                font-size: 12px;
                gap:10px;
                &:nth-child(1){
                    &::before{
                        content: url(@/assets/images/quality.svg);
                        width: 24px;
                        height: 24px;

                    }
                }
                &:nth-child(2){
                    &::before{
                        content: url(@/assets/images/lock.svg);
                        width: 24px;
                        height: 24px;

                    }
                }
                &:nth-child(3){
                    &::before{
                        content: url(@/assets/images/like.svg);
                        width: 24px;
                        height: 24px;

                    }
                }
                @media(min-width:540px) {
                    &{
                        font-size: 18px;
                        line-height: 32px;
                        text-align: left; 
                    }
                    @media(min-width:992px) {
                    &{
                        font-size: 14px;
                        gap: 5px;
                    }}
                }
            }
            &-img{
                width: 400px;
                @media(min-width:992px) {
                    &{
                        display: none;
                    }
                    
                }
                img{
                    object-fit: contain;
                    width: 100%;
                }
            }
        }
    } 
    &-btns {
        display: flex;
        gap: 10px;
        margin: 20px 0;
        flex-direction: column;
        @media(min-width:992px) {
            &{
                flex-direction: row;
            }
                
            
            
        }
    }
    &__img{
        display: none;
        
        @media(min-width:992px) {
            &{
                display: block;
                width:600px;
            }
            
        }
        img{
            object-fit: contain;
            width: 100%;
        }
    }
 }
</style>