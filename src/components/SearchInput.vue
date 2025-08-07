<template>
  <form class="au-form-icon--sm">
    <input
      class="au-input--w300 au-input--style2 mt-05"
      type="text"
      :placeholder="placeholder"
    />
    <button class="au-btn--submit2">
      <faIcon class="search-icon" :icon="['fas', 'magnifying-glass']" />
    </button>
  </form>
</template>

<script>
export default {
  name: "searchInput",
  props:{
    placeholder: {
        type: String,
        default: "search"
    }
  }
};
</script>