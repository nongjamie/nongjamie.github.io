<template>
    <div id="ABOUT">
        <br><br><br>
        <div class="container">
            <div class="row justify-content-center" :style="divTopicStyle">
                <h1>{{ componentsTopic }}</h1>
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-4 marginStyle">
                    <div class="row justify-content-center">
                        <img :src="profileImages" :style="profileImageStyle">
                    </div>
                </div>
                <div class="col-xl-6 marginStyle" :style="detailStyle">
                    <p :key="i" v-for="i in detailItems">{{ i }}</p>
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
            profileImages: 'https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/28577899_790880621104128_4654599030704530848_n.jpg?_nc_cat=109&_nc_eui2=AeFE5dEuB6iJ9gajd6la5v05pV6OfhAUbZVYokt-gnVpdLBtpqvl-GNsYLYxcKoUs_z1dNEgF3WkcFmKpeeejPxIZcjcbSiGuEMtQ5bMNe6BIA&_nc_ht=scontent.fbkk22-2.fna&oh=5e3d81d3b63b90893c9a6dc4ff27b227&oe=5CF29096',
            profileImageStyle: {
                width: '50%',
                height: '60%',
                'border-radius': '100%'
            },
            detailItems: [
                'A 3rd year student who studies software and knowledge engineering in Kasetsart University.',
                'Passionate to improve myself in every dimension of life, Adaptable in every situation, and Connected with new people. ',
                'Looking for either the frontend developer or data scientist internship.'
            ],
            detailStyle: {
                'text-indent': '50px'
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
