<template>
  <div class="textplaceholder d-flex flex-column align-center">
    <div class="textplaceholder--header">{{ header }}</div>
    <p class="textplaceholder--content">{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: "textplaceholder",
  props: {
    header: String,
    content: String
  }
};
</script>

<style lang="sass" scoped>
.textplaceholder
  text-align: center

  .textplaceholder--header
    font-family: $raleway
    font-size: 24px

  .textplaceholder--content
    margin: 0
    font-family: $roboto
    font-size: 20px
    width: 100%
</style>

<style scoped>
@media only screen and (min-width: 769px) {
  .textplaceholder .textplaceholder--content {
    width: 460px;
  }
}
</style>
