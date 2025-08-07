<template>
  <div @click="onButtonClick">
    <button :class="['cursor-pointer btn', btnClass]">
      <faIcon v-if="hasIcon" :icon="icon" :class="iconClass" />
      {{ btnText }}
    </button>
  </div>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    btnText: {
      type: String,
    },
    hasIcon: {
      type: Boolean, 
      default: false,
    },
    icon: {
      type: String
    },
    btnClass: {
      type: String,
    },
    onButtonClick: {
      type: Function,
    },
    iconClass: {
      type: String,
    },
  },
};
</script>