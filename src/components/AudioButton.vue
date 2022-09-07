<template>
  <div @click="playSound(audio)" class="container">
        <a class="button" ontouchstart="">
            <span>{{title}}</span>
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            audio:require('@/assets/audios/' + this.source + '.mp3'),
            playingAudio:null
        }
    },
    props:{
        source:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        }
    },
    methods:{
        playSound(source){
            const audio = new Audio(source);
            if(this.playingAudio){
                this.playingAudio.pause();
                this.playingAudio = audio;
                this.playingAudio.play();
            }
            else{
                this.playingAudio = audio;
                this.playingAudio.play();
            }
        },
       
    }
}
</script>

<style>
    .container{
        text-align:center;
        border-radius:5px;
        color:white;
        box-shadow:0px 0px 10px rgba(0,0,0,0.5);
        background-image: url("@/assets/loco-wolfangkillers.gif");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-color: rgba(0,0,0,0.5);
        width:100%;
        height:100%;
        cursor:pointer;
        padding:1rem;
        width:100%;
    }
</style>