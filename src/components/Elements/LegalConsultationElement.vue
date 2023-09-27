<template lang="pug">
section.LegalConsultationElement.d-flex.flex-column.justify-content-between
    .LegalConsultationElement__icon
        img(:src="require('@/assets/images/' + imageUrl + '')", alt="alt")
    .LegalConsultationElement__title 
        p  {{ title }}
        .LegalConsultationElement__phone {{ phone }}
    .LegalConsultationElement__btn 
        a(:href="link").btn {{ linkText }}
</template>

<script>
export default {
props:{
    title:{
        type:String,
        default:""

    },
    phone:{
        type:Number
    },
    linkText:{
        type:String
    },
    imageUrl:{
        type:String
    },
    link:{
        type:String
    }

}
}
</script>

<style lang="scss">
.LegalConsultationElement{
    border-radius: 20px;
    width: 181px;
    height: 191px;
    padding: 20px;
    border: 1px solid  #2F2B4326;
    &__title{
        &>p{
            margin: 0;
        }
        @media(max-width:402px) {
            &{
                font-size: 20px;
            }
        }
    }
    &__phone{
        font-size: 18px;
        font-weight: 700;
        font-family: "opensansB";
        line-height: 24px;
        margin: 15px 0;
        @media(max-width:402px) {
            &{
                font-size: 20px;
            }
        }
    }
    &__btn{
        a{
            font-size: 14px;
            color: #33836E;
            font-weight: 600;
            padding: 0;
        }
    }
    @media(max-width:402px){
        &{
            width: auto;
        }
    }
    @media(max-width:402px) {
        &{
            width: auto;
            height: auto;
            
        }
    }
    @media(max-width:375px) {
        &{
            width: auto;
          
        }
    }
} 

</style>