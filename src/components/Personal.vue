<template>
    <div class="card" v-if="$parent.page==='pers'">
        <strong>PERSONAL DETAILS</strong>
        <hr>

        <input style="display: none" type="file" id="file_photo" @change="preview_image($event)" name="item_image" ref="fileInput">
        <div class="rowEven">
            <button class="second" @click="$refs.fileInput.click()">Pick a file</button>
            <button type="button" @click="getMedia" class="snap right">Take a Selfie</button>
        </div>
        
        <video autoplay class='feed' v-if="$parent.canvas === 'yes' && $parent.snap === 'no'" ></video>
        <button class="snap" v-if="$parent.canvas === 'yes' && $parent.snap === 'no'" @click="takePicture">Snap</button>
            
        <div class="inputBox">
            <label for="name">NAME:</label>
            <input v-model="$parent.name" name="name">
        </div>
        <div class="inputBox">
            <label for="surname">Surname:</label>
            <input v-model="$parent.surname" name="name">
        </div>
        <div class="inputBox">
            <label for="age">Age:</label>
            <input v-model="$parent.age" type="number" name="name">
        </div>
        <div class="inputBox">
            <label for="dob">Date of birth:</label>
            <input v-model="$parent.dob" type="date" name="dob">
        </div>
        
        <button @click="setPage" class="next">Next Section</button>
        
    </div>
</template>

<script>

export default {
    name: 'personal',
    data () {
        return {
            selectedFile: null
        }
    },
    methods: {
      setPage: function() {
            this.$parent.page = 'resi';
            $(this.$parent.prog).animate({
                width: '+=12.5%'
            }, 500);
            window.scrollTo(0, 0);
        },

        preview_image(event){

            document.getElementById('output_image').style.display='block';
            var reader = new FileReader();
            reader.onload = function(){
                var output = document.getElementById('output_image');
                output.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        },

        getMedia() {
            this.$parent.canvas = 'yes';
            if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
                // let constraints = {
                //     video: {
                //         width: {
                //             min: 640,
                //             ideal: 1280,
                //             max: 1920
                //         },
                //         height: {
                //             min: 360,
                //             ideal: 720,
                //             max: 1080
                //         }
                //     } // video object ENDS
                // } // constraints ENDS
                navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
                    
                    var videoPlayer = document.querySelector("video");
                    videoPlayer.srcObject = stream; 
                    videoPlayer.play(); 
                    window.value = videoPlayer;
                }); // then ENDS
              } // if ENDS
        },

        takePicture () {
            let ratio = (window.innerHeight < window.innerWidth) ? 16 / 9 : 9 / 16;
            const picture = document.querySelector("canvas");
            picture.width = (window.innerWidth < 1280) ? window.innerWidth : 1280;
            picture.height = window.innerWidth / ratio;
            const ctx = picture.getContext("2d");
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            ctx.drawImage(document.querySelector('video'), 0, 0, picture.width, picture.height);
            // window.value.srcObject = '';
            navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
                    var videoPlayer = document.querySelector("video");
                    videoPlayer.srcObject = stream; 
                    stream.getTracks().forEach(function(track) {
                        track.stop();
                    });
                   this.$parent.snap = 'yes';
            }); // then ENDS
            
          }
    }
}
</script>

<style scoped>
.snap {
    cursor: pointer;
    width: max-content;
    background-color: rgb(0, 132, 255);
    border: 2px solid transparent;
    color: rgb(239, 239, 239);
    padding: 7px;
    font-size: 18px;
    border-radius: 4px;
    margin: auto;
}

.snap:active {
    background-color: rgb(0, 97, 187);
    outline: none;
}

.snap:focus {
    outline: none;
}

.rowEven {
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
}

.second {
    background-color: transparent;
    cursor: pointer;
    width: max-content;
    border: 2px solid rgb(0, 97, 187);
    padding: 7px;
    font-size: 18px;
    border-radius: 4px;
    color: rgb(0, 97, 187);
}

.feed {
    width: 70%;
    margin: auto;
}

.row {
    display: flex;
}
</style>