<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
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
  font-size: 16px;
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
</style>
