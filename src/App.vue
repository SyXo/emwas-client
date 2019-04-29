<template>
  <div id="app">
    <transition appear name="page-appear">
      <div id="view-wrapper">
        <router-view/>
      </div>
    </transition>
    <footer>
      <nav id="navigation">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </footer>
  </div>
</template>

<style lang="sass">

@import ./assets/sass/fonts.sass
@import ./assets/sass/variables

#view-wrapper
  margin-bottom: 2em
  min-height: 85vh

#app
  padding-top: 1em
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

nav
  margin-bottom: 2em

.primary-button
  background-color: $accent-color
  border: none
  color: white
  padding: 15px 32px
  text-align: center
  text-decoration: none
  display: inline-block
  font-size: 1.1em
  border-radius: 25px

  &:hover
    cursor: pointer
    box-shadow: 2px 5px 4px transparentize($text-color, 0.8)

.flash-info
  width: 80%
  padding: 5px 15px 5px 15px
  background-color: $third-color
  text-align: center
  display: inline-block
  border-radius: 20px
  font-style: italic
  overflow: hidden

  &__content svg
    margin-right: 0.5rem

</style>
