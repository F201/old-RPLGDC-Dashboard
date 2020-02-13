<template>
  <div :class="`register__wrapper register__wrapper--${steps}`">
    <div class="register__container">
      <a href="/">
        <div class="register__header mb-5 d-flex">
          <v-img
            src="../../src/assets/icon.png"
            width="32px"
            height="32px"
          ></v-img>
          <span class="align-self-center ml-2">RPL-GDC</span>
        </div>
      </a>
      <div class="register__title">RECRUITMENT</div>
      <v-stepper id="no-bg" :value="steps" alt-labels>
        <v-stepper-header>
          <v-stepper-step step="1" color="#F0793C" :complete="steps > 1"
            >Profile Form</v-stepper-step
          >

          <v-divider></v-divider>

          <v-stepper-step step="2" color="#F0793C" :complete="steps > 2"
            >Motivation Letter & Portfolio</v-stepper-step
          >

          <v-divider></v-divider>

          <v-stepper-step step="3" color="#F0793C"
            >Review Form and Finish</v-stepper-step
          >
        </v-stepper-header>

        <v-form>
          <v-stepper-items>
            <v-stepper-content step="1">
              <h1>PROFILE FORM</h1>
              <div id="profile-form" class="input__wrapper white">
                <div class="photo__wrapper">
                  <div class="photo__container">
                    <v-icon
                      v-if="imagePreview == null"
                      color="#F2F2F2"
                      class="v-icon--person"
                      >mdi-account</v-icon
                    >
                    <div class="pen__container">
                      <v-icon class="v-icon--pen" color="#FFF">mdi-pen</v-icon>
                    </div>
                    <input
                      type="file"
                      name="photo"
                      id="photo"
                      accept=".jpg,.jpeg"
                      @change="getPhoto"
                    />
                  </div>
                </div>
                <div>
                  <label for="name">Full Name</label>
                </div>
                <input type="text" name="name" id="name" v-model="name" />
                <div class="mt-3">
                  <label for="nim">Student ID Number</label>
                </div>
                <input type="text" name="nim" id="nim" v-model="nim" />
                <div
                  class="input__container d-flex flex-wrap justify-space-between"
                >
                  <div class="input__container--birthdate">
                    <div>
                      <label for="birthdate">Birth Date</label>
                    </div>
                    <!-- <input
                      type="date"
                      name="birthdate"
                      id="birthdate"
                      v-model="birthdate"
                    /> -->
                    <v-menu
                      v-model="calendar"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="birthdate"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-on="on"
                          background-color="#F2F2F2"
                          dense
                          flat
                          single-line
                          filled
                          color="#F0793C"
                          height="37px"
                          id="birthdate"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="birthdate"
                        @input="calendar = false"
                        color="#F0793C"
                        header-color="#F0793C"
                        event-color="#F0793C"
                      ></v-date-picker>
                    </v-menu>
                  </div>
                  <div class="input__container--gender">
                    <div>
                      <label>Gender</label>
                    </div>
                    <div class="input__container--radio d-sm-flex">
                      <label
                        v-for="genders in gender"
                        :key="genders"
                        :for="genders"
                        class="radio__container radio__item radio__item--gender"
                        :id="`radio__item--${genders}`"
                      >
                        {{ genders }}
                        <input
                          type="radio"
                          :id="genders"
                          name="gender"
                          :value="genders"
                          v-model="genderType"
                        />
                        <span class="radio__check"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="mt-2">
                  <label for="major">Major</label>
                </div>
                <v-select
                  id="major"
                  :items="faculty"
                  filled
                  dense
                  solo
                  flat
                  v-model="major"
                  color="#F0793C"
                  item-color="#F0793C"
                  background-color="#F2F2F2"
                ></v-select>
                <div>
                  <label>Generation</label>
                </div>
                <div
                  class="angkatan__container d-flex flex-sm-row flex-column justify-sm-space-between"
                >
                  <label
                    v-for="generations in generation"
                    :key="generations"
                    :for="generations"
                    class="radio__container radio__item radio__item--generation mb-sm-0 mb-3"
                  >
                    {{ generations }}
                    <input
                      type="radio"
                      name="angkatan"
                      :id="generations"
                      :value="generations"
                      v-model="year"
                    />
                    <span class="radio__check"></span>
                  </label>
                </div>
                <div class="mt-3">
                  <label>Division</label>
                </div>
                <div class="divisi__container">
                  <label
                    v-for="(divisions, index) in division"
                    :key="index"
                    :for="divisions.value"
                    class="radio__container radio__item radio__item--divisi d-flex justify-space-between"
                  >
                    {{ divisions.name }}
                    <input
                      type="radio"
                      name="divisi"
                      :id="divisions.value"
                      :value="divisions.value"
                      v-model="divisi"
                    />
                    <div>
                      <v-img
                        :src="`${divisions.icon}`"
                        width="20px"
                        height="20px"
                        contain
                      ></v-img>
                    </div>
                    <span class="radio__check align-self-center"></span>
                  </label>
                </div>
                <div>
                  <label for="file-cv">CV Upload</label>
                </div>
                <input
                  type="file"
                  id="file-cv"
                  name="file-cv"
                  accept=".pdf"
                  @change="getFileCv"
                />
                <div class="text-center mt-4">
                  <v-btn depressed text @click="nextStep()">CONTINUE</v-btn>
                </div>
              </div>
            </v-stepper-content>

            <v-stepper-content step="2">
              <h1>MOTIVATION LETTER & PORTFOLIO</h1>
              <div class="input__wrapper white">
                <div>
                  <label for="motivation">Motivation Letter</label>
                </div>
                <input
                  type="file"
                  id="motivation"
                  name="motivation"
                  accept=".pdf"
                  @change="getFileMotivation"
                />
                <div class="mt-2">
                  <label for="portfolio">Portfolio</label>
                </div>
                <textarea
                  name="portfolio"
                  id="portfolio"
                  cols="30"
                  rows="10"
                  v-model="portfolio"
                ></textarea>
                <div class="text-center mt-4">
                  <v-btn class="prev-button" depressed text @click="prevStep()"
                    >PREV</v-btn
                  >
                  <v-btn depressed text @click="nextStep()">CONTINUE</v-btn>
                </div>
              </div>
            </v-stepper-content>

            <v-stepper-content step="3">
              <h1>REVIEW FORM</h1>
              <div id="review-form" class="input__wrapper white">
                <div class="photo__wrapper">
                  <div class="photo__container">
                    <v-icon
                      v-if="imagePreview == null"
                      color="#F2F2F2"
                      class="v-icon--person"
                      >mdi-account</v-icon
                    >
                  </div>
                </div>
                <div>
                  <label for="output-name">Full Name</label>
                </div>
                <input
                  type="text"
                  name="output-name"
                  id="output-name"
                  class="output"
                  v-model="name"
                  disabled
                />
                <div>
                  <label for="output-nim">Student ID Number</label>
                </div>
                <input
                  type="text"
                  name="output-nim"
                  id="output-nim"
                  class="output"
                  v-model="nim"
                  disabled
                />
                <div
                  class="input__container d-flex flex-wrap justify-space-between"
                >
                  <div class="input__container--birthdate">
                    <div>
                      <label for="output-birthdate">Birth Date</label>
                    </div>
                    <input
                      type="text"
                      name="output-birthdate"
                      id="output-birthdate"
                      class="output"
                      v-model="birthdate"
                      disabled
                    />
                  </div>
                  <div class="input__container--gender">
                    <div>
                      <label for="output-gender">Gender</label>
                    </div>
                    <input
                      type="text"
                      id="output-gender"
                      name="output-gender"
                      class="output output--short"
                      v-model="genderType"
                      disabled
                    />
                  </div>
                </div>
                <div
                  class="input__container d-flex flex-wrap justify-space-between"
                >
                  <div class="input__container--major">
                    <div>
                      <label for="output-major">Major</label>
                    </div>
                    <textarea
                      type="text"
                      name="output-major"
                      id="output-major"
                      class="output"
                      v-model="major"
                      disabled
                    ></textarea>
                  </div>
                  <div class="input__container--year">
                    <div>
                      <label for="output-year">Generation</label>
                    </div>
                    <input
                      type="text"
                      id="output-year"
                      name="output-year"
                      class="output"
                      v-model="year"
                      disabled
                    />
                  </div>
                </div>
                <div class="mt-4">
                  <label for="output-divisi">Division</label>
                </div>
                <input
                  type="text"
                  name="output-divisi"
                  id="output-divisi"
                  class="output"
                  v-model="divisi"
                  disabled
                />
                <div class="mt-4">
                  <label for="output-cv">CV</label>
                </div>
                <input
                  type="text"
                  name="output-cv"
                  id="output-cv"
                  class="output"
                  v-model="cvName"
                  disabled
                />
                <div class="mt-4">
                  <label for="output-motivation">Motivation Letter</label>
                </div>
                <input
                  type="text"
                  name="output-motivation"
                  id="output-motivation"
                  class="output"
                  v-model="motivationName"
                  disabled
                />
                <div class="mt-4">
                  <label for="output-portfolio">Portfolio</label>
                </div>
                <textarea
                  name="output-portfolio"
                  id="output-portfolio"
                  class="output"
                  v-model="portfolio"
                  disabled
                ></textarea>
                <div class="text-center mt-4">
                  <!-- <v-btn class="prev-button" depressed text @click="prevStep()"
                    >PREV</v-btn
                  > -->
                  <!-- <v-btn depressed text @click="submit()"
                    >FINISH</v-btn
                  > -->
                  <template>
                    <div class="text-center">
                      <v-btn
                        class="prev-button"
                        depressed
                        text
                        @click="prevStep()"
                        >PREV</v-btn
                      >
                      <v-btn
                        :disabled="dialog"
                        :loading="dialog"
                        class="white--text"
                        @click="submit()"
                      >
                        FINISH
                      </v-btn>
                      <v-dialog
                        v-model="dialog"
                        hide-overlay
                        persistent
                        width="300"
                        color="#F0793C"
                      >
                        <v-card color="#F0793C" dark>
                          <v-card-text>
                            Uploading your data
                            <v-progress-linear
                              indeterminate
                              color="white"
                              class="mb-0"
                            ></v-progress-linear>
                          </v-card-text>
                        </v-card>
                      </v-dialog>
                    </div>
                  </template>
                </div>
              </div>
            </v-stepper-content>
          </v-stepper-items>
        </v-form>
      </v-stepper>
    </div>
    <Footer />
    <template>
      <v-row justify="center">
        <v-dialog v-model="alert" persistent max-width="290">
          <!-- <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
          </template> -->
          <v-card>
            <v-card-title class="headline">Attention</v-card-title>
            <template v-if="pdfAlert == true">
              <v-card-text
                >Please only upload pdf file or a file with less than 1
                MB</v-card-text
              >
            </template>
            <template v-else>
              <v-card-text
                >Please only upload jpg / jpeg file or a file with less than 500
                KB</v-card-text
              >
            </template>
            <v-card-actions>
              <v-spacer></v-spacer>
              <!-- <v-btn color="green darken-1" text @click="dialog = false"
                >Disagree</v-btn
              > -->
              <v-btn
                color="white--text"
                text
                @click="(alert = false), (pdfAlert = false)"
                >OK</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Footer from "@/components/Footer";
export default {
  components: {
    Footer
  },

  data() {
    return {
      gender: ["Male", "Female"],
      faculty: [
        "D3 Teknologi Telekomunikasi",
        "D3 Rekayasa Perangkat Lunak Aplikasi",
        "D3 Sistem Informasi",
        "D3 Sistem Informasi Akuntansi",
        "D3 Teknologi Komputer",
        "D3 Manajemen Pemasaran",
        "D3 Perhotelan",
        "S1 Teknik Telekomunikasi",
        "S1 Teknik Elektro",
        "S1 Teknik Fisika",
        "S1 Teknik Komputer",
        "S1 Informatika",
        "S1 Teknologi Informasi",
        "S1 Rekaya Perangkat Lunak",
        "S1 Teknik Industri",
        "S1 Sistem Informasi",
        "S1 Teknik Logistik",
        "S1 MBTI",
        "S1 Akuntasi",
        "S1 Administrasi Bisnis",
        "S1 Ilmu Komunikasi",
        "S1 Digital Public Relation",
        "S1 Desain Komunikasi Visual",
        "S1 Industrial Design",
        "S1 Desain Interior",
        "S1 Kriya Tekstil dan Mode",
        "S1 Creative Arts",
        "S1 Terapa Teknologi Rekayasa Multimedia"
      ],
      generation: ["2017", "2018", "2019"],
      division: [
        {
          name: "Mobile Developer",
          value: "mobile",
          icon: require("@/assets/mobile.png")
        },
        {
          name: "Front-End Developer",
          value: "frontend",
          icon: require("@/assets/web.png")
        },
        {
          name: "Back-End Developer",
          value: "backend",
          icon: require("@/assets/web.png")
        },
        {
          name: "Game Developer",
          value: "gdc",
          icon: require("@/assets/game.png")
        },
        {
          name: "UI/UX Designer",
          value: "uiux",
          icon: require("@/assets/uiux.png")
        }
      ],
      steps: 1,
      dialog: false,
      alert: false,
      pdfAlert: false,
      birthdate: new Date().toISOString().substr(0, 10),
      calendar: false,
      name: "",
      nim: "",
      // birthdate: "",
      major: "",
      genderType: "",
      year: "",
      divisi: "",
      portfolio: "",
      cvName: "",
      motivationName: "",
      imagePreview: null,
      fileCv: null,
      motivation: null,
      image: null
    };
  },
  computed: {
    ...mapGetters({
      loading: "recruitment/loading"
    })
  },
  methods: {
    nextStep() {
      if (this.steps == 1) {
        if (
          this.name == "" ||
          this.imagePreview == null ||
          this.birthdate == "" ||
          this.genderType == "" ||
          this.major == "" ||
          this.year == "" ||
          this.divisi == "" ||
          this.cvName == ""
        ) {
          alert("Please fill in the form before continuing");
        } else {
          this.steps += 1;
        }
      } else {
        if (this.motivationName == "" || this.portfolio == "") {
          alert("Please fill in the form before continuing");
        } else {
          this.steps += 1;
        }
      }
      window.scrollTo(0, 0);
    },

    prevStep() {
      this.steps -= 1;
    },

    getFileCv(e) {
      const file = e.target;
      const fileSize = file.files[0].size;
      const filePath = file.files[0].name;
      const allowedExtensions = /(\.pdf)$/i;
      if (!allowedExtensions.exec(filePath)) {
        // alert("Please upload file with extensions .pdf only");
        this.alert = true;
        this.pdfAlert = true;
        file.value = "";
        this.fileCv = null;
        this.cvName = "";
        return false;
      } else {
        if (Math.round(fileSize / 1024) >= 1024) {
          // alert("Please upload file size less than 1 MB");
          this.alert = true;
          this.pdfAlert = true;
          file.value = "";
          this.fileCv = null;
          this.cvName = "";
          return false;
        } else {
          this.fileCv = file.files[0];
          this.cvName = filePath;
        }
      }
    },

    getFileMotivation(e) {
      const file = e.target;
      const fileSize = file.files[0].size;
      const filePath = file.files[0].name;
      const allowedExtensions = /(\.pdf)$/i;
      if (!allowedExtensions.exec(filePath)) {
        // alert("Please upload file with extensions .pdf only");
        file.value = "";
        this.alert = true;
        this.pdfAlert = true;
        this.motivation = null;
        this.motivationName = "";
        return false;
      } else {
        if (Math.round(fileSize / 1024) >= 1024) {
          // alert("Please upload file size less than 1 MB");
          file.value = "";
          this.alert = true;
          this.pdfAlert = true;
          this.motivation = null;
          this.motivationName = "";
          return false;
        } else {
          this.motivation = file.files[0];
          this.motivationName = filePath;
        }
      }
    },

    getPhoto(e) {
      const imageContainer = document.getElementsByClassName(
        "photo__container"
      );
      const file = e.target;
      const fileSize = file.files[0].size;
      const filePath = file.files[0].name;
      const allowedExtensions = /(\.jpg|\.jpeg)$/i;
      if (!allowedExtensions.exec(filePath)) {
        // alert("Please upload file with extensions .jpeg/.jpg only");
        file.value = "";
        this.alert = true;
        this.image = null;
        this.imagePreview = null;
        imageContainer[0].style.backgroundImage = "";
        return false;
      } else {
        if (Math.round(fileSize / 1024) >= 512) {
          // alert("Please upload file size less than 1 MB");
          file.value = "";
          this.alert = true;
          this.image = null;
          this.imagePreview = null;
          imageContainer[0].style.backgroundImage = "";
          return false;
        } else {
          this.image = file.files[0];
          this.imagePreview = URL.createObjectURL(file.files[0]);
          for (let i = 0; i < imageContainer.length; i++) {
            imageContainer[
              i
            ].style.backgroundImage = `url(${this.imagePreview})`;
            imageContainer[i].style.backgroundSize = "cover";
            imageContainer[i].style.backgroundPosition = "center center";
          }
        }
      }
    },

    changeColor() {
      const radio = document.getElementsByClassName("radio__container");
      for (let i = 0; i < radio.length; i++) {
        radio[i].addEventListener("click", function() {
          for (let j = 0; j < radio.length; j++) {
            if (radio[j].classList.contains("radio__selected")) {
              if (radio[j].classList.item(2) == radio[i].classList.item(2)) {
                radio[j].classList.remove("radio__selected");
              }
            }
          }
          radio[i].classList.add("radio__selected");
        });
      }
    },
    submit() {
      let fileData = new FormData();
      fileData.append("nama_lengkap", this.name);
      fileData.append("nim", this.nim);
      fileData.append("tanggal_lahir", this.birthdate);
      fileData.append("jenis_kelamin", this.genderType);
      fileData.append("jurusan", this.major);
      fileData.append("angkatan", this.year);
      fileData.append("divisi", this.divisi);
      fileData.append("foto_profile", this.image);
      fileData.append("cv", this.fileCv);
      fileData.append("motivation_letter", this.motivation);
      fileData.append("portofolio", this.portfolio);
      this.dialog = true;
      this.$store
        .dispatch("recruitment/postRecruitment", fileData)
        .then(res => {
          this.dialog = false;
          if (res.status === 200) {
            this.$swal(
              "Success",
              "Berhasil melakukan registrasi!",
              "success"
            ).then(() => {
              this.$router.push("/");
            });
          } else this.$swal("Error", "Error registrasi!", "error");
        });
    }
  },

  mounted() {
    this.changeColor();
  }
};
</script>

<style lang="sass" scoped>
h1, label, .v-btn
  font-family: $raleway

.v-input, .v-input__slot
    margin: 0

.v-btn
  background: $orange-gradient
  color: white

#no-bg
  background-color: rgba(0, 0, 0, 0)

.v-stepper
  box-shadow: none
  @media only screen and (max-width: 500px)
    width: 100%

  .v-stepper__header
    box-shadow: none

  .v-stepper__content
    padding: 0

    .prev-button, .v-btn
      margin: 0 10px 0

.register__wrapper--1
  background: url("../../src/assets/recruitment/Recruitment1.jpg") no-repeat

.register__wrapper--2
  background: url("../../src/assets/recruitment/Recruitment2.jpg") no-repeat

.register__wrapper--3
  background: url("../../src/assets/recruitment/Recruitment3.jpg") no-repeat

.register__wrapper
  background-position: center center
  background-size: 100% 100%

.register__container
  width: 100%
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  margin-bottom: 100px

  a
    color: black
    font-family: $raleway
    text-decoration: none

    .register__header
      margin-top: 82px

      span
        font-size: 18px

  .register__title
    font-family: $raleway
    font-size: 55px
    @media only screen and (max-width: 500px)
      font-size: 35px

  #profile-form, #review-form
    margin-top: 100px
    padding-top: 80px

  .input__wrapper
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1)
    border-radius: 40px
    padding: 25px
    margin: 10px
    @media only screen and (min-width: 768px)
      margin: 30px 120px

    .photo__wrapper
      z-index: 1
      position: relative
      display: flex
      justify-content: center

      #photo
        opacity: 0
        width: 100%
        height: 100%
        position: absolute
        top: 0
        bottom: 0
        left: 0
        right: 0
        cursor: pointer

      .photo__container
        position: absolute
        top: -4.5cm
        border-radius: 100px
        background-color: white
        border: 3px solid #F0793C
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1)
        width: 4cm
        height: 4cm
        text-align: center

        .v-icon--person
          font-size: 3.7cm

        .pen__container
          position: absolute
          border-radius: 100px
          background: $orange-gradient
          padding: 7px
          bottom: 15px
          right: -8px

    .input__container
      margin-top: 12px

  #radio__item--Female
    margin-top: 10px
    @media only screen and (min-width: 500px)
      margin-left: 8px
      margin-top: 0

  .radio__item
    background-color: #f2f2f2
    padding: 8px 10px
    border-radius: 5px
    font-size: 14px
    position: relative
    padding-left: 30px
    color: black
    font-family: $roboto
    display: block

  .angkatan__container
    .radio__item
      padding-left: 45px
      padding-right: 25px

  .radio__item--divisi
    margin-bottom: 15px

  .radio__selected
    background: $orange-gradient
    color: white

  .radio__container
    user-select: none
    cursor: pointer

    input
      position: absolute
      opacity: 0
      cursor: pointer

    .radio__check
      position: absolute
      top: 7px
      left: 5px
      height: 20px
      width: 20px
      background-color: white
      border-radius: 50%

    .radio__check:after
      content: ""
      position: absolute
      display: none

    input:checked ~ .radio__check:after
      display: block

    .radio__check:after
      top: 5px
      left: 5px
      width: 10px
      height: 10px
      border-radius: 50%
      background: $orange-color

  .angkatan--title
    margin-top: -10px

  .output, textarea.output
    background-color: white

  #output-gender, #output-year, #output-birthdate, #output-name, #output-divisi, #output-cv, #output-motivation, #output-nim
    padding-left: 0
    padding-right: 14px

  #output-gender, #output-year, #output-birthdate
    width: 140px

  #output-major
    width: 100%
    resize: none

  label
    color: $orange-color
    font-size: 14px

  input[type="text"]
    height: 32px
    padding: 0 7px

  .input__container--birthdate
    width: auto
    @media only screen and (max-width: 500px)
      width: 100%

    .v-input
      width: 200px
      @media only screen and (max-width: 500px)
        width: 100%

      .v-input__slot
        margin-left: 10px

  div.input__container--gender
    width: auto
    @media only screen and (max-width: 500px)
      width: 100%
    #radio__item--Male, #radio__item--Female
      @media only screen and (max-width: 500px)
        width: 100%

  // input[type="date"]
  //   padding: 5px 7px
  //   text-transform: uppercase
  //   position: relative

  // input[type="date"]::-webkit-inner-spin-button
  //   display: none

  // input[type="date"]::-webkit-clear-button
  //    display: none

  // input[type="date"]::-webkit-calendar-picker-indicator
  //   position: absolute
  //   top: 0
  //   left: 0
  //   right: 0
  //   bottom: 0
  //   width: 170px
  //   height: auto
  //   color: transparent
  //   background: transparent
  //   cursor: pointer

  input[type="date"]:after
    font-family: "Font Awesome 5 Free"
    font-weight: 900
    content: "\f073"
    color: #555
    padding: 0 5px

  input[type="file"]
    background-color: white
    margin-top: 7px
    width: 100%

  input[type="file"]::-webkit-file-upload-button
    visibility: hidden

  input[type="file"]::before
    content: 'Pilih file'
    display: inline-block
    background: $orange-gradient
    border: none
    border-radius: 5px
    padding: 4px
    width: 100px
    outline: none
    white-space: nowrap
    user-select: none
    cursor: pointer
    color: white
    text-align: center
    font-family: $raleway

  input[type="text"], textarea, .v-input
    width: 382px
    @media only screen and (max-width: 500px)
      width: 100%

  input, select, textarea
    background-color: #F2F2F2
    border-radius: 5px

  h1
    text-align: center
</style>
