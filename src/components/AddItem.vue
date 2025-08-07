<template>
  <div>
helo
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>

    <!-- <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby=""
      aria-hidden="true"
      ref="modalEle"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ modalTitle }}
            </h5>
          </div>
          <div class="modal-body px-5">
            <slot name="body">
              <div class="d-flex modal-form-container">
                <div class="mb-4">
                  <label for="date" class="form-label font-weight-bold">Date</label>
                  <input type="date" class="form-control" id="date" />
                </div>

                <div class="mb-4 description-label">
                  <label for="description" class="form-label font-weight-bold"
                    >Description</label
                  >
                  <input type="text" class="form-control" id="description" />
                </div>
              </div>

              <div class="d-flex modal-form-container"> 
                <div class="mb-4">
              <label for="exampleDataList" class="form-label font-weight-bold">Catgeory</label>
              <input
                class="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Select Category"
              />
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
              <input
                class="form-control"
                list="paymentModeOptions"
                id="PaymentMode"
                placeholder="Select Payment Mode"
              />
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


              </div>
              <div class="mb-4">
                <label for="amount" class="form-label font-weight-bold">Transaction Type</label>

              <div class="d-flex modal-form-container">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />

                  <label class="form-check-label" for="flexRadioDefault1">
                    Is Income
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Is Expense
                  </label>
                </div>
              </div>
              </div>
            </slot>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>


<script>
import { onMounted, ref } from "vue";
import { Modal } from "bootstrap";

export default {
  name: "AddItem",
  props: {
    modalTitle: {
      type: String,
    },
  },
  expose: ["show"],
  setup() {
    let modalEle = ref(null);
    let thisModalObj = null;

    onMounted(() => {
      thisModalObj = new Modal(modalEle.value);
    });
    function show() {
      if (thisModalObj) thisModalObj.show();
    }

    return {
      show,
      modalEle,
    };
  },
};
</script>