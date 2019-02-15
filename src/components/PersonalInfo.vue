<template>
    <div class="container">
        <div class="row justify-content-center" :style="divTopicStyle">
            <h1>{{ componentsTopic }}</h1>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-6 marginStyle" :key="sec" v-for="sec in detailItems">
                <div class="row justify-content-center" :key="detail" v-for="detail in sec">
                    <p>{{detail.key}}: {{detail.value}}</p>
                </div>
            </div>
        </div>     
    </div>
</template>

<script>
export default {
    props: ['divTopicStyle', 'componentsTopic'],
    data() {
        return {
            detailItems: [
                [
                    {key: 'Firstname', value: 'Sathira'},
                    {key: 'Lastname', value: 'Kittisukmongkol'},
                    {key: 'Nickname', value: 'Jamie'},                    
                ],
                [
                    {key: 'Birthday', value: '3 Dec 1997'},
                    {key: 'Age', value: '21'},
                    {key: 'Nationality', value: 'Thai'},   
                ]
            ]
        }
    }
}
</script>

<style scoped>
    .marginStyle {
        margin: 10px 0px
    }
</style>
