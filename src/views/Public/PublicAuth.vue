<template>
  <div class="public-auth-container">
    <div class="public-auth-signup-container">
      <div class="public-auth-frame">
        <!-- welcome section -->
        <AppInfo />

        <!-- form inputs -->
        <div class="public-auth-inputs mt-2">
          <input
            type="text"
            class="public-auth-input-text public-auth-input-text2"
            placeholder="username"
          />
          <input
            type="password"
            class="public-auth-input-text public-auth-input-text2"
            placeholder="password"
          />
          <input
            v-if="isRegister"
            type="password"
            class="public-auth-input-text public-auth-input-text2"
            placeholder="confirm password"
          />

          <custom-button
            v-if="isRegister"
            :btnClass="'btn-dark auth-buttons public-auth-btn-text'"
            :btnText="'Register'"
            @click="redirectToDashboard()"

          />

          <custom-button
            v-else
            :btnClass="'btn-dark auth-buttons public-auth-btn-text'"
            :btnText="'Login'"
            @click="redirectToDashboard()"
          />

          <p class="public-auth-para" v-if="isRegister">
            Already have an account?
            <span class="sign-up-text cursor-pointer link" @click="onLogin()">
              Log in
            </span>
          </p>

          <p class="public-auth-para" v-else>
            Don't have an account?<span
              class="sign-up-text cursor-pointer link"
              @click="onRegister()"
            >
              Sign up
            </span>
          </p>
        </div>

        <div class="public-auth-or-text">
          <hr class="hr-line" />
          <span class="public-auth-or"><span>OR</span></span>
          <hr class="hr-line" />
        </div>

        <custom-button
          :btnClass="'public-auth-google-div public-auth-google-text btn-light mb-4'"
          :btnText="'Continue with Google'"
          :hasIcon="true"
          :iconClass="'mr-1'"
          :icon="['fab', 'google']"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { defineAsyncComponent } from "vue";
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "PublicAuth",
  components: {
    AppInfo: defineAsyncComponent(() => import("@/components/AppInfo.vue")),
    CustomButton: defineAsyncComponent(() =>
      import("@/components/CustomButton.vue")
    ),
  },
  props: {
    params: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  setup() {
    // defining login-register screen
    const authType = ref("");

    const route = useRoute();
    authType.value = route.query.authType;

    const isRegister = computed(() => {
      return authType.value == "Register";
    });

    // login-register handler
    const router = useRouter();
    const onLogin = () => {
      router.push({ name: "Login", query: { authType: "Login" } });
      authType.value = "Login";
    };

    const onRegister = () => {
      router.push({ name: "Login", query: { authType: "Register" } });
      authType.value = "Register";
    };

    const redirectToDashboard = () => {
      router.push({ name: "UserDashboard" })
    }

    return {
      authType: authType.value,
      isRegister,
      onLogin,
      onRegister,
      redirectToDashboard,
    };
  },
};
</script>