<template>
  <footer
    :class="{
      footer: true,
      'footer--register': this.$route.path == '/recruitment'
    }"
  >
    <div class="footer__content" v-if="this.$route.path === '/'">
      <div class="footer__content--title">WHAT ARE YOU WAITING FOR?</div>
      <div class="footer__content--desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus
      </div>
      <RecruitmentPrompt />
    </div>
    <div class="footer__bottom">
      <div class="footer__bottom--title">FOR MORE INFORMATION</div>
      <div class="contacts">
        <v-btn href="https://www.instagram.com/rplgdc_/" icon>
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>fab fa-line</v-icon>
        </v-btn>
      </div>
      <div>&copy; 2019 RPLGDC Laboratory, All Right Reserved</div>
    </div>
  </footer>
</template>

<script>
import RecruitmentPrompt from "@/components/RecruitmentPrompt";

export default {
  name: "Footer",
  components: {
    RecruitmentPrompt
  },
  mounted() {
    const footer = document.getElementsByTagName("footer")[0];
    if (this.$route.name !== "recruitment") {
      footer.style.backgroundImage =
        "url(" + require(`@/assets/${this.$route.name}/bottom.png`) + ")";
    }
  }
};
</script>

<style lang="sass" scoped>
footer.footer--register
  height: 100px
  margin-top: 0

.footer
  width: auto
  height: 495px
  background-position: top center
  background-size: cover
  background-repeat: no-repeat
  margin-top: 400px
  display: flex
  align-items: center
  justify-content: center
  text-align: center

  .footer__content
    display: flex
    flex-direction: column
    align-items: center
    color: white

    .footer__content--title
      margin-top: 6.5cm
      font-family: $raleway
      font-size: 45px
      @media only screen and (min-width: 768px)
        font-size: 55px

    .footer__content--desc
      font-family: $roboto
      font-size: 20px
      width: 60%

  .footer__bottom
    position: absolute
    bottom: 0
    color: white

    div
      margin-bottom: 1em

    .footer__bottom--title
        font-family: $raleway
        font-size: 18px

    .contacts
      .v-btn
        margin: 0 0.5em

      .v-icon
        font-size: 30pt
        color: white
</style>
