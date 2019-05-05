<template>
  <div class="home">
    <Loading v-if="isLoading"/>
    <img alt="emwas logo" class="emwas-logo" src="../assets/logo.png">
    <Search v-on:inverseLoading="isLoading = !isLoading" v-on:searchPerformed="loadVideosList"/>
    <div v-if="flashMessage !== ''" class="flash-info">
      <div class="flash-info__content">
        <font-awesome-icon icon="info-circle"/> {{flashMessage}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import Search from '@/components/Search.vue';
import Loading from '@/components/Loading.vue';

@Component({
  components: {
    Search,
    Loading,
  },
})
export default class Home extends Vue {
  @State('videosList') videosList!: [];

  @State('flashMessage') flashMessage!: string;

  isLoading: boolean;

  constructor() {
    super();
    this.isLoading = false;
  }

  loadVideosList() {
    this.$router.push({ name: 'searchResult' });
  }
}
</script>

<style lang="sass" scoped>

@import ../assets/sass/variables

.emwas-logo
  max-width: 0.7 * $medium-screen
  @media screen and (max-width: $small-screen)
    max-width: 90%

.flash-info
  margin-top: 2em

</style>
