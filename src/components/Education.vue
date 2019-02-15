<template>
    <div class="container">
        <div class="row justify-content-center" :style="divTopicStyle">
            <h1>{{ componentsTopic }}</h1>
        </div>
        <div class="row justify-content-center" v-for="item in educationHistory" :key="item">
            <div class="col">
                <div class="row justify-content-center">
                    <h2>{{ item.institute }}</h2>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-2" :style="instituteLogoSecStyle">
                        <img :src="item.image" alt="" :style="instituteLogoStyle">
                    </div>
                    <div class="col-lg-6" style="">
                        <p>{{ item.period }}</p>
                        <p>{{ item.detail }}</p>
                        <p>{{ item.level }}</p>
                    </div>
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
            educationHistory: [
                {
                    institute: 'Kasetsart University',
                    image: 'https://www.ku.ac.th/web2012/resources/template2/ui/images/logoKU.jpg',
                    period: '2016 - Present (Graduated in 2020)',
                    detail: 'Software & Knowledge Engineer',
                    level: 'GPA 3.27'
                },
                {
                    institute: 'Suankularb Wittayalai School',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/%E0%B8%95%E0%B8%A3%E0%B8%B2_%E0%B8%A3%E0%B8%A3_2.jpg/440px-%E0%B8%95%E0%B8%A3%E0%B8%B2_%E0%B8%A3%E0%B8%A3_2.jpg',
                    period: '2013 - 2016',
                    detail: 'Gifted Science Program',
                    level: 'GPA 3.6'
                }
            ]
        }
    },
    computed: {
        instituteLogoStyle() {
            return {
                'width': '80%',
                'max-width': '200px',
                'max-height': '200px'
            }
        },
        instituteLogoSecStyle() {
            return {
                'text-align': 'center'
            }
        }
    }
}
</script>

<style scoped>
    .marginStyle {
        margin: 10px 0px
    }
</style>
