<template>
    <div id="SKILL">
        <br><br><br>
        <div class="container">
            <div class="row justify-content-center" :style="divTopicStyle">
                <h1>{{ componentsTopic }}</h1>
            </div>
            <div v-for="s in skillDetail" :key="s">
                <div class="row justify-content-center">
                    <h1>{{ s.topic }}</h1>
                </div>
                <div class="row justify-content-center">
                    <div :style="skillStyle" v-for="item in s.skill" :key="item">
                        <img :src="item.skillPic" :style="imageStyle" alt="">
                        <p>{{item.skillName}}</p>  
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
            skillDetail: [
                {
                    topic: 'Language',
                    skill: [
                        {
                            skillName: 'Java',
                            skillPic: 'https://image.flaticon.com/icons/png/512/226/226777.png'
                        },
                        {
                            skillName: 'C',
                            skillPic: 'https://img.icons8.com/color/160/c-programming.png'
                        },
                        {
                            skillName: 'Javascript',
                            skillPic: 'https://b.kisscc0.com/20180815/xgq/kisscc0-javascript-logo-number-angularjs-node-js-js-5b74177e8401c7.7492136215343348465407.png'
                        },
                        {
                            skillName: 'Python',
                            skillPic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjStBRC4Il0Ojz-yjteDoy2AYIsH5wSguC0Sc3pAzu0NZ2y4nx'
                        },
                    ]
                },
                {
                    topic: 'Front-end',
                    skill: [
                        {
                            skillName: 'Bootstrap',
                            skillPic: 'http://obscureproblemsandgotchas.com/wp-content/uploads/2018/06/bootstrap-stack-e1530246058846.png'
                        },
                        {
                            skillName: 'jQuery',
                            skillPic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGHFTGiq31vRwSlH6LNafSpR6hgBzECP43dTGIU5y6aJD83p2Z'
                        },
                        {
                            skillName: 'PugJS',
                            skillPic: 'https://camo.githubusercontent.com/a43de8ca816e78b1c2666f7696f449b2eeddbeca/68747470733a2f2f63646e2e7261776769742e636f6d2f7075676a732f7075672d6c6f676f2f656563343336636565386664396431373236643738333963626539396431663639343639326330632f5356472f7075672d66696e616c2d6c6f676f2d5f2d636f6c6f75722d3132382e737667'
                        },
                        {
                            skillName: 'VueJS',
                            skillPic: 'https://cdn-images-1.medium.com/max/1600/1*wqYF-8Dmh7LhtLkKfERc3Q.png'
                        }
                    ]
                },
                {
                    topic: 'Data Scientist',
                    skill: [
                        {
                            skillName: 'Rapid miner',
                            skillPic: 'https://pbs.twimg.com/profile_images/378800000708431883/9ca32f3333fa7e8e3d049cbbd5802a52_400x400.png'
                        }
                    ]
                }
            ]
        }
    },
    computed: {
        skillStyle() {
            return {
                'width': '25%',
                'text-align': 'center'
            }
        },
        imageStyle() {
            return {
                'width': '50%',
                'height': '50%'
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
