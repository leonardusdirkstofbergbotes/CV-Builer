<template>
    <div class="card" v-if="$parent.page === 'conta'">
        <button class='back' @click="goBack"><img src='../assets/back.svg'>Go back</button>

        <strong>CONTACT DETAILS</strong>
        <hr>

        <div class="inputBox">
            <label>Cellphone number:</label>
            <input v-model="$parent.cellphone" type="number" name="cellphone">
        </div>
        
        <div class="inputBox">
            <label>Alternative number</label>
            <input v-model="$parent.homenum" type="number" name="homenum">
        </div>
        
        <div class="inputBox">
            <label>Email adress:</label>
            <input v-model="$parent.email" type="email" name="email">
        </div>
        
        <button type="button" @click="nextPage" class="next">Next section</button>
    </div>
</template>

<script>
export default {
    name: 'contact',
    data () {
        return {
            
        }
    },
    methods: {
        nextPage: function() {
            this.$parent.page = 'summ';
            $(this.$parent.prog).animate({
                width: '+=12.5%'
            }, 500);
            window.scrollTo(0, 0);
        },

        goBack () {
            this.$parent.page = 'resi';
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