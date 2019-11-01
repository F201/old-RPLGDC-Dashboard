<template>
  <div class="home">
    <v-container class="px-sm-6">
      <v-row class="px-sm-6">
        <v-col class="px-sm-6">
          <div class="section-division">
            <TextPlaceholder
              :header="sectionDivision.header"
              :content="sectionDivision.content"
            />
            <DivisionCard class="mt-6" />
          </div>
          <div class="section-details mt-12 pt-lg-12 mb-6">
            <div
              class="details__content d-flex flex-wrap align-center justify-space-around"
              v-for="(detail, index) in sectionDetails"
              :key="index"
            >
              <v-img
                :src="`${detail.image}`"
                width="auto"
                height="503px"
                contain
              ></v-img>
              <TextPlaceholder
                :header="detail.header"
                :content="detail.content"
                class="my-5 my-md-10 flex-grow-1"
              />
            </div>
          </div>
          <div class="section-team mt-md-12">
            <TextPlaceholder
              :header="sectionTeam.header"
              :content="sectionTeam.content"
            />
            <TeamCarousel class="mt-6" />
          </div>
        </v-col>
      </v-row>
    </v-container>
    <footer class="section-footer">
      <div class="footer__content">
        <div class="footer__content--title">WHAT ARE YOU WAITING FOR?</div>
        <div class="footer__content--desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus
        </div>
        <v-btn class="white mt-4" depressed>
          <span class="join-button">JOIN US</span>
        </v-btn>
      </div>
      <div class="footer__bottom">
        <div class="footer__bottom--title">FOR MORE INFORMATION</div>
        <div class="contacts">
          <v-btn icon>
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>fab fa-line</v-icon>
          </v-btn>
        </div>
        <div>&copy; 2019 RPLGDC Laboratory, All Right Reserved</div>
      </div>
    </footer>
  </div>
</template>

<style lang="sass" scoped>
.section-footer
  text-align: center
  background: url("../assets/bottom.png") center center/cover no-repeat
  height: 160vh
  margin-top: -550px
  display: flex
  align-items: center
  justify-content: center

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

    .join-button
      @extend %button-text-orange
      font-family: $raleway
      font-size: 16px

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

<style scoped>
.v-responsive.v-image {
  order: 1;
}

@media only screen and (min-width: 1024px) {
  .section-footer {
    margin-top: -300px;
  }
}

@media only screen and (min-width: 1280px) {
  .v-responsive.v-image {
    order: 0;
  }
  .details__content:nth-child(even) .v-responsive.v-image {
    order: 1;
  }
}
</style>

<script>
import TextPlaceholder from "@/components/home/TextPlaceholder";
import DivisionCard from "@/components/home/DivisionCard";
import TeamCarousel from "@/components/home/TeamCarousel";

export default {
  name: "home",
  components: {
    TextPlaceholder,
    DivisionCard,
    TeamCarousel
  },
  data() {
    return {
      sectionDivision: {
        header: "OUR DIVISION",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
      },
      sectionDetails: [
        {
          header: "OUR VISION",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis",
          image: require("@/assets/rocket.png")
        },
        {
          header: "OUR MISSION",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis",
          image: require("@/assets/planets.png")
        },
        {
          header: "MEMBER BENEFIT",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis",
          image: require("@/assets/astronaut.png")
        }
      ],
      sectionTeam: {
        header: "OUR TEAM",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
      },
      sectionAchievement: {
        header: "OUR LATEST ACHIEVEMENT",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
      }
    };
  }
};
</script>
