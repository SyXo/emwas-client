<template>
  <transition appear name="loading-appear">
    <div class="background-animation">
      <div class="loading-animation">
        <div class="heart heart-bg"></div>
        <div class="heart heart-main"></div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Loading extends Vue {
}
</script>

<style lang="sass">

@import ../assets/sass/variables
.heart
  position: absolute
  width: 100px
  height: 90px
  top: 50%
  left: 50%
  margin-top: -45px
  margin-left: -50px

  &:before,
  &:after
    content: ''
    position: absolute
    top: 0
    width: 50px
    height: 80px
    background: $accent-color
    border-radius: 50px 50px 0 0

  &:before
    left: 50px
    transform: rotate(-45deg)
    transform-origin: 0 100%

  &:after
    left: 0
    transform: rotate(45deg)
    transform-origin: 100% 100%

.heart-bg
  animation: heart-anim 2s linear 1s infinite

  &:before,
  &:after
    background-color: $third-color

.heart-main
  animation: pounding 1s linear infinite alternate

@keyframes pounding
  0%
    transform: scale(1.5)

  100%
    transform: scale(1)

@keyframes heart-anim
  46%
    transform: scale(1)

  50%
    transform: scale(1.3)

  52%
    transform: scale(1.5)

  55%
    transform: scale(3)

  100%
    opacity: 0
    transform: scale(10)

.background-animation
  z-index: 1000
  position: absolute
  width: 100%
  height: 100%
  background-color: transparentize(#fff, 0.3)

.loading-animation
  width: 100%
  height: 100%
  &::after
    opacity: 0.2

.loading-appear-enter, .loading-appear-leave-to
  transform: translateX(10em)
  opacity: 0

.loading-appear-enter-active
  transition: all .3s ease
</style>
