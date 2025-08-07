<template>
    <div class="transaction-container">
  
       <div class="mt-4">
        <CustomTable
          :title="'Top Expenses'"
          :showCustomFilters="true"
          :showButtons="false"
        />
      </div>
      </div>
  </template>
  
  <script>
  import { defineAsyncComponent } from "vue";
  export default {
    name: "TopExpense",
    props: {},
    components: {
      CustomTable: defineAsyncComponent(() =>
        import("@/components/CustomTable.vue")
      )
    },
    setup() {
      
      return {
      };
    },
  };
  </script>
  