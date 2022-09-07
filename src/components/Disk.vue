<template>
  <div :class="{rotating:isPlayingSong,circle:true}">
        <div class="circle2">
        </div>
    </div>

</template>

<script>
export default {
    props:{
        isPlayingSong:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style>
.circle{
    display:flex;
    align-items:center;
    justify-content:center;
    width: 200px;
    height: 200px;
    border-top-left-radius : 48%;
    border-top-right-radius : 48%;
    border-bottom-left-radius : 48%;
    border-bottom-right-radius : 48%;
    background-image:url("@/assets/loco-wolfangkillers.gif");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border:10px solid black;
}

.circle2{
    width: 50px;
    height: 50px;
    border-top-left-radius : 50%;
    border-top-right-radius : 50%;
    border-bottom-left-radius : 50%;
    border-bottom-right-radius : 50%;
    background-color:white;
    border: outset;
}
.circle:hover{
    cursor:pointer;
}
@-webkit-keyframes rotating {
    from{
        -webkit-transform: rotate(0deg);
    }
    to{
        -webkit-transform: rotate(360deg);
    }
}

.rotating {
    -webkit-animation: rotating 1s linear infinite;
}
</style>