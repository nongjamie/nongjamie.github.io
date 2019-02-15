<template>
    <div>
        <v-parallax
        dark
        :src="backgroundImg"
        ><v-layout align-center column justify-center>
            <span :style="getFontStyle('name')">Sathira Kittisukmongkol</span>
            <span :style="getFontStyle('job')">Software Developer</span>
            <span :style="getFontStyle('job')">Data Scientist</span>
        </v-layout>
        </v-parallax>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                backgroundImg: 'https://3pc57m1zwnnj1cwbkd23g5up-wpengine.netdna-ssl.com/wp-content/uploads/2015/08/web-designer-pune-background.jpg'
            }
        },
        methods: {
            getFontStyle(input) {               
                if(input === 'name') {
                    return {
                        'color': 'black',
                        'font-size': '40px',
                        'font-weight': 'bold',
                        'margin': '10px 0px'
                    }
                }
                else {
                    return {
                        'color': 'black',
                        'font-size': '30px',
                        'font-weight': 'bold'
                    }
                }
            }
        },
        computed: {

        }
    }
</script>

<style scoped>

</style>
