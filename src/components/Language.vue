<template>
    <div class="card" v-if="$parent.page === 'lang'">
        <button class='back' @click="goBack"><img src='../assets/back.svg'>Go back</button>

        <strong>WHICH LANGUAGES CAN YOU SPEAK?</strong>
        <hr>

        <div class="inputBox">
            <label>Language</label>
            <input v-model="$parent.lang.language">
        </div>

        <div class="inputBox">
            <label>How well do you speak {{$parent.lang.language}}</label>
            <input v-model="$parent.lang.level">
        </div>
        
        <div class="row">
            <button type="button" @click="addLang" class="add">+</button>
            <button type="button" @click="nextPage" class="next" 
                :disabled="$parent.lang.language != ''" 
                :title="title"
                :class="[$parent.lang.language === '' ? 'normal' : 'noGo']">Next section
            </button>
        </div>
        
    </div>
</template>

<script>

export default {
    name: 'language',
    data () {
        return {
            
        }
    },

    methods: {
        nextPage: function() {
            this.$parent.page = 'done';
            $(this.$parent.prog).animate({
                width: '+=12.5%'
            }, 500);
            window.scrollTo(0, 0);
        },

        goBack () {
            this.$parent.page = 'educ';
            $(this.$parent.prog).animate({
                width: '-=12.5%'
            }, 500);
            window.scrollTo(0, 0);
        },

        addLang () {
            this.$parent.langArr.push({
                language: this.$parent.lang.language,
                level: this.$parent.lang.level
            });

            this.$parent.lang.language = '';
            this.$parent.lang.level = '';
        }

    },

    computed: {
    title () {
        if (this.$parent.lang.language === '') {
            return 
        } else {
            return "Please click on the Add button to continue"
        }
    }
}
}
</script>

<style scoped>
.noGo {
    cursor: not-allowed;
}

.normal {
    cursor: pointer;
}
</style>