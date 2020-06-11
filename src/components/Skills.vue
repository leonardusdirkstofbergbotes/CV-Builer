<template>
    <div class="card" v-if="$parent.page === 'skil'">
        <button class='back' @click="goBack"><img src='../assets/back.svg'>Go back</button>

        <strong>NAME SOME OF YOUR TOP SKILLS</strong>
        <hr>

             <div class="inputBox">
                <label>Skills</label>
                <input v-model="$parent.skill" v-on:keyup.enter="addSkill">
            </div>
            <small>Press <b>enter</b> after each skill</small>

        <button type="button" @click="nextPage" class="next">Next section</button>
    </div>
</template>

<script>
export default {
    name: 'skills',
    data () {
        return {
            
        }
    },
    methods: {
        nextPage: function() {
            this.$parent.page = 'exp';
            $(this.$parent.prog).animate({
                width: '+=12.5%'
            }, 500);
            window.scrollTo(0, 0);
        },

        goBack () {
            this.$parent.page = 'summ';
            $(this.$parent.prog).animate({
                width: '-=12.5%'
            }, 500);
            window.scrollTo(0, 0);
        },

        addSkill: function () {
            this.$parent.skills.push(this.$parent.skill);
            this.$parent.skill = '';
        }
    }
}
</script>

<style scoped>

</style>