<template>
  <div class="search">

    <div class="search__container">
      <input class="search__input" type="text" placeholder="Search">
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Search extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

.search
  width: 100%
  margin: 0px
  padding: 0px
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  text-align: center

  &__container
    padding-top: 64px
    width: 60%

  &__input
    width: 100%
    padding: 12px 24px
    background-color: transparent
    transition: transform 250ms ease-in-out
    font-family: 'Alegreya Sans', 'Open Sans', Helvetica, sans-serif
    font-size: 22px
    font-weight: bold
    line-height: 24px
    color: #575756
    background-color: transparent

    background-image: url(../assets/icons/icon_search.svg);

    background-repeat: no-repeat
    background-size: 22px 22px
    background-position: 97% center
    border-radius: 50px
    border: 1px solid #575756
    transition: all 250ms ease-in-out
    backface-visibility: hidden
    transform-style: preserve-3d

    &::placeholder
      color: color(#575756 a(0.8))
      text-transform: uppercase
      letter-spacing: 1.5px

    &:focus
      padding: 12px 0
      outline: 0
      border: 1px solid transparent
      border-bottom: 1px solid #575756
      border-radius: 0
      background-position: 100% center

</style>
