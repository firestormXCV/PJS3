<template>
  
  <video v-on:ended="visible = !visible" autoplay muted class="video">

    <source src="test.mp4"
            type="video/webm">

    <source src="test.mp4"
            type="video/mp4">

    Sorry, your browser doesn't support embedded videos.
  </video>

  <transition name="fade">
    <div v-if="visible" > 

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
                ">



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
  </transition>
</template>

<script>
import { onMounted } from 'vue'
import { ref } from 'vue'

export default {

  setup () {

onMounted(() => {
     const carrousel = document.querySelector('#carrousel');
    
}) 


    return {
      visible: ref(false),
      slide: ref('style'),
      autoplay: ref(true),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
,
methods: { startPage:function() {
  const carrousel = document.querySelector('#carrousel');
  //console.log(carrousel);
  carrousel.style.opacity=1;
  carrousel
  }
}


}



</script>

<style>
.video {
        position: absolute;
        z-index: -1;
        height: 100%;
        width: 120%;
}
</style>

<style scoped>
.fade-enter-active {
  transition: all 1s ease-out;
}

.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>
