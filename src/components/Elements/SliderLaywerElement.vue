<template lang="pug">
article.SliderLaywerElement
    .SliderLaywerElement__img 
        img(:src="require('@/assets/images/' + image + '')", alt="alt")
      
    .SliderLaywerElement__content 
        .SliderLaywerElement__content-name {{ name }}
        .SliderLaywerElement__content-city {{ city }}
        .SliderLaywerElement__content-cpe {{ cpe }}
        .SliderLaywerElement__content-rewers {{ rewers }} отзывов
</template>

<script>
export default {
props:['name','city','cpe','rewers','image']
}
</script>

<style lang="scss">
.SliderLaywerElement{

    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px;
    &__img{
        align-self: center;
        border-radius: 50%;
        width: 163px;
        height: 163px;
        // border: 1px solid #993;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            object-fit: cover;
            max-width: 100%;
        }
    }
    &__content{
      
        display: flex;
        flex-direction: column;
        width: 210px;
        gap: 10px;
        &-name{
            font-size: 18px;
            color: #140A32;
            font-weight: 600;
            line-height: 24px;
        }
        &-city{
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            color: #140A32;
        }
        &-cpe{
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            color:#2F2B4380;
        }
        &-rewers{
            color: #33836E;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
        }

    }
}
</style>