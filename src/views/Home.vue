<template>
  <div>
    <Banner />
    <div class="main-container">
      <h1>Monte seu Sanduba</h1>
      <BurgerForm/>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import BurgerForm from "../components/BurgerForm.vue";
export default {
  components: { Banner, BurgerForm },
};
</script>
