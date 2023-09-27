<template lang="pug">
section.askQuestion 
    b-container 
        .askQuestion__container.row.flex-column.flex-sm-row
            .askQuestion__title.col-9.align-self-start.col-sm-6.align-self-sm-center.col-md-5.col-lg-3 Задайте вопрос юристу бесплатно
            .askQuestion__content.col-12.col-sm-6.col-md-7.col-lg-6.align-self-center
                form.SelectOur__backCall
                    
                    .SelectOur__backCall-container
                        .row.gap-2
                            .col-12.col-md-12.col-lg-6
                                input(
                                    type="tel"
                                    placeholder="Ваш номер телефона"
                                ).col-12
                            .col-12.col-md-12.col-lg-6
                                input(
                                    type="submit"
                                    name=""
                                    value="Задать вопрос юристу" ).col-12
                    .SelectOur__backCall-span.col-12.col-lg-8 Отправляя вопрос, вы соглашаетесь с условиями Пользовательского соглашения
            .askQuestion__img.col-10.col-sm-6.col-lg-3
                img(src="@/assets/images/apl.svg", alt="alt").global__img  
</template>

<script>
export default {

}
</script>

<style lang="scss">
.askQuestion{
    margin-top: 60px;
    .SelectOur__backCall-span{
        color:#2F2B4366;
    }
  
    input[type="tel"]{
        text-align: left;
        @media(min-width:778px) {
            text-align: center;
            
        }
        @media(min-width:992px){
            font-size: 12px;
        } 
    }
    input[type="submit"]{
        @media(min-width:992px){
            font-size: 12px;
        }
    }
    span{
        
        z-index: 4;
        display: block;
    }
  &__title{
  
  
    font-size: 24px;
    line-height: 32px ;
    color: #140A32;
    font-weight: 700;
    @media(min-width:992px) 
    {
        &{
            font-size: 20px;
        }
       
        
    }

   
  }
    &__container{
        display: flex;
        align-items: center;
        background: #2F2B430A;
    border-radius: 20px;
    // padding: 50px;
    span{
        color: #000;
    }
    }}
</style>