<template lang="pug"> 
section.LegalConnection
    b-container 
        .LegalConnection__container.row.align-items-lg-center 
            .LegalConnection__container-element.col-12.col-lg-4
                h5 Звоните, мы работаем 24/7
                P 8 880 302-25-97
            .LegalConnection__container-element.col-5.col-lg-4
                .LegalConnection__container-element-img 
             
                    img(:src="require('@/assets/images/' + img + '.svg' )", alt="alt").d-lg-none
                    img(
                        :width="width"
                        :src="require('@/assets/images/' + img + '-big.svg')",
                         alt="alt").d-none.d-lg-block

            .LegalConnection__container-element.col-7.col-lg-4
                h6 64 юриста сейчас онлайн
                ul.LegalConnection__container-element-list
                    li 
                        img(src="@/assets/images/lawyer1.png", alt="alt")
                    li 
                        img(src="@/assets/images/lawyer5.png", alt="alt")
                    li 
                        img(src="@/assets/images/lawyer2.png", alt="alt")
                    li 
                        img(src="@/assets/images/lawyer3.png", alt="alt") 
                    li 
                        img(src="@/assets/images/lawyer4.png", alt="alt")
                    li 
                        img(src="@/assets/images/lawyer6.png", alt="alt")
                    li +59


</template>

<script>
export default {
props:['img','width']
}
</script>



<style lang="scss">
.LegalConnection{
    &__container{
        background: #33836E;
        border-radius: 20px;
        height: 291px;
        overflow: hidden;
        position: relative;
        &::before{
            content: "";
            bottom: -223px;
            width: 398px;
            height: 398px;
            transform-origin: center;
            left:-169px ;
            position: absolute;
            border-radius: 50%;
            background: #140A3233;
            @media(min-width:992px){
                &{
                    left:-100px;
                    top: 31px;
                    bottom: none;
                }
            }
        }
        &-element{
            &-list{
                margin-top: 10px;
                list-style-type: none;
                display: flex;
                padding: 0;
                width: 190px;
                position: relative;
                align-items:flex-start;
                img{
                    object-fit: contain;
                    width: 100%;
                }
                li:nth-child(1){
                    left: 0px;
                   
                }
                li:nth-child(2){
                    left: 25px;
                   
                }
                li:nth-child(3){
                    left: 50px;
                }
                li:nth-child(4){
                    left: 75px;
                }
                li:nth-child(5){
                    left: 100px;
                }
                li:nth-child(6){
                    left: 125px;
                }
                li:last-child{
                    right: 0px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 12px;
                    color: #2F2B4380;
                }
                li{
                    width: 40px;
                    border: 1.5px solid #fff;
                    position: absolute;
                    right: 10px;
                    height: 40px;
                    border-radius: 50%;
                    background: #fff;
                }
                
            }
        }
        &-element:nth-child(1){
            color: #fff;
            padding-top: 30px;
            padding-left: 40px;
            height: 30px;
            h5{
                font-size: 18px;
                font-family: "opensansB";
                margin: 0;
                font-weight: 700;
            }
            p{
                padding: 0;
                margin: 0;
                font-size: 36px;
                font-weight: 700;
            }
            @media(min-width:992px){
            &{
                order: 2;
                height: auto;
                padding: 0;
            }
          }
        }
        &-element:nth-child(2){
          position: relative;
          img{
            position: absolute;
            bottom: -5px;
            left: 0;
          }
          @media(min-width:992px){
            &{
                order: 1;
                img{
                position: relative;
                object-fit: contain;
                // width: 110%;
                bottom: -39px;
          }
            }
        }
    }
        &-element:nth-child(3){
            h6{
                font-size: 14px;
                font-family: "opensansB";
                margin: 0;
                font-weight: 700;
                color: #fff;
            }
            
            @media(min-width:992px){
            &{
                order: 3;
            }
        }
        }
    }
    } 
</style>
