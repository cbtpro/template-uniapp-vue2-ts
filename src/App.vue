<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  mpType: 'app',
  onLaunch() {
    console.debug('App Launch');
  },
  onShow() {
    console.debug('App Show');
  },
  onHide() {
    console.debug('App Hide');
  },
});
</script>

<style>
/*每个页面公共css */
</style>