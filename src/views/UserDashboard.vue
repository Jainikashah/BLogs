<template>
  <div class="container-custom">

    <!-- welcome user  -->
    <div class="search-header">
      <h4 class="mt-4 mb-1 username-title dark-text-color unset-fontweight">Here's an overview of your financial status!</h4>
      <search-input :placeholder="'search for data and records..'" />
    </div>
    <hr class="header-divider" />

    <!-- balance cards -->
    <div class="dashboard-cards-container">
      <BalanceCard :containerClass="'dashboard-balance-container'" :amount="127" :ddlList="balanceList"
        :iconType="['fas', 'hand-holding-droplet']" />

      <BalanceCard :containerClass="'dashboard-income-container'" :amount="287" :ddlList="incomeDdlList"
        :btnColor="'bg-blue'" :iconType="['fas', 'sack-dollar']" />

      <BalanceCard :containerClass="'dashboard-expense-container'" :amount="127" :ddlList="expenseDdlList"
        :btnColor="'bg-red'" :iconType="['fas', 'cart-shopping']" />

      <BalanceCard :containerClass="'dashboard-profit-container'" :amount="823" :ddlList="profitDdlList"
        :btnColor="'bg-purple'" :btnClass="'card-width dashboard-btns'" :iconType="['fas', 'piggy-bank']" />
    </div>

    <div class="mt-6 statistics-section">
      <!-- top expenses & incomes -->
      <TopRecordsTable :btnTitle="'Top Income'" :ddlList="incomeDdlList" :customClass="'fs-4 text-blue font-weight-bold'"
        listColor=" bg-light-blue" />
      <TopRecordsTable :btnTitle="'Top Expenses'" :isIncome="false" :ddlList="expenseDdlList"
        :customClass="'fs-4 text-danger font-weight-bold'" listColor="bg-dark-red" />


      <!-- category wise piechart -->
    </div>

    <div class="mt-6 statistics-section">
      <PieChart :ddlList="expenseDdlList" />
      <RecurringPayments />
      <SpendingControl />
    </div>

    <div class="mt-4">
      <CustomTable />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { balanceList, incomeDdlList, profitDdlList, expenseDdlList } from "@/utils/constants/constants";

export default {
  name: "UserDashboard",
  props: {},
  components: {
    CustomTable: defineAsyncComponent(() =>
      import("@/components/CustomTable.vue")
    ),
    PieChart: defineAsyncComponent(() => import("@/components/PieChart.vue")),
    TopRecordsTable: defineAsyncComponent(() =>
      import("@/components/TopRecordsTable.vue")
    ),
    SearchInput: defineAsyncComponent(() =>
      import("@/components/SearchInput.vue")
    ),
    BalanceCard: defineAsyncComponent(() =>
      import("@/components/BalanceCard.vue")
    ),
    RecurringPayments: defineAsyncComponent(() =>
      import("@/components/RecurringPayments.vue")
    ),
    SpendingControl: defineAsyncComponent(() =>
      import("@/components/SpendingControl"))
  },
  setup() {

    return {
      balanceList,
      expenseDdlList,
      incomeDdlList,
      profitDdlList
    };
  },
};
</script>
