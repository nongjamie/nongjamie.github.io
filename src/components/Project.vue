<template>
    <div id="PROJECT">
        <br><br><br>
        <div class="container">
            <div class="row justify-content-center" :style="divTopicStyle">
                <h1>{{ componentsTopic }}</h1>
            </div>
            <div class="container-fluid" :key="p" v-for="p in projects">
                <div class="row justify-content-start">
                    <p style="font-weight: bold">{{ p.projectName }}</p>
                </div>
                <div class="row justify-content-center">
                    <p>{{ p.projectDescription }}</p>
                </div>
                <div class="row justify-content-end">
                    <p>{{ p.projectTools }}</p>
                </div>
                <div v-if="p.projectImages.length > 0">
                    <div class="row" :key="image" v-for="image in p.projectImages">
                        <img :src="image" alt="" :style="projectImageStyle">
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
            projects: [
                {
                    projectName: 'Project: TOT Weather Care (2019)',
                    projectDescription: 'Report the TOT\'s employees about the air quality of their working branch.',
                    projectTools: 'VueJS, Firebase',
                    projectImages: ['https://i.imgur.com/yY53v30.png', 'https://i.imgur.com/9yhpDY6.png']
                },
                {
                    projectName: 'Project: Ninja Ecommerce (2018)',
                    projectDescription: 'Ecommerce website which fast, safe, inexpensive, secretly, good quality, reliable, and silently sent services like a ninja.',
                    projectTools: 'HTML, CSS, Bootstrap, jQuery, PugJS, NodeJS, Firebase',
                    projectImages: ['https://i.imgur.com/vhf7GBw.png']
                },
                {
                    projectName: 'Project: SKE Restaurant (2017)',
                    projectDescription: 'Simulate the order in the restaurant',
                    projectTools: 'Java, JavaFX',
                    projectImages: []
                }
            ]
        }
    },
    methods: {

    },
    computed: {
        projectImageStyle() {
            return {
                'width': '100%',
                'height': '60%',
                'margin': '20px 0px',
                'border': '2px solid black'
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
