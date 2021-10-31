<template>
  <video v-if="!visible"  v-on:ended="visible = !visible" autoplay muted class="video">
    <source src="test.mp4"
            type="video/mp4">

    Sorry, your browser doesn't support embedded videos.
  </video>
  <transition name="fade" class="absolute-top">
    <div v-if="visible" class="video">
      <q-parallax style="transform: translate3d(0%, -200px, 0px);" :height="800" :speed="5">
        <template v-slot:media>
          <img src="acc-pic.jpg" alt="Pic-ile">
        </template>
      </q-parallax>
    </div>
  </transition>
  

  <transition name="fade" style="z-index: 99">
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
          style="background-color: #1d76af;">

          <q-carousel-slide name="style" img-src="https://cdn.quasar.dev/img/mountains.jpg" class="column no-wrap flex-center">
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

     <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" flat bordered>
        <q-img
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />

        <q-card-section>
          <div class="text-overline text-orange-9">Overline</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
          <div class="text-caption text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn flat color="dark" label="Share" />
          <q-btn flat color="primary" label="Book" />

          <q-space />

          <q-btn
            color="grey"
            round
            flat
            dense
            :icon="expanded1 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="expanded1 = !expanded1"
          />
        </q-card-actions>

        <q-slide-transition>
          <div v-show="expanded1">
            <q-separator />
            <q-card-section class="text-subitle2">
              {{ lorem }}
            </q-card-section>
          </div>
        </q-slide-transition>
      </q-card>

      <q-card class="my-card" flat bordered>
        <q-img
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />

        <q-card-section>
          <div class="text-overline text-orange-9">Overline</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
          <div class="text-caption text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn flat color="dark" label="Share" />
          <q-btn flat color="primary" label="Book" />

          <q-space />

          <q-btn
            color="grey"
            round
            flat
            dense
            :icon="expanded2 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="expanded2 = !expanded2"
          />
        </q-card-actions>

        <q-slide-transition>
          <div v-show="expanded2">
            <q-separator />
            <q-card-section class="text-subitle2">
              {{ lorem }}
            </q-card-section>
          </div>
        </q-slide-transition>
      </q-card>

      <q-card class="my-card" flat bordered>
        <q-img
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />

        <q-card-section>
          <div class="text-overline text-orange-9">Overline</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
          <div class="text-caption text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn flat color="dark" label="Share" />
          <q-btn flat color="primary" label="Book" />

          <q-space />

          <q-btn
            color="grey"
            round
            flat
            dense
            :icon="expanded3 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="expanded3 = !expanded3"
          />
        </q-card-actions>

        <q-slide-transition>
          <div v-show="expanded3">
            <q-separator />
            <q-card-section class="text-subitle2">
              {{ lorem }}
            </q-card-section>
          </div>
        </q-slide-transition>
      </q-card>
    </div>

    <div class="q-pa-md row items-start q-gutter-md" >
       <q-card class="my-cardd">
         <q-card-section>
          {{ lorem }}
         </q-card-section>
       </q-card>
    </div>
    </div>
    
  </transition>
 


  <div v-if="visible" style="bottom: 0; position: absolute; width: 100%">
        
 

      <div v-if="visible" class="video">
        <q-toolbar class="bg_footer_green" >
          <q-toolbar-title>Footer</q-toolbar-title>
        </q-toolbar>

        <q-parallax class="gt-sm" :height="612" :speed="5">
        
          <template v-slot:media>
            <img src="foot-pic.jpg" alt="Pic-ile">
          </template>

        </q-parallax>

        <q-parallax class="lt-md" :height="400" :speed="1">
        
          <template v-slot:media>
            <img src="foot-pic.jpg" alt="Pic-ile">
          </template>

        </q-parallax>

        <q-toolbar class="bg_footer_green" >
          <q-toolbar-title>Footer</q-toolbar-title>
        </q-toolbar>
    </div>
  </div>



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
      expanded1: ref(false),
      expanded2: ref(false),
      expanded3: ref(false),
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
<style lang="scss">
.video {
  position: absolute;
  width: 100%;
}

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

.my-card {
  width: 100%;
  max-width: 350px;
}

.my-cardd {
  width: 100%;
  }

.bg_footer_green {
  background: #93bc3586;
}

</style>
