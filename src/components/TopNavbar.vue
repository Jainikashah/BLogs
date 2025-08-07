<template>
  <div class="dashboard-topbar-container">
    <img src="@/assets/logo-light.jpeg" alt="logo" class="dashboard-logo" />
    <div class="dashboard-text">
     
      <div class="dropdown">
        <button class="dropdown-toggle au-btn-filter bg-app-color btn-text-light fs-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Jainika Shah
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a @click="onLogout()" class="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
    name: "TopNavbar",
    setup(){
      const router = useRouter();
      function onLogout(){
        router.push({ name: "Login", query: { authType: "Login" } });
      }
      return {
        onLogout
      }
    }
}
</script>