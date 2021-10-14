<template>


  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <router-link v-bind:to="'/'" tag='button'>
          <q-toolbar-title class="q-pa-sm">     
            <img src="logo.png" alt="logo"/>
          </q-toolbar-title>
        </router-link>

        <div>Le nom de notre société</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      
    >
      <q-list>
        <q-item-label
          header
          
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          
        />
      </q-list>
    </q-drawer>

    <q-page-container class="row justify-center">

      <router-view class="col-10" />
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
            <q-btn fab icon="keyboard_arrow_up" color="primary" />
      </q-page-scroller>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Vos Démarches',
    caption: 'Vos démarches administratives',
    icon: 'assignment_turned_in',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Municipalité',
    caption: 'Toutes l\'information sur la municpalité et ses actualités',
    icon: 'apartment',
    link: '/#/municipalite'
  },
  {
    title: 'Services Municipaux',
    caption: 'Les services municpaux de la ville',
    icon: '',
    link: 'pages/municipalite.vue'
  },
  {
    title: 'Activités et Découvertes',
    caption: 'Les activités, événements et choses a découvrir sur l\'île',
    icon: '',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Actualités  ',
    caption: 'Les News',
    icon: '',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Météo',
    caption: 'La météo de l\'île',
    icon: 'wb_sunny',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Contacts',
    caption: 'Nous contacter',
    icon: 'connect_without_contact',
    link: '/#/contact'
  }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>