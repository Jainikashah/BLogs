<template>
  <div class="default-layout">
    <div class="default-layout-container">
      <div class="default-layout-div">
        <!-- top navbar -->
        <TopNavbar />


<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasTopLabel">Offcanvas top</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>


        <!-- side bar -->
        <div class="sidebar-container">
          <div class="sidebar-icons">
            <div class="dashboard-icons mt-3">
             
              <router-link :to="'dashboard'" triggers="hover" class="user-dashboard" data-bs-toggle="tooltip" data-bs-placement="left"
                title="Dashboard">
                <faIcon :icon="['fas', 'house-user']" />
              </router-link>

              <router-link class="user-dashboard mt-2 " trigger="hover" :to="'dashboard'" data-bs-toggle="tooltip" data-bs-placement="left"
                title="Search">
              <div data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                <faIcon :icon="['fas', 'magnifying-glass']" />
</div>

              </router-link>
              <router-link :to="'dashboard'" class="user-dashboard mt-2" data-bs-toggle="tooltip" data-bs-placement="left"
                title="Add Record">
                <faIcon :icon="['fas', 'circle-plus']" />
              </router-link>

              <router-link data-bs-toggle="tooltip" data-bs-placement="left" title="Transactions"
                class="user-dashboard mt-2" :to="'transactions'">
                <faIcon :icon="['fas', 'wallet']" />
              </router-link>
            </div>

            <router-link :to="'help'" class="user-dashboard mt-2" data-bs-toggle="tooltip" data-bs-placement="left"
              title="Help">
              <faIcon  :icon="['fas', 'circle-question']" />
            </router-link>
          </div>
        </div>

        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import TopNavbar from "@/components/TopNavbar.vue";
import { Tooltip } from 'bootstrap'
export default {
  name: "DefaultLayout",
  components: { TopNavbar },
  mounted() {
    new Tooltip(document.body, {
      selector: "[data-bs-toggle='tooltip']",
    })
  }
};
</script>