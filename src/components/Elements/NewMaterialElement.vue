<template lang="pug">
.NewMaterialElement
    .NewMaterialElement-icon 
        img(:src="require('@/assets/images/' + image + '')", alt="alt")
    .NewMaterialElement-title {{ title }}
    .NewMaterialElement-subtitle {{ subtitle }}
    button.NewMaterialElement-btn Читать подробнее
</template>

<script>
export default {
props:['title','image','subtitle']
}
</script>

<style lang="scss">
.NewMaterialElement{
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #2F2B4326;
    &-icon{
        border-radius: 20px;
        width: 350px;
        height: 170px;
        img{
            object-fit: contain;
            width: 100%;
        }
    }
    &-title{
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;
        color:#140A32 ;
    }
    &-subtitle{
        font-weight: 400;
        color: #2F2B43B2;
        line-height: 21px;
        font-size: 14px;
    }
    &-btn{
        color: #33836E;
        border: none;
        outline: none;
        margin: 0;
        padding: 0;
        align-self: start;
    }
}
</style>