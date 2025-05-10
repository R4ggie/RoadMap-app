<script setup lang="ts">
import { useBackButton } from '@/composables/useBackButton'
import Nav from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

useBackButton()
</script>

<template>
  <Nav />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>
