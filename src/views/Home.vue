<template>
  <div class="home white">
    <v-container class="px-sm-6">
      <v-row class="px-sm-6">
        <v-col class="px-sm-6">
          <div id="top" class="section-news">
            <TextPlaceholder
              :header="sectionNews.header"
              :content="sectionNews.content"
            />
            <NewsCarousel class="mt-6" />
          </div>
          <div class="section-division">
            <TextPlaceholder
              :header="sectionDivision.header"
              :content="sectionDivision.content"
            />
            <DivisionCard class="mt-6" />
          </div>
          <div class="section-details mx-auto">
            <div
              class="details__content d-flex flex-wrap justify-space-around align-center"
              v-for="(detail, index) in sectionDetails"
              :key="index"
            >
              <v-img
                :src="`${detail.image}`"
                width="503px"
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
          <div class="section-activity">
            <TextPlaceholder
              :header="sectionActivity.header"
              :content="sectionActivity.content"
            />
            <ActivityCarousel class="mt-6" />
          </div>
          <div class="section-achievement">
            <TextPlaceholder
              :header="sectionAchievement.header"
              :content="sectionAchievement.content"
            />
            <AchievementCarousel class="mt-6" />
          </div>
          <div class="section-team">
            <TextPlaceholder
              :header="sectionTeam.header"
              :content="sectionTeam.content"
            />
            <TeamCarousel class="mt-6" />
          </div>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<style lang="sass" scoped>
[class*="section-"]:not(:last-child)
  margin-bottom: 200px

.section-details
  max-width: 1366px

.footer
  height: 160vh
  margin-top: -550px
  @media only screen and (min-width: 768px)
    margin-top: -300px
</style>

<style scoped>
.v-responsive.v-image {
  order: 1;
}

@media only screen and (min-width: 1279px) {
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
import AchievementCarousel from "@/components/home/AchievementCarousel";
import ActivityCarousel from "@/components/home/ActivityCarousel";
import NewsCarousel from "@/components/home/NewsCarousel";
import Footer from "@/components/Footer";

export default {
  name: "home",
  components: {
    TextPlaceholder,
    DivisionCard,
    TeamCarousel,
    AchievementCarousel,
    ActivityCarousel,
    NewsCarousel,
    Footer
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
          image: require("@/assets/home/rocket.png")
        },
        {
          header: "OUR MISSION",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis",
          image: require("@/assets/home/planets.png")
        },
        {
          header: "MEMBER BENEFIT",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis",
          image: require("@/assets/home/astronaut.png")
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
      },
      sectionActivity: {
        header: "OUR LATEST ACTIVITY",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
      },
      sectionNews: {
        header: "OUR LATEST NEWS",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
      }
    };
  },
  methods: {
    buttonColor() {
      let buttons = document.querySelectorAll(".v-window__container .v-btn");
      for (let j = 0; j < buttons.length; j++) {
        buttons[j].style.backgroundColor = "#F0793C";
        buttons[j].onclick = () => {
          this.buttonColor();
        };
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.buttonColor();
    });
  }
};
</script>
