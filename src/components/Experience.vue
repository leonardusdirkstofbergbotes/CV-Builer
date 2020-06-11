<template>
    <div class="card" v-if="$parent.page === 'exp'">
        <button class='back' @click="goBack"><img src='../assets/back.svg'>Go back</button>

        <strong>EMPLOYMENT HISTORY</strong>
        <hr>

        <div class="inputBox">
            <label>Company name:</label>
            <input v-model="$parent.experience.company">
        </div>

        <div class="inputBox">
            <label>Period that you worked at {{$parent.experience.company}}:</label>
            <input v-model="$parent.experience.period">
        </div>

        <div class="inputBox">
            <label>What was your role at {{$parent.experience.company}}:</label>
            <input v-model="$parent.role" v-on:keyup.enter="addRole">
        </div>
        <small>Press <b>enter</b> after each role</small>

        <div class="inputBox">
            <label>Add a reference:</label>
            <input v-model="$parent.experience.reference">
        </div>

        <div class="row">
            <button type="button" @click="addXP" class="add">+</button>
            <button id="changeText" type="button" @click="nextPage" class="next" 
                :disabled="$parent.experience.company != ''" 
                :title="title"
                :class="[$parent.experience.company === '' ? 'normal' : 'noGo']">Next section
            </button>
        </div>

    </div>
</template>

<script>
export default {
    name: 'experience',
    data () {
        return {
            
        }
    },

    methods: {
        nextPage: function() {
            this.$parent.page = 'educ';
            $(this.$parent.prog).animate({
                width: '+=12.5%'
            }, 500);
            window.scrollTo(0, 0);
        },

        goBack () {
            this.$parent.page = 'skil';
            $(this.$parent.prog).animate({
                width: '-=12.5%'
            }, 500);
            window.scrollTo(0, 0);
        },

        addRole () {
            this.$parent.experience.roles.push(this.$parent.role);
            this.$parent.role = '';
            document.getElementById('changeText').innerText = 'Next section';
        },

        addXP () {
            this.$parent.xpArr.push({
                company: this.$parent.experience.company,
                period: this.$parent.experience.period,
                roles: this.$parent.experience.roles,
                reference: this.$parent.experience.reference
            })
            this.$parent.experience.company = '';
            this.$parent.experience.period = '';
            this.$parent.experience.role = '';
            this.$parent.experience.reference = '';
        }

    },

    computed: {
    title () {
        if (this.$parent.experience.company === '') {
            return 
        } else {
            return "Please click on the Add button to continue"
        }
    },

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