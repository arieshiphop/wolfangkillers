<template>
  <div id="anim">┗(-_-)┛</div>
</template>

<script>
export default {
    mounted(){
        this.dance();
    },
  methods: {
    dance(){
        let faces = [
            "┏(-_-)┛",
            "┗(-_- )┓",
            "┗(-_-)┛",
            "┏(-_-)┓",
            "┏(-_-)┛",
            "┗( -_-)┓",
            "┗(-_-)┛",
            "┏(-_-)┓"
            ];

            let i = 0;

            animate();
            function animate() {
            document.getElementById("anim").innerHTML = faces[i];
            i += 1;
            if (i==faces.length) {
                i=0;
            }
            setTimeout(animate, 300);
            }
    }
  },
};
</script>

<style>
#anim {
    color:white;
  margin: auto;
  width: 300px;
  font-size: 50px;
  text-align: center;
}
</style>
