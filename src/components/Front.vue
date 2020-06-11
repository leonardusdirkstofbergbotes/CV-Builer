<template>
    <div class="front" v-if="$parent.start === 'no'">
        <div class="left">
            <h1>Build a proffesional looking <b>resume</b> in under 5 minutes</h1>
            <button @click='startBuild' id="start">Lets get started</button>
        </div>
    </div>
</template>

<script>


export default {

  name: 'Frontpage',
  data () {
    return {
      
    }
  },
  methods: {
      startBuild() {
          this.$parent.start = 'yes'
          this.$parent.page = 'pers';
      }
  }

}
</script>

<style scoped>
.front { 
    display: flex;
    height: 100vh;
    width: 100%;
    background-image: url('../assets/hero.webp');
    background-repeat: no-repeat;
    background-size: cover;
}

.left {
    color: #f7c40d;
    background-color: rgba(114, 114, 114, 0.808);
    justify-content: center;
    align-items: center;
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 10px;
}

#start { /* Button to start the app */
    background-color: transparent;
    padding: 8px;
    border-radius: 3px;
    outline: none;
    border: 2px solid rgb(239, 239, 239);
    color: rgb(239, 239, 239);
    font-size: 20px;
    transition: 0.5s;
}

#start:hover {
    background-color: rgb(239, 239, 239);
    border: 2px solid transparent;
    color: rgb(61, 61, 61);
}


@media screen and (max-width: 425px) { 
.front {
    background-image: url('../assets/hero-small.webp');
}
.left {
    width: 65%;
}

}
</style>