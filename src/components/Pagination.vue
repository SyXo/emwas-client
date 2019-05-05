<template>
<div class="pagination">
  <button
    id="pagination-go-to-start" class="secondary-button"
    v-on:click="setPagination('start')"
  >
    First Page
  </button>
  <form id="buttonWithText" v-on:submit.prevent="actOnButtonInput">
    <div id="slider">
      <span v-if="navIsButton">
        <input
          class="third-button button-disabled collapsed" type="button" id="toggle"
          :value="this.currentPage" v-on:click="actOnButtonInput()"
        />
      </span>
      <span v-else>
        <input aria-label="Change page number"
          class="third-button button-disabled" type="number" id="input" tabindex="-1"
          placeholder="#" size=10 v-model="inputedUserPage"
        />
        <input
          class="third-button" type="submit" id="submitSwitchButton"
          tabindex="-1" value="Go"
        />
      </span>
    </div>
  </form>
  <button
    id="pagination-go-to-end" class="secondary-button"
    v-on:click="setPagination('end')"
  >
    Last Page
  </button>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter } from 'vuex-class';

@Component
export default class Pagination extends Vue {
  @State('currentPage') currentPage!: number;

  @Getter('lastPage') lastPage!: number;

  navIsButton: boolean;

  inputedUserPage: string;

  constructor() {
    super();
    this.navIsButton = true;
    this.inputedUserPage = '';
  }

  setPagination(page: string): void {
    if (page === 'end') {
      this.$store.commit('setCurrentPage', this.lastPage);
    } else if (page === 'start') {
      this.$store.commit('setCurrentPage', 1);
    }
  }

  actOnButtonInput(): void{
    if (this.navIsButton) {
      this.navIsButton = !this.navIsButton;
    } else if (this.validateDataIsAnAppropriateNumber(this.inputedUserPage)) {
      this.$store.commit('setCurrentPage', Number(this.inputedUserPage));
      this.navIsButton = !this.navIsButton;
    }
  }

  validateDataIsAnAppropriateNumber(userData: string): boolean {
    const inputedUserDataAsNumber = Number(userData);
    return (
      Number.isInteger(inputedUserDataAsNumber)
      && inputedUserDataAsNumber > 0
      && inputedUserDataAsNumber <= this.lastPage
      && this.currentPage !== inputedUserDataAsNumber
    );
  }
}

</script>

<style lang="sass" scoped>
%local-button
  padding: 10px 22px
  margin-right: .4rem
  margin-left: .4rem

.secondary-button
  @extend %local-button

.third-button
  @extend %local-button

.button-disabled
  cursor: text

#buttonWithText
  display: inline-block

#slider
  transition: 0.5s

#slider.expanded
  transform: translateX(-50%)


#toggle
  flex: 0 0 50%

#input
  flex: auto
  max-width: 5em

#ok
  flex: none
</style>
