<template>
     <div class="CV" v-if="$parent.start === 'yes'">
            <div class="header">
                <div class="nameBox">
                    <b>{{$parent.name}}</b>
                    <b>{{$parent.surname}}</b>
                </div>
                <div class="imageBox">
                    <canvas v-if="$parent.canvas === 'yes'"></canvas>
                    <img id='output_image'/>
                </div>
                <div class="contactBox">
                    <b>Adress</b>
                        <span>{{$parent.house}} {{$parent.street}}, {{$parent.suburb}} {{$parent.city}} {{$parent.postal}}</span>
                    <b>Cellphone</b>
                        <span>{{$parent.cellphone}} <pre v-if="$parent.homenum != ''"> or {{$parent.homenum}}</pre></span>
                    <b>Email</b>
                        <span>{{$parent.email}}</span>
                </div>
            </div> <!--Header ENDS -->

            <div class="summary">
                <em class="heading">Summary</em>
                <hr>
                <p>{{$parent.summary}}</p>
            </div> <!--Summary ENDS -->

            <div class="skills">
                <em class="heading">Skill highlights</em>
                <hr>
                <ul>
                    <li v-for="value in $parent.skills" :key="value">{{value}}</li>
                </ul>
            </div> <!--Skills ENDS -->

            <div class="xpBox">
                <em class="heading">Work history</em>
                <hr>
                <div v-for="obj in $parent.xpArr" class="xpWrap" :key="obj">
                    <p class="company">{{obj.company}}({{obj.period}})</p>
                    <p class="subHeading">Roles</p>
                    <ul>
                        <li v-for="role in obj.roles" :key="role">{{role}}</li>
                    </ul>
                    <b class="ref">Reference:{{obj.reference}}</b>  
                </div>
            </div> <!--Xp ENDS -->

            <div class="educationBox">
                <em class="heading">Education</em>
                <hr>
                <div v-for="obj in $parent.eduArr" class="eduWrap" :key="obj">
                    <p>{{obj.college}}</p>
                    <p>{{obj.study}}</p>
                    <p>{{obj.grad}} ({{obj.gradYear}})</p>
                    <p>{{obj.notes}}</p>
                </div>
            </div> <!--education ENDS -->

            <div class="languageBox">
                <em class="heading">Languages</em>
                <hr>
                <div v-for="obj in $parent.langArr" class="langWrap" :key="obj">
                    <p>{{obj.language}} ({{obj.level}})</p>
                </div>
            </div> <!--language ENDS -->

            <div class="footer"></div>
            
        </div>
</template>

<script>
export default {
    name: 'resume'
}
</script>

<style scoped>
.CV {
    flex: 2;
    border: 1px solid rgb(134, 134, 134);
    border-radius: 7px;
    height: max-content;
}

.header { 
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    background-color: rgb(52, 132, 253);
    color: white;
    display: flex;
    padding: 15px;
}

.nameBox {
    display: flex;
    flex-direction: column;
    flex: 1;
    font-size: 5vw;
    align-items: flex-start;
}

.imageBox {
    flex: 1;
    padding: 10px;
}

.imageBox img {
    width: 12vw;
}

canvas {
    width: 15vw;
}

.contactBox {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-wrap: break-word;
}

.contactBox b {
    font-size: 2.1vh;
    font-weight: 700;
    text-decoration: underline;
    text-decoration-style: solid;
    margin-bottom: 5px;
    margin-top: 15px;
}

.contactBox span {
    font-size: 1.8vh;
    text-align: justify;
    display: flex;
    font-weight: 200;
}

.heading {
    color: rgb(52, 132, 253);
    font-size: 30px;
    display: flex;
    font-style: normal;
}

.summary {
    padding: 10px;
    font-style: normal;
    text-align: left;
}

.skills {
    padding: 10px;
    text-align: left;
}

.skills ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
}

.skills li {
    width: 33%;
    font-weight: 700;
    margin: 5px auto;
}

.xpBox {
    padding: 10px;
    text-align: left;
}

.company {
    margin-left: 10px;
    font-size: 20px;
    font-weight: 700;
}

.subHeading {
    text-decoration: underline;
    text-decoration-style: solid;
    font-size: 18px;
    padding: 10px;
}

.ref {
    padding: 10px;
}

.educationBox {
    padding: 10px;
    text-align: left;
}

.languageBox {
    padding: 10px;
    text-align: left;
}

.footer{
    background-color: rgb(52, 132, 253);
    height: 40px;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
}

</style>