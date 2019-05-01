<template>
  <div class="home">
    <img alt="emwas logo" class="emwas-logo" src="../assets/logo.png">
    <Search/>
    <div v-if="flashMessage !== ''" class="flash-info">
      <div class="flash-info__content">
        <font-awesome-icon icon="info-circle"/> {{flashMessage}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import Search from '@/components/Search.vue';

@Component({
  components: {
    Search,
  },
  computed: mapState([
    'videosList',
    'flashMessage',
  ]),
})
export default class Home extends Vue {
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
