<template lang="pug">
section.SliderReviewsElement 
    .SliderReviewsElement__header
        .SliderReviewsElement__header-icon 
            img(src="@/assets/images/userWhite.svg", alt="alt")
        .SliderReviewsElement__header-content 
            .SliderReviewsElement__header-content-title {{ name }}
            .SliderReviewsElement__header-content-date 02 июля 2023
    .SliderReviewsElement__main {{ text }}
    .SliderReviewsElement__footer
        h6.SliderReviewsElement__footer-question Вопрос:
        .SliderReviewsElement__footer-content {{ question }}
</template>

<script>
export default {
props:["name","text","question"]
}
</script>

<style lang="scss">
.SliderReviewsElement{
    display: flex;
    gap: 20px;
    height: 400px;
   
    flex-direction: column;
    
    padding: 30px;
    border-radius: 20px;
    border: 1px solid #2F2B4326;
    &__header{
        display: flex;
        gap: 15px;
        &-icon{
            border-radius: 50%;
            width: 50px;
            display: flex;
          
            justify-content: center;
            align-items: center;
            height: 50px;
            background: #115B82;
            img{
                stroke: #fff;
            }

        }
        &-content{
            &-title{
                color: #140A32;
                font-weight: 600;
                font-size: 18px;
                line-height: 24px;
            }
            &-date{
                color: #2F2B4380;
                font-size: 16px;
                font-weight: 400;
                line-height: 22px;
            }
    }
    }
    &__main{
        color: #140A32;
        line-height: 25px;
        font-size: 16px;
        font-weight: 400;
    }
    &__footer{
        margin-top: auto;
        &-question{
            color: #2F2B4380;
            font-size: 14px;
            font-weight: 400;
            line-height: 19px;
        }
        &-content{
            color: #33836E;
            line-height: 24px;
            font-size: 16px;
            font-weight: 600;
        }
    }
}
</style>