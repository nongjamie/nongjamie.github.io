<template>
    <div>
        <v-navigation-drawer temporary v-model="sideNav" app>
            <div v-for="(m, index) in menu" :key="m">
                <v-divider></v-divider>
                <v-list>
                    <v-list-tile v-scroll-to="scrollTo(m)" @click="sideNav = !sideNav">
                        <v-list-tile-avatar>
                        <v-icon v-if="index == 0">home</v-icon>
                        <v-icon v-else></v-icon>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                        <v-list-tile-title><span>{{ m }}</span></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </div>
        </v-navigation-drawer>

        <v-toolbar app color="#00c4fe">
            <v-toolbar-side-icon 
                @click="sideNav = !sideNav" 
                class="hidden-lg-and-up"
            ></v-toolbar-side-icon>
            <!-- Toolbar label -->
            <v-toolbar-title>
                <span :style="getBoldStyle" @click="refreshPage">{{ mainLabel }}</span>
            </v-toolbar-title>
            <!-- Option -->
            <v-layout justify-end>
                <v-toolbar-items class="hidden-md-and-down">
                    <div :style="getNavMenuStyle" v-for="m in menu" :key="m" v-scroll-to="scrollTo(m)"><span>{{ m }}</span></div>
                </v-toolbar-items>
            </v-layout>
        </v-toolbar>
    </div>
</template>

<script>
export default {
    props: ['scrollTo'],
    data() {
        return {
            sideNav: false,
            mainLabel: 'SATHIRA\'S PORTFOILIO',
            menu: ['ABOUT', 'SKILL', 'PROJECT', 'CONTACT']
        }
    },
    methods: {
        refreshPage() {
            window.location = ''
        }
    },
    computed: {
        getBoldStyle() {
            return { 'font-weight': 'bold' }
        },
        getNavMenuStyle() {
            return { 'margin': '0px 15px' }
        }
    }
}
</script>

<style scoped>

</style>
