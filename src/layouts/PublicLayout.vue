<template>
  <div class="layout-container">
    <div class="public-layout-container w-100 overflowx-hidden">
      <slot />
      <div class="login-page-footer w-100">
          <p>Created by Jainika shah | <span class="cursor-pointer link">Terms of use</span></p>
        </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'PublicLayout',
  props: {},
}
</script>
