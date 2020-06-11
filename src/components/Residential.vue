<template>
    <div class="card" v-if="$parent.page==='resi'">
        <button class='back' @click="goBack"><img src='../assets/back.svg'>Go back</button>

        <strong>RESIDENTIAL DETAILS</strong>
        <hr>

        <button @click="getLoc" class="gps">Use GPS</button>

        <div class="inputBox">
            <label for="house">House number:</label>
            <input v-model="$parent.house" name="house" type="number">
        </div>

        <div class="inputBox">
            <label for="street">Street name:</label>
            <input v-model="$parent.street" name="street">
        </div>

        <div class="inputBox">
            <label for="suburb">Suburb:</label>
            <input v-model="$parent.suburb" name="suburb">
        </div>

        <div class="inputBox">
            <label for="city">City/State:</label>
            <input v-model="$parent.city" name="city">
        </div>

        <div class="inputBox">
            <label>Postal code:</label>
            <input v-model="$parent.postal" type="number" name="postal">
        </div>

        <button type="button" @click="setPage" class="next">Next section</button>

    </div>
</template>
<script>
import axios from "axios";  // import the library (ONLY available on this component)

export default {
    name: 'residential',
    data () {
        return {
        }
    },

    methods: {
        setPage: function() {
            this.$parent.page = 'conta';
            $(this.$parent.prog).animate({
                width: '+=12.5%'
            }, 500);
            window.scrollTo(0, 0);
        },

        goBack () {
            this.$parent.page = 'pers';
            $(this.$parent.prog).animate({
                width: '-=12.5%'
            }, 500);
            window.scrollTo(0, 0);
        },

        getLoc () {
            this.$getLocation({  //pass in options
            enableHighAccuracy: true, 
            timeout: Infinity, 
            maximumAge: 0 
            }) // returns a promise (or a response)   
            .then(coordinates => {
                axios({ method: "GET", "url": "http://open.mapquestapi.com/geocoding/v1/reverse?key=HS045Czf3jYTdhAdX3Kn9AG0VaAQc8rp&location="+coordinates.lat+","+coordinates.lng+"&includeRoadMetadata=true&includeNearestIntersection=true" }).then(result => {
                    let obj = result.data.results[0].locations[0];
                    this.$parent.street = obj.street;
                    this.$parent.postal = obj.postalCode;
                    this.$parent.suburb = obj.adminArea5;
                }, error => {
                    console.error(error);
                    alert('GPS location is not available at this time')
                });
            });
        }
    }
}
</script>

<style scoped>

.gps{
    cursor: pointer;
    width: max-content;
    background-color: rgb(0, 132, 255);
    border: 2px solid transparent;
    color: rgb(239, 239, 239);
    padding: 7px;
    font-size: 18px;
    margin: auto;
    border-radius: 4px;
}

.gps:active {
    background-color: rgb(0, 97, 187);
    outline: none;
}

.gps:focus {
    outline: none;
}

</style>