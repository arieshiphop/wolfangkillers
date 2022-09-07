<template>
    <main class="bg">
        <div class="main">
            <AudioButton title="You pro? Relax" source="YOUPRORELAT"></AudioButton>
            <AudioButton title="Auvepi short" source="AUVEPI"></AudioButton>
            <AudioButton title="is onli geim" source="isonligeim"></AudioButton>
            <AudioButton title="BLA BLA BLA" source="BLA"></AudioButton>
            <AudioButton title="Yu edukation yur fader" source="EDUCATIONYURFATHER"></AudioButton>
            <AudioButton title="Estoy doramio" source="estoydoramio"></AudioButton>
            <AudioButton title="Is nesesari isult" source="necesaryinsult"></AudioButton>
            <AudioButton title="Miute hilipoia" source="miutehelipoya"></AudioButton>
            <AudioButton title="OMAIGO" source="omaigo"></AudioButton>
            <AudioButton title="onde quieres quedah" source="quedar"></AudioButton>
            <AudioButton title="Xupais el pihotito" source="pihotito"></AudioButton>
            <AudioButton title="put0s inútiles" source="putosinutiles"></AudioButton>
            <AudioButton title="QUE NO CHILLES COÑO" source="nochilles"></AudioButton>
            <AudioButton title="RESPECT" source="respet"></AudioButton>
            <AudioButton title="ni satafaka ni satafaka" source="nisatafaka"></AudioButton>
            <AudioButton title="plis kik plis fis tim aaah" source="tantokickear"></AudioButton>
            <AudioButton title="Portugués cantando" source="portuguestemazo"></AudioButton>
            <AudioButton title="Tiago zale" source="tiagozale"></AudioButton>
            <AudioButton title="uan palas enemi" source="uanpalas"></AudioButton>
            <AudioButton title="Boomer" source="boomer"></AudioButton>
            <AudioButton title="Meviacaga" source="meviacaga"></AudioButton>
            <AudioButton title="retard" source="retard"></AudioButton>
        </div>
    </main>
</template>

<script>
import AudioButton from '../components/AudioButton.vue';
export default {
    components:{
        AudioButton
    }
}
</script>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
.bg {
    display:grid;
    place-content:center;
  background-image: url("https://ic.wampi.ru/2021/06/13/Banjo_os.gif");
  height: 100vh;
  width:100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.main{
    /* responsive grid  */
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-gap:1rem;
    justify-content:center;
    align-items:center;
    width:60vw;
    background: rgba( 255, 255, 255, 0.55 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3px );
    -webkit-backdrop-filter: blur( 3px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    padding:2rem;
    
}
</style>