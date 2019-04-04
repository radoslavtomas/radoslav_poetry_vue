<template>
  <div
    class="hero-img"
    :style="`background: url(${image}) center center no-repeat; background-size: cover;`"
  >
    <span v-if="title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: ["image", "title"]
};
</script>

<style scoped lang="scss">
.hero-img {
  margin: 0 auto;
  max-width: 800px;
  height: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  span {
    color: #fff;
    font-weight: 600;
    font-size: 22px;
    font-family: "Poiret One", cursive;
    margin-left: 30px;
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.4);
  }
}
</style>