<template>
  <section class="p-t-20">
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Add Item</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="mb-4">
          <label for="date" class="form-label font-weight-bold">Date</label>
          <input type="date" class="form-control" id="date" />
        </div>

        <div class="mb-4 description-label">
          <label for="description" class="form-label font-weight-bold">Description</label>
          <input type="text" class="form-control" id="description" />
        </div>

        <div class="mb-4">
          <label for="exampleDataList" class="form-label font-weight-bold">Catgeory</label>
          <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Select Category" />
          <datalist id="datalistOptions">
            <option value="Study" />
            <option value="Religious Deeds" />
            <option value="Entertainment" />
            <option value="Clothing" />
            <option value="Food" />
            <option value="Salary" />
            <option value="Other Incomes" />
          </datalist>
        </div>
        <div class="mb-4">
          <label for="PaymentMode" class="form-label font-weight-bold">Payment Mode</label>
          <input class="form-control" list="paymentModeOptions" id="PaymentMode" placeholder="Select Payment Mode" />
          <datalist id="paymentModeOptions">
            <option value="Cash" />
            <option value="Bank" />
            <option value="Wallet" />
          </datalist>
        </div>
        <div class="mb-4">
          <label for="amount" class="form-label font-weight-bold">Amount</label>
          <input type="number" class="form-control" id="amount" />
        </div>
        <div class="d-flex modal-form-container">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />

            <label class="form-check-label" for="flexRadioDefault1">
              Is Income
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label class="form-check-label" for="flexRadioDefault2">
              Is Expense
            </label>
          </div>
        </div>

        <!-- <button
              type="button"
              class="btn btn-secondary mr-2"
              data-bs-dismiss="modal"
            >
              Close
            </button> -->
        <button type="button" class="btn btn-primary mt-4">Save changes</button>
        <!-- </div> -->
        <!-- </div> -->
      </div>
    </div>
    <!-- table -->
    <div>
      <div class="row">
        <div class="col-md-12">
          <!-- caption -->
          <h3 class="title-5 m-b-35">{{ title }}</h3>

          <!-- filters -->
          <div class="table-data__tool">
            <div class="table-data__tool-left d-flex mb-4">
              <template v-if="!showCustomFilters">
              <DdlComponent :ddlList="ddlList" :btnClass="btnClass" :title="btnTitle">
              </DdlComponent>

              <DdlComponent :ddlList="paymentList" :btnClass="btnClass" :title="paymentListTitle">
              </DdlComponent>

              <button @click="onViewAll()" class="au-btn-filter mr-01">View All</button>
            </template>
            <template v-else>
              <DropdownComponent :options="incomeDdlList" :defaultBtnTitle="'Date'" :customDdlClass="'dropdown-toggle btn-text-light fs-1 unset-fontfamily show btn bg-white grey-text-color pt-2 pb-2 fs-08'" />

              <DropdownComponent :options="amountCompareList" :defaultBtnTitle="'Amount should be'" :customDdlClass="'dropdown-toggle btn-text-light fs-1 unset-fontfamily show btn bg-white grey-text-color pt-2 pb-2 fs-08'" />
            </template>
            </div>
            <div class="table-data__tool-right d-flex" v-if="showButtons">
              <button data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"
                @click="toggleAddIem" class="au-btn au-btn-icon au-btn--green au-btn--small height-40">
                <i class="zmdi zmdi-plus"></i>add item
              </button>

              <DdlComponent :ddlList="moreOptionsList" :btnClass="optionsClass" :title="optionsTitle">
              </DdlComponent>
            </div>
          </div>

          <!-- records -->
          <div class="table-responsive table-responsive-data2 mb-4">
            <table class="table table-data2">
              <thead>
                <tr>
                  <th>
                    <label class="au-checkbox">
                      <input type="checkbox" @change="onheaderCheckbox($event)" />
                      <span class="au-checkmark"></span>
                    </label>
                  </th>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Payment Mode</th>
                  <th>Transaction Type</th>
                  <th>Amount</th>
                  <th>Balance</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr class="tr-shadow">
                  <td>
                    <label class="au-checkbox">
                      <input type="checkbox" :checked="records.checkedAll" v-model="selectedRecords"/>
                      <span class="au-checkmark"></span>
                    </label>
                  </td>
                  <td>2018-08-29</td>
                  <td>
                    <span class="block-email">Movie</span>
                  </td>
                  <td class="">Entertainment</td>
                  <td>Bank</td>
                  <td>
                    <span class="status--process">Debit</span>
                  </td>
                  <td>$679.00</td>
                  <td class="desc">$19779.00</td>

                  <td>
                    <div class="table-data-feature">
                      <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
                        <faIcon :icon="['fas', 'edit']"> </faIcon>
                      </button>
                      <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
                        <faIcon :icon="['fas', 'trash']"> </faIcon>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr class="spacer"></tr>
                <tr class="tr-shadow">
                  <td>
                    <label class="au-checkbox">
                      <input type="checkbox" :checked="records.checkedAll" v-model="selectedRecords"/>
                      <span class="au-checkmark"></span>
                    </label>
                  </td>
                  <td>2018-08-29</td>
                  <td>
                    <span class="block-email">Movie</span>
                  </td>
                  <td class="">Entertainment</td>
                  <td>Bank</td>
                  <td>
                    <span class="status--denied">Credit</span>
                  </td>
                  <td>$679.00</td>
                  <td class="desc">$19779.00</td>

                  <td>
                    <div class="table-data-feature">
                      <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
                        <faIcon :icon="['fas', 'edit']"> </faIcon>
                      </button>
                      <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
                        <faIcon :icon="['fas', 'trash']"> </faIcon>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr class="spacer"></tr>
                <tr class="tr-shadow">
                  <td>
                    <label class="au-checkbox">
                      <input type="checkbox" :checked="records.checkedAll" v-model="selectedRecords"/>
                      <span class="au-checkmark"></span>
                    </label>
                  </td>
                  <td>2018-08-29</td>
                  <td>
                    <span class="block-email">Movie</span>
                  </td>
                  <td class="">Entertainment</td>
                  <td>Bank</td>
                  <td>
                    <span class="status--denied">Credit</span>
                  </td>
                  <td>$679.00</td>
                  <td class="desc">$19779.00</td>

                  <td>
                    <div class="table-data-feature">
                      <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
                        <faIcon :icon="['fas', 'edit']"> </faIcon>
                      </button>
                      <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
                        <faIcon :icon="['fas', 'trash']"> </faIcon>
                      </button>
                    </div>
                  </td>
                </tr>


                <tr class="spacer"></tr>
                <tr class="tr-shadow">
                  <td>
                    <label class="au-checkbox">
                      <input type="checkbox" :checked="records.checkedAll" v-model="selectedRecords"/>
                      <span class="au-checkmark"></span>
                    </label>
                  </td>
                  <td>2018-08-29</td>
                  <td>
                    <span class="block-email">Movie</span>
                  </td>
                  <td class="">Entertainment</td>
                  <td>Bank</td>
                  <td>
                    <span class="status--denied">Credit</span>
                  </td>
                  <td>$679.00</td>
                  <td class="desc">$19779.00</td>

                  <td>
                    <div class="table-data-feature">
                      <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
                        <faIcon :icon="['fas', 'edit']"> </faIcon>
                      </button>
                      <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
                        <faIcon :icon="['fas', 'trash']"> </faIcon>
                      </button>
                    </div>
                  </td>
                </tr>


                <tr class="spacer"></tr>
                <tr class="tr-shadow">
                  <td>
                    <label class="au-checkbox">
                      <input type="checkbox" :checked="records.checkedAll" v-model="selectedRecords"/>
                      <span class="au-checkmark"></span>
                    </label>
                  </td>
                  <td>2018-08-29</td>
                  <td>
                    <span class="block-email">Movie</span>
                  </td>
                  <td class="">Entertainment</td>
                  <td>Bank</td>
                  <td>
                    <span class="status--denied">Credit</span>
                  </td>
                  <td>$679.00</td>
                  <td class="desc">$19779.00</td>

                  <td>
                    <div class="table-data-feature">
                      <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
                        <faIcon :icon="['fas', 'edit']"> </faIcon>
                      </button>
                      <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
                        <faIcon :icon="['fas', 'trash']"> </faIcon>
                      </button>
                    </div>
                  </td>
                </tr>


                <tr class="spacer"></tr>
                <tr class="tr-shadow">
                  <td>
                    <label class="au-checkbox">
                      <input type="checkbox" :checked="records.checkedAll" v-model="selectedRecords"/>
                      <span class="au-checkmark"></span>
                    </label>
                  </td>
                  <td>2018-08-29</td>
                  <td>
                    <span class="block-email">Movie</span>
                  </td>
                  <td class="">Entertainment</td>
                  <td>Bank</td>
                  <td>
                    <span class="status--denied">Credit</span>
                  </td>
                  <td>$679.00</td>
                  <td class="desc">$19779.00</td>

                  <td>
                    <div class="table-data-feature">
                      <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
                        <faIcon :icon="['fas', 'edit']"> </faIcon>
                      </button>
                      <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
                        <faIcon :icon="['fas', 'trash']"> </faIcon>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineAsyncComponent, ref } from "vue";
import {
  showAllList,
  moreOptionsList,
  paymentList,
  incomeDdlList,
  amountCompareList
} from "@/utils/constants/constants";
import { useRouter } from "vue-router";
import { reactive } from 'vue'

export default {
  name: "CustomeTable",
  components: {
    DdlComponent: defineAsyncComponent(() =>
      import("@/components/DdlComponent.vue")
    ),
    DropdownComponent: defineAsyncComponent(() =>
      import("@/components/DropdownComponent.vue"))
    // AddItem: defineAsyncComponent(() => import("@/components/AddItem.vue")),
  },
  props: {
    title: {
      default: "Recent Transactions",
    },
    showButtons: {
      default: true,
      type: Boolean
    },
    showCustomFilters: {
      default: false,
      type: Boolean
    }
  },
  setup() {
    const showAddItem = ref(false);
    const selectedRecords = reactive([])
    const records = reactive({
      checkedAll: false
    })
    // let addItemModal = ref(null);

    function toggleAddIem() {
      // showAddItem.value = !showAddItem.value;
      // addItemModal.value.show();
      showAddItem.value = true
    }
    const router = useRouter();

    function onViewAll(){
      router.push({ name: "Transactions" })
    }
    function onheaderCheckbox(event){
      console.log(event)
      console.log(event.target.checked)
      if(event.target.checked){
        records.checkedAll = true
      }else {
        records.checkedAll = false
      }
    }

    return {
      // addItemModal,
      showAddItem,
      onViewAll,
      records,
      onheaderCheckbox,
      incomeDdlList,
      toggleAddIem,
      ddlList: showAllList,
      btnTitle: "Incomes and Expenses",
      moreOptionsList,
      paymentList,
      selectedRecords,
      paymentListTitle: "Payment Mode",
      optionsClass:
        "btn bg-dark btn-text-light pt-2 pb-2 fs-08 dropdown-toggle",
      optionsTitle: "More Options",
      amountCompareList,
      btnClass: "btn bg-white grey-text-color pt-2 pb-2 fs-08 dropdown-toggle",
    };
  },
};
</script>
