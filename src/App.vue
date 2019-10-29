<template>
    <v-app dark id="inspire">
        <app-navigation></app-navigation>

        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation'

export default {
  name: 'App',
  components: {
    AppNavigation
  }
}
</script>

<style>
.input_group_details::after {
  background-color: rgba(255, 255, 255, 0.32) !important
}
</style>
