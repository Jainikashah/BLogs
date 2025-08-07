<template>
    <div  class="col-md-6 col-lg-4 top-expenses">
    <div class="chart-percent-2">
            <DropdownComponent
        :options="ddlList"
        :defaultBtnTitle="'Spending Limit of Current Month'"
        :customDdlClass="'dark-text-color width-100 text-center fs-2 text-wrap font-weight-600'"
      />
 <div class="table-responsive text-left mt-5">
    <div class="pb-1">
   <div class="mb-3">
    <p class="mb-1">Food:</p>
        <div class="progress mb-2">
            <div class="progress-bar light-red w-25">25%</div>
        </div>
   </div>

<div class="mb-3">
    <p class="mb-1">Personal care:</p>
        <div class="progress mb-2">
            <div class="progress-bar light-red w-50">50%</div>
        </div>
   </div>

<div class="mb-3">
    <p class="mb-1">Others:</p>
        <div class="progress mb-2">
            <div class="progress-bar light-red w-75">75%</div>
        </div>
   </div>

<div class="mb-4">
    <p class="mb-1">Shopping:</p>
        <div class="progress mb-2">
            <div class="progress-bar light-red width-100">100%</div>
        </div>
   </div>

</div>


        <button :class="['mt-4 btn btn-primary width-100']">
          Add Spending Limit
        </button>
      </div>
    </div>
    
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
    name: "SpendingControl",
    props:{
         ddlList: {
      type: Array,
    },
  },

     components: {
    DropdownComponent: defineAsyncComponent(() =>
      import("@/components/DropdownComponent.vue")
    ),
    }
}
</script>