<template>
  <div class="search">

    <div class="search__container">
      <form action="#" v-on:submit.prevent="launchSearch()">
        <label class="search__label">
          <input
            class="search__input"
            type="text"
            placeholder="Search"
            v-model="searchText"
          >
          Search
        </label>
        <input class="search__submit primary-button" type="submit" value="Go">
      </form>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as search from '../http/search';

@Component
export default class Search extends Vue {
  searchText: string = '';

  launchSearch() : void {
    search.default.findVideosWithText(this.searchText).then((response) => {
      console.log(response);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import ../assets/sass/variables

.search
  width: 100%
  margin: 0
  padding: 0
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  text-align: center

  &__container
    padding-top: 64px
    width: 60%

  &__label
    color: transparent

  &__input
    width: 100%
    padding: 12px 24px
    margin-bottom: 1em
    background-color: transparent
    font-family: 'Alegreya Sans', 'Open Sans', Helvetica, sans-serif
    font-size: 22px
    font-weight: bold
    line-height: 24px
    color: $text-color

    background-image: url(../assets/icons/icon_search.svg)

    background-repeat: no-repeat
    background-size: 22px 22px
    background-position: 97% center
    border-radius: 50px
    border: 1px solid $text-color-lower-alpha
    transition: all 250ms ease-in-out
    backface-visibility: hidden
    transform-style: preserve-3d

    &::placeholder
      color: $text-color-lower-alpha
      text-transform: uppercase
      letter-spacing: 1.5px

    &:focus
      padding: 12px 0
      outline: 0
      border: 1px solid transparent
      border-bottom: 1px solid $text-color-lower-alpha
      border-radius: 0
      background-position: 100% center

</style>
