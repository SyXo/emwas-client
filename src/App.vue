<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <transition appear name="page-appear">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="sass">

@import ./assets/sass/fonts.sass
@import ./assets/sass/variables

#app
  font-family: 'Open Sans', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: $text-color
  font-size: 16px
  h1, h2, h3, h4
    font-family: 'Alegreya Sans', 'Open Sans', Helvetica, Arial, sans-serif

#nav
  padding: 30px

a
  font-weight: bold
  color: $accent-color

#nav
  a
    .router-link-exact-active
      color: $text-color

.emwas-logo
  max-width: 640px

.page-appear-enter-active, .page-appear-leave-active
  opacity: 0
  transition: all 150ms ease-in-out 0s

.page-appear-enter, .page-appear-leave-to
  opacity: 0

</style>
