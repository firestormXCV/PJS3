<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn round color="primary" 
            icon="shopping_cart"
            size= "xl" />

    <q-btn round color="secondary" 
            icon="navigation" 
            size="xl"/>

    <q-btn round color="amber" 
            glossy text-color="black" 
            icon="layers_clear"
            size="xl" />

    <q-btn round color="brown-5" 
            icon="directions"
            size="xl" />

    <q-btn round color="deep-orange" 
            icon="edit_location"
            size="xl" />

    <q-btn round color="purple" 
            glossy icon="local_grocery_store" />

    <q-btn round color="black" 
            icon="my_location" />
  </div>
</template>


<script>
export default {
  setup () {
    return {
      sizes: [ 'xl' ],
      icons: [
        'navigation',
        'add_a_photo',
        'camera',
        'camera_front',
        'my_location'
      ]
    }
  }
}
</script>

<style>

</style>