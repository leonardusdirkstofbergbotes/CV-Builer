<template>
    <div class="card" v-if="$parent.page === 'summ'">
        <button class='back' @click="goBack"><img src='../assets/back.svg'>Go back</button>

            <strong>GIVE US A QUICK SUMMARY</strong>
            <hr>

            <div class="inputBox">
                <label>Summary:</label>
                <textarea rows="10" v-model="$parent.summary"></textarea>
            </div>
            <small v-if="$parent.summary.length > 10">{{$parent.summary.length}}/500</small>
            
            <button type="button" @click="nextPage" class="next">Next section</button>
        </div>
</template>

<script>
export default {
    name: 'summary',
    data () {
        return {
            
        }
    },
    methods: {
        nextPage: function() {
            this.$parent.page = 'skil';
            $(this.$parent.prog).animate({
                width: '+=12.5%'
            }, 500);
            window.scrollTo(0, 0);
        },

        goBack () {
            this.$parent.page = 'conta';
            $(this.$parent.prog).animate({
                width: '-=12.5%'
            }, 500);
            window.scrollTo(0, 0);
        }
    }
}
</script>

<style scoped>

</style>