<template lang="pug">
section.PortalLawyer
    b-container 
        .PortalLawyer__header.col-12 
            h3.PortalLawyer__h3.global__title-h3 Юристы портал
        .PortalLawyer__content.row 
            .PortalLawyer__list.col-12.col-lg-5
                ul.PortalLawyer__lawyer 
                    li.PortalLawyer__lawyer-item 
                        PortalLawyerItem(
                            :name="'Гурьянова Вера Владимировна'"
                            :static="'693 консультации'"
                            :city="'Юрист, Самара'"
                            :image="'lawyerPortal1.png'"
                        )
                    li.PortalLawyer__lawyer-item 
                        PortalLawyerItem(
                            :name="'Гурьянова Вера Владимировна'"
                            :static="'693 консультации'"
                            :city="'Юрист, Самара'"
                            :image="'lawyerPortal1.png'"
                        )
                    li.PortalLawyer__lawyer-item 
                        PortalLawyerItem(
                            :name="'Гурьянова Вера Владимировна'"
                            :static="'693 консультации'"
                            :city="'Юрист, Самара'"
                            :image="'lawyerPortal1.png'"
                        )
                    li.PortalLawyer__lawyer-item 
                        PortalLawyerItem(
                            :name="'Гурьянова Вера Владимировна'"
                            :static="'693 консультации'"
                            :city="'Юрист, Самара'"
                            :image="'lawyerPortal1.png'"
                        )

                .text-center.PortalLawyer__btn 
                    a.PortalLawyer__btn Все наши юристы
            .PortalLawyer__sendform.col-12.col-lg-7
                b-container
                    b-row.PortalLawyer__sendform__title
                        b-col(cols="7" lg="8").PortalLawyer__sendform-header
                            h4 Задать вопрос юристу
                       
                        b-col(cols="4" lg="3")
                            .PortalLawyer__sendform-online.align-self-start Онлайн 
                        b-col 
                            p Напишите ваш вопрос мы обязательно вам ответим
                    form.PortalLawyer__sendform__form
                        textarea(placeholder="Опишите вашу проблему..." ).col-12
                        b-row().justify-content-between 
                            b-col(cols="12" lg="4") 
                                input(type="tel", name="", placeholder="Номер телефона" )
                            b-col(cols="12" lg="4") 
                                input(type="text", name="", placeholder="ваше имя" )
                            b-col(cols="12" lg="4")  
                                input(type="submit", value="Отправить" name="Отправить")
                        span Отправляя вопрос, вы соглашаетесь с условиями Пользовательского соглашения 
                    .PortalLawyer__sendform__footer 
                        b-row 
                            b-col(cols="5" lg="4" md="3")
                                h6 48 юристов
                                p сейчас онлайн 
                            b-col(cols="7") 
                                h6 10 минут
                                p средняя скорость ответа

                        
             
</template>

<script>
import PortalLawyerItem from '../Elements/PortalLawyerItem.vue';
export default {
components:{
    PortalLawyerItem
}
}
</script>

<style lang="scss" scoped>
ul{
    padding: 0 ;
    margin: 0;
}
.PortalLawyer{
    &__btn{
        color:#33836E;
        font-size: 16px;
        font-weight: 600;
        line-height: 22px;
        text-align: center;
        width: 100%;
        background: #E0ECE9;
        padding: 16px;
        margin: 0;
        // margin-top: auto;
    }
    &__h3{
        margin-bottom: 30px;
        @media(max-width:992px) {
            margin-bottom: 20px;
            
        }
    }
    &__list{
        display: flex;
        flex-direction: column; 
        justify-content: space-between;
    }
    &__lawyer{
        
        display: flex;
        flex-direction: column;
        gap: 10px;
        list-style-type: none;
        &-item{
            border-radius:20px ;
            border: 2px solid #2F2B4326;
        }
    }
    &__sendform{
        background: #33836E;
        border-radius: 20px;
        padding: 30px;

        &__form{
            textarea{
                border-radius: 10px;
                border: none;
                padding: 12px;
                outline: none;
                // min-height: 180px;
                height: 180px;
                margin-bottom: 15px;
                @media(min-width:992px) {
                    &{
                        height: 213px;  
                    }
                    
                }
               
            } span{
                    font-weight: 600;
                    font-size: 12px;
                    line-height: 16px;
                    color: #FFFFFF80;
                }
            input{
                padding: 10px;
                border-radius: 10px;
                border: none;
                width: 100%;
                margin-bottom: 10px;
                outline: none;
            }
            input[type="submit"]{
                color: #fff;
                background: #140A32;
            }
            
        } 
        &__footer{
            color: #fff;
            margin-top: 30px;
                h6{
                    font-size: 20px;
                    font-weight: 700;
                    line-height: 27px;
                    @media(max-width:992px) {
                        &{
                            font-size: 16px;
                            line-height: 22%;
                        }
                    }
                }
                p{
                   font-size: 16px;
                   line-height: 22px;
                   font-weight: normal;
                   @media(max-width:992px) {
                    &{
                        font-size: 12px;
                    }
                    
                   }
                }
             }
        &-header{
            padding: 10px;
         
            color:#fff;
            h4{
                font-weight: 700;
                font-size: 32px;
                line-height: 44px;
                
            }
           
        }
        &__title{
            p{
                font-weight: 400;
                font-size: 17px;
                line-height: 22px;
                color: #fff;
            }
        }
        &-online{
            display: flex;
            background: #fff;
            width: 115px;
            align-items: center;
            font-size: 16px;
            border-radius: 10px;
            justify-content: center;
            font-weight: 400;
            color: #140A32;
            gap:10px;
            padding: 5px 16px;
            margin: 0;
            &::before{
                content:'';
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: #12B76A;
            }
        }
        @media(max-width:992px) {
            &{
                margin-top: 40px;
            }
            
        }
    }

}
</style>