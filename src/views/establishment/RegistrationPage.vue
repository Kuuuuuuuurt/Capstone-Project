<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Welcome</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">RegistrationPage</ion-title>
        </ion-toolbar>
      </ion-header>
      <div>
        <div class="h-5/6 w-96 mx-auto block bg-inherit py-1.5 px-1.5 my-3">
          <div>
            <div>
              <ion-text class="text-2xl font-extrabold"
                >Create your account</ion-text
              >
            </div>
            <div>
              <ion-text class="text-m font-mediumd"
                >Please fill the information needed to create account.</ion-text
              >
            </div>

            <div class="mt-2">
              <ion-item>
                <ion-label position="floating">Contact Number</ion-label>
                <ion-input placeholder="Enter Value"></ion-input>
              </ion-item>
            </div>

            <div class="mt-1.5">
              <ion-item>
                <ion-label position="fixed">Purok</ion-label>
                <ion-input placeholder="Enter Value"></ion-input>
              </ion-item>
            </div>

            <div class="mt-1.5">
              <ion-item>
                <ion-label position="fixed">Brgy</ion-label>
                <ion-input placeholder="Enter Value"></ion-input>
              </ion-item>
            </div>

            <div class="mt-1.5">
              <ion-item>
                <ion-label>Municipality/City</ion-label>
                <ion-select placeholder="Select City">
                  <ion-select-option value="O">Ozamiz City</ion-select-option>
                  <ion-select-option value="C">Clarin</ion-select-option>
                  <ion-select-option value="T">Tudela</ion-select-option>
                </ion-select>
              </ion-item>
            </div>

            <div class="mt-1.5">
              <ion-item>
                <ion-label>Province</ion-label>
                <ion-select placeholder="Select Province">
                  <ion-select-option value="O"
                    >Misamis Occidental</ion-select-option
                  >
                </ion-select>
              </ion-item>

              <div class="mt-1.5">
                <ion-item>
                  <ion-label>Gender</ion-label>
                  <ion-select placeholder="Select One">
                    <ion-select-option value="f">Female</ion-select-option>
                    <ion-select-option value="m">Male</ion-select-option>
                    <ion-select-option value="lgbt">LGBTQ+</ion-select-option>
                    <ion-select-option value="pnts"
                      >Prefer not to say</ion-select-option
                    >
                  </ion-select>
                </ion-item>
              </div>

              <div class="mt-1.5">
                <ion-item>
                  <ion-label position="fixed">Age</ion-label>
                  <ion-input type="number"></ion-input>
                </ion-item>
              </div>

              <div class="mt-1.5">
                <ion-item>
                  <ion-label position="fixed">Password</ion-label>
                  <ion-input type="password"></ion-input>
                </ion-item>
              </div>

              <div class="mt-5">
                <input type="checkbox" />
                <ion-label class="ml-2"
                  >I have read and accept the Privacy Policy.</ion-label
                >
              </div>
            </div>

            <div class="text-center mt-5">
              <ion-button color="dark" class="w-3/5" shape="round" type="submit"
                >Sign Up</ion-button
              >
            </div>

            <div class="text-center">
              <ion-button color="dark" fill="clear" disabled="true"
                >Have an account?</ion-button
              >
              <ion-button color="secondary" fill="clear" @click="toSignIn"
                >Sign In</ion-button
              >
            </div>

            <div class="text-center mt-7">
              <ion-text>━━━━━ OR ━━━━━━ </ion-text>
            </div>

            <div class="text-center mt-7">
              <ion-button color="dark" fill="clear" disabled="true"
                >Sign up as</ion-button
              >
              <ion-button
                color="secondary"
                fill="clear"
                @click="toLoginIndividual"
                >Individual</ion-button
              >
            </div>
          </div>
        </div>

        <div class="text-right pr-12">
          <ion-text class="font-extrabold text-xl">TRA</ion-text>
          <ion-text class="font-extrabold text-xl text-sky-500">FEX</ion-text>
        </div>
        <div class="text-right pr-3">
          <ion-text class="text-lg">Contact Tracing App</ion-text>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  alertController,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },

  async mounted() {
    const alert = await alertController.create({
      cssClass: "my-custom-class",
      header: "Privacy Policy",
      message: `Welcome to TRAFEX System.
The City of Ozamiz (“us”, “we”, or “our”) operates the TRAFEX System (hereinafter referred to as “Service”). We are committed to protecting your privacy as a Ozamiz resident, and even as a non-resident of this City.
Our Data Privacy Statement governs your visit to this site and explains how we collect, safeguard and disclose information that results from your use of our Service.
The confidentiality of your information remains our top priority. We shall exert all reasonable efforts to protect it against unauthorized use or disclosure.
        `,
      buttons: ["agree", "disagree"],
    });
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  },

  methods: {
    toSignIn() {
      this.$router.push("/establishment-login");
    },
    toLoginIndividual() {
      this.$router.push("/individual-regstration");
    },
  },
});
</script>

<style scoped>
</style>