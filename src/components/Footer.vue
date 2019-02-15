<template>
    <div id="CONTACT">
        <div class="container">
            <div class="row justify-content-center" :style="divTopicStyle">
                <h1>{{ componentsTopic }}</h1>
            </div>
            <!-- Contact -->
            <div class="container-fluid">
                <div class="row justify-content-around">
                    <div :style="getContactStyle" v-for="i in itemsContact" :key="i">
                        <br>
                        <i :class="i.class" :style="getIconStyle"></i><br>
                        <button type="button" class="btn" style="background-color: #00c4fe; font-weight: bold;" @click="btnClicked(i.param)">{{i.topic}}</button>
                        <br><br>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer -->
        <footer class="page-footer font-small" style="background-color: #00c4fe;">
            <div class="footer-copyright text-center py-3">
                <p :key="i" v-for="i in itemsFooter">{{i}}</p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    props: ['divTopicStyle', 'componentsTopic'],
    data() {
        return {
            itemsContact: [
                { topic: 'Github', param: 'github', class: 'fab fa-github' },
                { topic: 'Resume', param: 'resume', class: 'far fa-file'  },
                { topic: 'Email', param: 'email', class: 'fas fa-envelope'  },
                { topic: 'Mobilephone', param: 'telephone', class: 'fas fa-phone-square'  },
            ],
            itemsFooter: ['© 2019 Copyright :', 'SATHIRA KITTISUKMONGKOL']
        }
    },
    methods: {
        btnClicked(event) {
            if(event === 'github') 
                window.location = 'https://github.com/nongjamie'
            else if(event === 'resume') 
                window.location = 'https://drive.google.com/file/d/1UfQ4QmoNmD9cPKK6qb_FqLSMJA2s5Ne9/view?usp=sharing'
            else if(event === 'email') 
                alert('Email : jamie.sathira.k@gmail.com')
            else if(event === 'telephone') 
                alert('Mobile : (+66) 91-087-0906')
        }
    },
    computed: {
        getContactStyle() {
            return {
                'width': '20%', 
                'text-align': 'center'
            }
        },
        getIconStyle() {
            return {
                'font-size': '50px',
                'margin': '10px 0px'
            }
        }
    }
}
</script>

<style scoped>

</style>
