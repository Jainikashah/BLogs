<template>
    <div  class="col-md-6 col-lg-4 top-expenses">
    <div class="chart-percent-2">
            <DropdownComponent
        :options="ddlList"
        :defaultBtnTitle="'Recurring Expenses of Current Month'"
        :customDdlClass="'dark-text-color width-100 text-center fs-2 text-wrap font-weight-600'"
      />
 <div class="table-responsive text-right mt-4">
        <table class="table table-top-campaign mb-1">
          <tbody>
            <tr>
              <td :class="'text-left'">Electricity Bill
                <span class="reccuring-span">every month</span>
              </td>
              <td>$70
                <span class="width-100 text-right rec-date-span text-success">Done</span>
              </td>
            </tr>
            <tr>
              <td :class="'text-left'">Charity
                
                <span class="reccuring-span">every week</span>
              </td>

              <td>$412
                <span class="width-100 text-right rec-date-span text-success">Done</span>

              </td>
            </tr>
            <tr>
              <td :class="'text-left'">Mobile Recharge
                <span class="reccuring-span">every year</span>

              </td>

              <td>$12
                <span class="width-100 text-right rec-date-span text-danger">due date: 23/2/23</span>

              </td>
            </tr>
           
            <tr>
              <td :class="'text-left'">Rent
                <span class="reccuring-span">every 6 months</span>

              </td>
              <td>$106
                <span class="width-100 text-right rec-date-span text-danger">due date: 23/2/23</span>

              </td>
            </tr>
          </tbody>
        </table>
        <button :class="['mt-4 btn btn-primary width-100']">
          Add Recurring Expense
        </button>
      </div>
    </div>
    
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
    name: "RecurringPayments",
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