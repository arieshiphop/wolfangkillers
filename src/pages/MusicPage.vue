<template>
    <div class="text">
        <p>¡Pulsa en el disco para empezar la fiesta!</p>
        <p v-if='isPlayingSong' class="creditos">Canción original: <a :href="audioSource">{{audioTitle}}</a></p>ç
        <Beyonce v-if="isPlayingSong"></Beyonce>
    </div>
    <main>
        <Disk class="disk" :isPlayingSong="isPlayingSong" @click="playRandomSong"></Disk>
    </main>
    <video autoplay muted loop id="myVideo">
        <source src="@/assets/videoplayback.mp4" type="video/mp4">
    </video>
</template>

<script>
import Beyonce from '@/components/Beyonce.vue'
import Disk from '@/components/Disk.vue'
export default {
    components:{
        Disk,
        Beyonce
    },
    data(){
        return{
            audio:"",
            playingAudio:null,
            audioSource:"",
            audioTitle:"",
            songs:require('@/assets/music.json'),
            isPlayingSong:false,
        }
    },
    mounted(){
    },
    methods:{
       
        playRandomSong(){
            this.isPlayingSong = true;
            const song = this.songs.music[Math.floor(Math.random() * this.songs.music.length)];
            this.audio = require('@/assets/musica/' + song.audio);
            this.audioSource = song.sourceVideo;
            this.audioTitle = song.name;
            this.playMusic(this.audio)
        },
        playMusic(source){
            const audio = new Audio(source);
            audio.onended = () => {
                this.playRandomSong();
            }            
            if(this.playingAudio){
                this.playingAudio.pause();
                this.playingAudio = audio;
                this.playingAudio.play();
            }
            else{
                this.playingAudio = audio;
                this.playingAudio.play();
            }
            this.spawnRandomImageOnRandomPosition()
        },
        spawnRandomImageOnRandomPosition(){
            setInterval(function(){
                // spawn image on random pos and delete it after 5 seconds
                const img = document.createElement('img');
                img.src = 'https://c.tenor.com/OtkQy0HHNogAAAAd/wolfangkillers-beber.gif';
                img.style.position = 'absolute';
                img.style.top = Math.random() * 100 + '%';
                img.style.left = Math.random() * 100 + '%';
                img.style.width = '200px';
                img.style.height = '200px';
                img.style.zIndex = '-5';
                img.style.borderRadius = '10px';
                document.body.appendChild(img);
                setTimeout(function(){
                    document.body.removeChild(img);
                }, 5000);
            }, 2000);
            
        }
    }
}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    
}
main{
    display:grid;
    place-content:center;
    height: 100vh;
    overflow-y:hidden;
    overflow-x:hidden;
}
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  z-index:-999;
  min-height: 100%;
}
p{
    font-size:20px;
    color:white;
}
.creditos{
    font-size:12px;
}
a{
    color:rgb(173, 211, 255);
    text-decoration:none;
    border-bottom:2px solid red;
}
.text{
    width:30rem;
    min-height:10rem;
}
.disk{
    margin-bottom:20rem;
}
</style>