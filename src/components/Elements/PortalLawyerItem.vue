<template lang="pug">
section.PortalLawyerItem
    b-row() 
        b-col(cols="3" lg="2")
            .PortalLawyerItem-img
                img(:src="require('@/assets/images/' + image + '')", alt="alt")
        b-col(cols="7" offset="1" offset-lg="0" lg="10").d-flex.flex-column
            .PortalLawyerItem__container
                .PortalLawyerItem-title {{ name }}
                .PortalLawyerItem-city {{ city }}
                .PortalLawyerItem-static {{ static }}

</template>

<script>
export default {
    props:['name','city','static','image']
}
</script>

<style lang="scss">
.PortalLawyerItem{
    color: #140A32;
    padding: 17px;
    &-img{}
    &-title{
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;
        // color: #140A32;
    }
    &-city{
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        
    }
    &-static{
        color: #2F2B4380;
        font-size: 16px;
        line-height: 22px;
    }
    &__container{
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-left: 15px;
    }
}
</style>