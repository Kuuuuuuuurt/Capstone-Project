<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Welcome back</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">LoginPage</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="h-5/6 w-96 mx-auto block bg-inherit py-1.5 px-1.5 my-3">
        <div>
          <div>
            <ion-text class="text-2xl font-extrabold"
              >Login your account</ion-text
            >
          </div>
          <div>
            <ion-text class="text-m font-mediumd"
              >Please sign in to continue</ion-text
            >
          </div>
          <div class="mt-9">
            <ion-item>
              <ion-label position="floating">Establishment ID</ion-label>
              <ion-input></ion-input>
            </ion-item>
          </div>

          <div class="mt-1.5">
            <ion-item>
              <ion-label position="floating">Password</ion-label>
              <ion-input type="password"></ion-input>
            </ion-item>
          </div>

          <div class="text-right mt-2.5">
            <ion-button class="pr-2" color="secondary" fill="clear"
              >Forgot Password?</ion-button
            >
          </div>

          <div class="text-center mt-5">
            <ion-button
              color="dark"
              class="w-3/5"
              shape="round"
              type="submit"
              @click="toHomePage"
              >Login</ion-button
            >
          </div>

          <div class="text-center">
            <ion-button color="dark" fill="clear" disabled="true"
              >New User?</ion-button
            >
            <ion-button color="secondary" fill="clear" @click="toSignUp"
              >Sign Up</ion-button
            >
          </div>

          <div class="text-center mt-7">
            <ion-text>━━━━━ OR ━━━━━━ </ion-text>
          </div>

          <div class="text-center mt-7">
            <ion-button color="dark" fill="clear" disabled="true"
              >Sign in as</ion-button
            >
            <ion-button color="secondary" fill="clear">Individual</ion-button>
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

  methods: {
    toSignUp() {
      this.$router.push("/establishment-registration");
    },
    toHomePage() {
      this.$router.push("/individual-home");
    },
  },
});
</script>

<style scoped>
</style>