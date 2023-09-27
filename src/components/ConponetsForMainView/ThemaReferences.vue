<template lang="pug">
article.ThemaReferences 
    b-container
        .global__title-h3.ThemaReferences__header Темы справочных материалов
        .ThemaReferences__content
            .ThemaReferences__item(v-for="(value,key) in themas")
                h4 {{ key }}
                ul.ThemaReferences__item-list
                    li.ThemaReferences__item-list-element(v-for="el in value").
                        {{ el }}


</template>

<script>
export default {
    data(){
        return{
            themas:{
                A:[
                    "Автокредит",
                    "Авторское право",
                    "Автоюрист",
                    "Административное право"
                ],
                Б:[
                    'Банкротство'
                ],
                В:[
                    'Военное право'
                ],
                Г:[
                    'Гражданское право'
                ],
                Ж:[
                    'Жилищное право'
                ],
                З:[
                    'Земельное право',
                    "Защита прав потребителей"
                ],
                И:[
                    'Ипотека',
                    "Исполнительное производство"
                ],
                К:[
                    'Корпоративное право',
                    "Кредиты"
                ],
                М:[
                    'Медицинское право',
                    "Миграционное право"
                ],
                Н:[
                    'Наследственное право',
                    "Недвижимость"
                ],
                О:[
                    'Образование',
                    
                ],
                С:[
                    'Семейное право',
                    "Соцобеспечение",
                    'Судопроизводство'
                ],
                Т:[
                    'Таможенное право',
                    "Трудовое право",
                
                ],
                У:[
                    'Уголовное право',
                 
                ],
                Ю:[
                    'Юридические услуги',
                 
                ],
            }
        }
    }
}
</script>

<style lang="scss">
.ThemaReferences{
    ul{
      padding: 0;
    }
    &__header{
        margin-top: 80px;
        margin-bottom: 40px;
    }
    &__content{
        display: flex;
        flex-wrap: wrap;
        // justify-content: space-between;
        gap: 20px;
        @media(max-width:993px) {
            justify-content: space-between;
            
        }
        @media(max-width:450px) {
           gap: 5px;
            
        }
    }
    &__item{
        width: 250px;
        @media(max-width:768px) {
            width: 200px;
            
        }
        @media(max-width:450px) {
            width: 180px;
            
        }
        @media(max-width:399px) {
            width: 150px;
            
        }
        h4{
            margin-bottom: 20px;
            font-size: 24px;
            font-weight: 700;
            color: rgba(20, 10, 50, 1);

        }
        &-list{
            list-style-type: none;
            user-select: none;
            &-element{
                cursor: pointer;
                transition: color .6s;
                &:hover{
                    color: #928686;
                }
            }
        }
        li{
            color: rgba(20, 10, 50, 1);

        }
    }
}
</style>