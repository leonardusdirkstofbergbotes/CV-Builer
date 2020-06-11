<template>
  <div id="app">
    <img v-if="this.load === 'yes'" id="loader" src='./assets/load.gif'>
    <FRont />
    
    <div v-if="this.start === 'yes'" class="progWrap">
      <div class="progress"></div>
    </div>
    <div id="wrapper">
      <div id="editor"></div>
      <PErsonal />
      <REsidential />
      <COntact />
      <SUmmary />
      <SKills />
      <EXperience />
      <EDucation />
      <LAnguage />
      <CV />
      <button @click="createCV">Create JPG</button>
    </div>
  </div>
</template>

<script>
import FRont from './components/Front.vue'
import PErsonal from './components/Personal.vue'
import REsidential from './components/Residential.vue'
import COntact from './components/Contact.vue'
import SUmmary from './components/Summary.vue'
import SKills from './components/Skills.vue'
import EXperience from './components/Experience.vue'
import EDucation from './components/Education.vue'
import LAnguage from './components/Language.vue'

import CV from './components/Cv.vue'

import html2canvas from 'html2canvas'

export default {
  name: 'App',

  data () {
    return {
      load: 'no',
       start: 'no', // if true: show progress bar and CV
       prog: document.getElementsByClassName('progress'),
        page: '',
        cam: '',
        canvas: 'no',
        snap: 'no',
        image: '',
        name: '',
        surname: '',
        age: '',
        gender: '',
        dob: '',
        cellphone: '',
        homenum: '',
        email: '',
        street: '',
        house: '',
        suburb: '',
        city: '',
        postal: '',
        summary: '',
        skill: '',
        skills: [],
        role: '',
        experience: {
            company: '',
            period: '',
            roles: [], 
            reference: ''
        },
        education: {
            college: '',
            study: '',
            grad: '',
            gradYear: '',
            notes: ''
        },
        xpArr: [], // used for the CV with a for loop
        eduArr: [],
        lang: {
            language: '',
            level: ''
        },
        langArr: []
    }
  },
  components: {
    FRont,
    PErsonal,
    CV,
    REsidential,
    COntact,
    SUmmary,
    SKills,
    EXperience,
    EDucation,
    LAnguage
  },
  methods: {
    createCV () {
      window.scrollTo(0, 0);
      document.body.classList.add('wait');
      setTimeout(function(){ 
          html2canvas(document.getElementsByClassName('CV')[0]).then(canvas => {
          const a = document.createElement('a');
          document.body.appendChild(a);
          a.href = canvas.toDataURL('image/jpeg', 1);
          a.download = "CV image.jpg";
          a.click();
          if (document.body.removeChild(a)) { // when its removed it can change the cursor
            document.body.classList.remove('wait');
          }
        });
      }, 1500);
      
    }
  }
}
</script>

<style>
body, html {
  margin: 0px;
  scroll-behavior: smooth;
}

body.wait {
  cursor: wait;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#loader {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.progWrap {
  width: 100%;
}

.progress {
  height: 10px;
  background-color: #f7c40d;
  width: 0px;
  border-bottom-right-radius: 5px;
}

#wrapper {
    display: flex;
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    height: max-content;
    margin: 10px;
    flex: 1;
    padding: 15px;
    -webkit-box-shadow: 0px 0px 15px -7px #000000; 
    box-shadow: 0px 0px 15px -7px #000000;
    border-radius: 5px;
    text-align: left;
}
.back {
  cursor: pointer;
  background-color: transparent;
  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 4px;
  border: 2px solid transparent;
  outline: none;
  color: rgb(214, 214, 214);
  display: inline-flex; /* keep the inline nature of buttons */
  align-items: center;
}

.back:hover {
  color: #2c3e50;
}

.back img {
  height: 20px;
}

.card hr {
  width: 95%;
  margin: 0px auto 30px auto;
  border: 5px solid rgb(102, 163, 255);
  border-radius: 50%;
  filter: blur(2px);
}

.card strong {
    text-align: center;
    font-size: 50px;
    margin: 10px;
    color: #2c3e50;
}

.inputBox input {
    margin-bottom: 10px;
    transition: 0.8s;
    border: transparent;
    outline: none;
    border-radius: 3px;
    opacity: 0.7;
    font-weight: 500;
}

textarea {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.card textarea,input:focus {
  border: transparent;
  outline: none;
  opacity: 1;
  color: #2c3e50;
  font-weight: 700;
}

.card .inputBox {
  padding: 5px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  border: 2px solid rgb(235, 235, 235);
  margin-top: 15px;
}

.inputBox label {
  color: rgb(52, 132, 253);
  font-size: 13px;
}

small {
  color: grey;
  font-size: 11.5px;
  margin-left: auto;
}

.next { /* Button to start the app */
    background-color: transparent;
    padding: 8px;
    border-radius: 3px;
    outline: none;
    border: 2px solid #f7c40d;
    color: #f7c40d;
    font-size: 20px;
    transition: 0.5s;
    width: max-content;
    margin: 15px auto;
    cursor: pointer;
}

.next:hover {
    background-color: #f7c40d;
    border: 2px solid transparent;
    color: rgb(239, 239, 239);
}

.row {
  margin-top: 15px;
  margin-bottom: 15px;
  display: block;
}

.row .next {
  margin-left: 31%;
}

.add {
  background-color: rgb(90, 175, 255);
  color: white;
  outline: none;
  border: transparent;
  width: 40px;
  border-radius: 50%;
  padding: 7px;
  font-size: 20px;
  cursor: pointer;
}


@media screen and (max-width: 425px) {
    #wrapper {
      display: flex;
      flex-direction: column;
  }

  .CV {
    flex: 1;
  }

 }
</style>
