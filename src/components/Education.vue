<template>
    <div class="card" v-if="$parent.page === 'educ'">
        <button class='back' @click="goBack"><img src='../assets/back.svg'>Go back</button>

        <strong>EDUCATIONAL BACKGROUND</strong>
        <hr>

        <div class="inputBox">
            <label>School/College name:</label>
            <input v-model="$parent.education.college">
        </div>

        <div class="inputBox">
            <label>Field of study?</label>
            <input v-model="$parent.education.study">
        </div>

        <div class="inputBox">
            <label>Highest grade achieved:</label>
            <input v-model="$parent.education.grad">
        </div>

        <div class="inputBox">
            <label>Graduation year:</label>
            <input v-model="$parent.education.gradYear" type="date">
        </div>

        <div class="inputBox">
            <label>Notes/Something to know:</label>
            <textarea v-model="$parent.education.notes" rows="6"></textarea>
        </div>

        <div class='row'>
            <button type="button" @click="addEduc" class="add">+</button>
            <button type="button" @click="nextPage" class="next" 
                :disabled="$parent.education.college != ''" 
                :title="title"
                :class="[$parent.education.college === '' ? 'normal' : 'noGo']">Next section
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'education',
    data () {
        return {
            
        }
    },
    methods: {
        nextPage: function() {
            this.$parent.page = 'lang';
            $(this.$parent.prog).animate({
                width: '+=12.5%'
            }, 500);
            window.scrollTo(0, 0);
        },

        goBack () {
            this.$parent.page = 'exp';
            $(this.$parent.prog).animate({
                width: '-=12.5%'
            }, 500);
            window.scrollTo(0, 0);
        },

        addEduc () {
            this.$parent.eduArr.push({
                college: this.$parent.education.college,
                study: this.$parent.education.study,
                grad: this.$parent.education.grad,
                gradYear: this.$parent.education.gradYear,
                notes: this.$parent.education.notes
            })
            this.$parent.education.college = '';
            this.$parent.education.study = '';
            this.$parent.education.grad = '';
            this.$parent.education.gradYear = '';
            this.$parent.education.notes = '';
        }
    },

    computed: {
    title () {
        if (this.$parent.education.college === '') {
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