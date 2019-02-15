<template>
  <div id="app">
    <app-header
      :scrollTo="scrollTo"
    ></app-header>
    <app-parallax></app-parallax>
    <app-aboutme
      :divTopicStyle="topicStyle"
      :componentsTopic="'ABOUT ME'"
    ></app-aboutme>
    <app-personalinfo
      :divTopicStyle="topicStyle"
      :componentsTopic="'PERSONAL INFORMATION'"
    ></app-personalinfo>
    <app-education
      :divTopicStyle="topicStyle"
      :componentsTopic="'EDUCATION'"
    ></app-education>
    <app-skill
      :divTopicStyle="topicStyle"
      :componentsTopic="'SKILL'"
    ></app-skill>
    <app-project
      :divTopicStyle="topicStyle"
      :componentsTopic="'PROJECT'"
    ></app-project>
    <app-footer
      :divTopicStyle="topicStyle"
      :componentsTopic="'CONTACT'"
    ></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Parallax from './components/Parallax.vue'
import AboutMe from './components/AboutMe.vue'
import PersonalInfo from './components/PersonalInfo.vue'
import Education from './components/Education.vue'
import Skill from './components/Skill.vue'
import Project from './components/Project.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  data () {
    return {
      topicStyle: {
        'border-bottom': '0.5px solid black',
        'border-top': '0.5px solid black'
      }
    }
  },
  methods: {
    scrollTo(element) {
      let str = '#' + element
      console.log(str);
      return str
    }
  },
  computed: {
    
  },
  components: {
    'app-header': Header,
    'app-parallax': Parallax,
    'app-aboutme': AboutMe,
    'app-personalinfo': PersonalInfo,
    'app-education': Education,
    'app-skill': Skill,
    'app-project': Project,
    'app-footer': Footer
  }
}
</script>

<style>
  span {
    font-size: 25px;
  }

  p {
    font-size: 25px;
  }
</style>
