<template>
  <div class="home white">
    <v-container class="px-sm-6">
      <v-row class="px-sm-6">
        <v-col class="px-sm-6">
          <!-- <div id="top" class="section-news">
            <TextPlaceholder
              :header="sectionNews.header"
              :content="sectionNews.content"
            />
            <NewsCarousel class="mt-6" />
          </div> -->
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
                :src="detail.image"
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
// import NewsCarousel from "@/components/home/NewsCarousel";
import Footer from "@/components/Footer";

export default {
  name: "home",
  components: {
    TextPlaceholder,
    DivisionCard,
    TeamCarousel,
    AchievementCarousel,
    ActivityCarousel,
    // NewsCarousel,
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
            "1. Menciptakan atmosfir dan lingkungan Laboratorium RPLGDC yang lebih nyaman, menciptakan program kerja Lab RPLGDC yang berkualitas, bekerjasama serta ekspansi influens baik kepada sesama laboratorium fakultas IF maupun kepada jurusan & fakultas lain, memberikan output SDM yang berkualitas dan memumpuni kebutuhan dunia IT di dalam maupun di luar perkuliahan. <br /><br /> 2. Menciptakan program kerja Lab RPLGDC yang berkualitas serta bekerjasama dengan berbagai Laboratorium IF lainnya <br /><br /> 3. Ekspansi influens dan daya tarik Lab RPLGDC kepada jurusan selain S1 Informatika (seperti kepada jurusan di FIK, D3 RPL, D3 Multimedia, Sistem Informasi, Teknik Industri) <br /><br /> 4. Memberikan output SDM Laboratorium RPLGDC yang berkualitas dan memiliki daya tarik tersendiri untuk kedepannya didepan khalayak ramai",
          image: require("@/assets/home/rocket.png")
        },
        {
          header: "OUR MISSION",
          content:
            "1. Menciptakan suasana Laboratorium yang bersih, rapih, dan tertata dengan baik <br /><br /> 2. Memberikan program kerja yang berkualitas dengan usaha yang semaksimal mungkin demi output yang positif <br /><br /> 3. Melakukan kerjasama antar laboratorium maupun antar jurusan yang memiliki interest kepada bidang software development <br /><br /> 4. Memberikan proyekan, materi - materi yang sesuai, serta implementasi brainspark ataupun workshop yang dapat menstimulasi pola berfikir dan bekerja seorang mahasiswa baik internship maupun anggota lab RPLGDC <br /><br /> 5. Mengajak seluruh anggota/aslab RPLGDC untuk bergotong royong dan saling membantu satu dengan lainnya pada tiap acara/program kerja Laboratorium",
          image: require("@/assets/home/planets.png")
        },
        {
          header: "MEMBER BENEFIT",
          content:
            "1. Mendapatkan ilmu yang bermanfaat <br /><br /> 2. Dapat bertemu dengan wajah - wajah baru yang memiliki ide cemerlang <br /><br /> 3. Sharing ilmu pengetahuan yang ada dengan orang lain <br /><br /> 4. Dapat mengimplementasikan skill dan ilmu yang ada pada proyekan yang didapatkan <br /><br /> 5. Memiliki wadah untuk mengaplikasikan skill Software Development dan Game Development <br /><br /> 6. Memiliki wadah yang berfokus pada research group mengenai Software Development maupun Game Development",
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
      }
      // sectionNews: {
      //   header: "OUR LATEST NEWS",
      //   content:
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
      // }
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
