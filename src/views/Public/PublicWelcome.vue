<template>
  <div class="row justify-content-center align-items-center">
  <div class="col-md-6">
  <div class="welcome-page-container">

    <AppInfo />
    <!-- buttons -->
    <div class="welcome-page-buttons justify-content-center mt-2">
      <custom-button
        :btnClass="'btn-dark login-btn-text welcome-page-login-btn'"
        :btnText="'Log In'"
        :onButtonClick="onLogin"
      /> 
      <custom-button
        :btnClass="'btn-light reg-btn-text welcome-page-reg-btn'"
        :btnText="'Register'"
        :onButtonClick="onRegister"  />
    </div>
  </div>
    
  </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router' 
import { defineAsyncComponent } from 'vue'

export default {
  name: "PublicWelcome",
  components: { 
    CustomButton: defineAsyncComponent(() => import('@/components/CustomButton.vue')),
    AppInfo: defineAsyncComponent(() => import('@/components/AppInfo.vue'))
  },
  setup(){
    const router = useRouter();

    // login-register handler
    const onLogin = () => {
      router.push({ name: 'Login', query: { authType: 'Login'} })
    }
  
    const onRegister = () => {
      router.push({ name: 'Login', query: {authType: 'Register'} })
    }
    return {
      onLogin,
      onRegister
    }
  },
};
</script>