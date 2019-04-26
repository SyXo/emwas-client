<template>
  <div class="home">
    <img alt="emwas logo" class="emwas-logo" src="../assets/logo.png">
    <Search v-on:setFlashMessage="setFlashMessage"/>
    <div v-if="flashMessage !== ''" class="flash-info">
      <div class="flash-info__content">
        <font-awesome-icon icon="info-circle"/> {{flashMessage}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Search from '@/components/Search.vue'; // @ is an alias to /src

@Component({
  components: {
    Search,
  },
})
export default class Home extends Vue {
  flashMessage: string = '';

  setFlashMessage(message: string): void {
    this.flashMessage = message;
  }
}
</script>

<style lang="sass" scoped>

@import ../assets/sass/variables

.emwas-logo
  max-width: 0.7 * $medium-screen

.flash-info
  margin-top: 2em

</style>
