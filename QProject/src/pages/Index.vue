<template>

  <video v-on:ended="startPage" autoplay muted class="video">

    <source src="test.mp4"
            type="video/webm">

    <source src="test.mp4"
            type="video/mp4">

    Sorry, your browser doesn't support embedded videos.
</video>



  <div>

    <q-carousel
        id="carrousel"
        ref="carrousel"
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        infinite
        :autoplay="autoplay"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        height="500px"
        class="text-white shadow-1 rounded-borders q-mt-md"
        style="background-color: #1d76af;
              transition-delay: 10s;
              transition: width 2s, height 2s, background-color 2s, transform 2s;">



        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { ref } from 'vue'

export default {
  setup () {

onMounted(() => {
     const carrousel = document.querySelector('#carrousel');
    carrousel.style.display="none";
}) 


    return {
      slide: ref('style'),
      autoplay: ref(true),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
,
methods: { startPage:function() {
  const carrousel = document.querySelector('#carrousel');
  //console.log(carrousel);
  carrousel.style.display="block";
  window.setTimeout(3000000)
  }
}


}



</script>

<style>
.video {
        position: absolute;
        z-index: -1;
        height: 100%;
        width: 100%;
      }
</style>
