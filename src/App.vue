<template>
  <router-view/>
</template>
<script>
export default{
  mounted(){
    this.injectAdsenseToHead();
  },
methods:{
    injectAdsenseToHead(){
      const head = document.getElementsByTagName('head')[0];
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9613006130021533';
      script.async = true;
      script.crossorigin = 'anonymous';
      const secondScript = document.createElement('script');
      secondScript.src="https://cdn.adf.ly/js/display.js";
      const thirdScript = document.createElement('script');
      thirdScript.innerHTML = `var adfly_id = 23870919; var popunder_frequency_delay = 0; var adfly_google_compliant = false;`
      head.appendChild(script,secondScript,thirdScript);
    }
  }
}
</script>
<style>
body{
  overflow:hidden;
}
#app{
  padding:0;
  margin:0;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
