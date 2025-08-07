<template>
  <div class="col-md-6 col-lg-6 top-expenses">
    <div class="top-campaign">
      <div class="d-flex mb-4">
        <DropdownComponent :options="ddlList" :defaultBtnTitle="btnTitle" :customDdlClass="customClass" />

      </div>

      <!-- table -->
      <div class="table-responsive text-right">
        <table class="table table-top-campaign">
          <tbody>
            <tr>
              <td :class="'text-left'">1. Clothes</td>
              <td :class="listColor">$70,261.65</td>
            </tr>
            <tr>
              <td :class="'text-left'">2. Food</td>
              <td :class="listColor">$46,399.22</td>
            </tr>
            <tr>
              <td :class="'text-left'">3. Body care</td>
              <td :class="listColor">$35,364.90</td>
            </tr>
            <tr>
              <td :class="'text-left'">4. Household items</td>
              <td :class="listColor">$20,366.96</td>
            </tr>
            <tr>
              <td :class="'text-left'">5. Gifts and Accessories</td>
              <td :class="listColor">$10,366.96</td>
            </tr>
          </tbody>
        </table>
        <router-link v-if="isIncome" :to="'top-income'" :class="['text-right mt-5 btn btn-text-light', listColor]">view more </router-link>

        <router-link v-else :to="'top-expense'" :class="['text-right mt-5 btn btn-text-light', listColor]">view more </router-link>

      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
import { defineAsyncComponent } from "vue";
// import { topIncomesList } from "@/utils/constants/constants"

export default {
  name: "TopRecordsTable",
  props: {
    ddlList: {
      type: Array
    },
    btnTitle: {
      type: String
    },
    customClass: {
      type: String
    },
    listColor: {
      type: String
    },
    isIncome: {
      type: Boolean,
      default: true
    }
  },
  components: {
    DropdownComponent: defineAsyncComponent(() =>
      import("@/components/DropdownComponent.vue"))
  },
  setup() {
    // const btnTitle = ref(props.btnTitle)

    // function onOptionClick(){
    //   topIncomesList.forEach(item => {
    //       if(item.default) {
    //         btnTitle.value = item.msg
    //       }
    //     })
    // }

    // onOptionClick()
    return {
      // topIncomesList,
      //  onOptionClick,
      //  btnTitle
    };
  },
};
</script>