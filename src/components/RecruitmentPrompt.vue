<template>
  <v-dialog v-model="dialog" width="550">
    <template v-slot:activator="{ on }">
      <v-btn class="join-button__container ml-3 white" v-on="on" text>
        <!-- <span class="join-button">JOIN US</span> -->
        <span class="join-button">STATUS</span>
      </v-btn>
    </template>

    <v-card class="d-flex flex-column pa-12">
      <template v-if="check == false && result == false">
        <v-btn class="white--text" depressed text to="/play-game" v-if="close2"
          >CHECK REGISTRATION STATUS</v-btn
        >
        <v-btn
          class="white--text"
          depressed
          text
          @click="check = true"
          v-if="close"
          >CHECK REGISTRATION STATUS</v-btn
        >
        <v-btn
          class="white--text mt-6"
          depressed
          text
          to="/recruitment"
          v-if="close == false"
          >REGISTER NOW</v-btn
        >
      </template>

      <template v-if="check">
        <h3>CHECK REGISTRATION STATUS</h3>
        <div class="mt-4">
          <label for="input-nim">
            NIM
            <input type="text" id="input-nim" v-model="nimInput" />
          </label>
        </div>
        <div class="mt-6 text-center">
          <v-btn
            class="white--text"
            depressed
            text
            @click="checkStatus()"
            :loading="loading"
            >CHECK REGISTRATION STATUS</v-btn
          >
        </div>
        <v-btn class="float-button back-button" icon @click="check = false">
          <v-icon>
            mdi-chevron-left
          </v-icon>
        </v-btn>
      </template>

      <template v-if="result">
        <div>
          <label for="output-nama">
            Nama
            <input
              type="text"
              id="output-nama"
              style="color:black"
              class="output"
              v-model="user.nama_lengkap"
              disabled
            />
          </label>
        </div>
        <div class="mt-3">
          <label for="output-nim">
            NIM
            <input
              type="text"
              id="output-nim"
              class="output"
              v-model="user.nim"
              disabled
            />
          </label>
        </div>
        <div class="mt-3">
          <label for="output-divisi">
            Divisi
            <input
              type="text"
              id="output-divisi"
              class="output"
              v-model="user.divisi"
              disabled
            />
          </label>
        </div>
        <template v-if="tahap1.data == 'pass'">
          <div class="mt-3">
            <label>Status</label>
            <div class="mt-2">
              <span
                class="py-1 px-2 green white--text"
                style="border-radius: 5px;"
              >
                Congratulation!
              </span>
              You've passed the 1<sup>st</sup> registration phase
            </div>
          </div>
          <div class="mt-3">
            <label>Interview Form</label>
            <div class="mt-2">
              Please fill in the
              <a href="http://bit.ly/wawancara_RPLGDC20">interview form</a>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="mt-3">
            <label>Status</label>
            <div class="mt-2">
              <span
                class="py-1 px-2 red white--text"
                style="border-radius: 5px;"
                >We're sorry</span
              >
              You didn't pass the 1<sup>st</sup> registration phase
            </div>
          </div>
        </template>
        <v-btn
          class="float-button back-button"
          icon
          @click="(result = false), (check = true)"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </template>

      <v-btn class="float-button close-button" icon @click="closeDialog">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "RecruitmentPrompt",
  data() {
    return {
      dialog: false,
      check: false,
      nimInput: "",
      user: null,
      result: false,
      loading: false,
      close: false,
      close2: false,
      tahap1: {}
    };
  },
  created() {
    const now = new Date();
    const deadline = this.$store.state.recruitment.deadline;
    const deadline2 = this.$store.state.recruitment.deadline2;
    if (now > deadline) {
      this.close = true;
    }
    if (now > deadline2) {
      this.close2 = true;
    }
  },
  methods: {
    closeDialog() {
      this.dialog = false;
      this.check = false;
      this.result = false;
      this.user = null;
    },
    checkStatus() {
      if (this.nimInput != "") {
        this.loading = true;
        this.$store
          .dispatch("recruitment/getDetailNim", this.nimInput)
          .then(data => {
            this.loading = false;
            if (data.status === "success") {
              this.user = data.data;
              this.check = false;
              this.result = true;
              this.$store
                .dispatch("recruitment/getTahap1", this.nimInput)
                .then(data => {
                  if (data.msg === "success") {
                    this.tahap1 = data;
                  }
                });
            } else {
              document.getElementById("input-nim").style.border =
                "2px red solid";
            }
          });
      } else {
        document.getElementById("input-nim").style.border = "2px red solid";
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.v-card.v-sheet
  position: relative

  .v-btn:not(.float-button)
    font-family: $raleway
    background: $orange-gradient
    font-size: 12px
    @media only screen and (min-width: 500px)
      font-size: 16px

  .float-button
    position: absolute
    top: 6px

    .v-icon
      color: $orange-color

  .close-button
    right: 6px

  .back-button
    left: 6px

  label, h3
    font-family: $raleway
    color: $orange-color

  h3
    text-align: center

  label
    font-size: 14px

  input
    background-color: #F2F2F2
    border-radius: 5px
    height: 32px
    padding: 0 7px
    width: 100%
    color: black
    font-family: arial

  input.output
    background-color: #fff
    padding-left: 0

.join-button__container
  .join-button
    font-family: $raleway
    color: $orange-color
    display: block
</style>
