<template>
  <div class="public-auth-welcome-div">
    <img alt="IMAGE41121" src="@/assets/logo-dark.jpeg" class="public-logo-image" />
    <div>
</div>



    <div class="welcome-page-text">
      <div>
        <span class="welcome-page-heading">Welcome to Piggy</span>
        <p class="welcome-page-desc">Your personal expense app</p>
      </div>
    </div>
  </div>
</template>

<script>
// import { Popover } from 'bootstrap'

export default {
  name: "AppInfo",
  data() {
    return{
      dropdown: null
    }
  },
  props: {
        content: {
            required: false,
            default: '',
        },
        title: {
            default: 'My Popover',
        },
        trigger: {
            default: 'click',
        },
        delay: {
            default: 0,
        },
        html: {
            default: false,
        },
    },
    mounted() {
        // pass bootstrap popover options from props
        // var options = this.$props
        // let ele = this.$refs.helo
        // console.log(ele)
        // let ele2 = document.getElementById("helo")
        // console.log(ele2)
        // // var ele = this.$slots.default[0].elm
        // new Popover(ele,options)
    },
};
</script>