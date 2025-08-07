<template>
  <div :class="['dropdown', ddlClass]">
    <button
        :class="[
          'dropdown-toggle bg-transparent btn-text-light fs-1 unset-fontfamily',
          customDdlClass,
        ]"
        type="button"
        id="dropdownMenuButton1"
        :data-bs-toggle="'dropdown'"
        aria-expanded="false"
        data-bs-auto-close="outside"
        @click="toggleDdl(true)"
      >
      {{ btnTitle ? btnTitle : defaultBtnTitle }}
    </button>

    <ul v-show="idDdlOpen" class="dropdown-menu"  aria-labelledby="dropdownMenuButton1" >
      <li v-for="(item, index) in options" :key="item + index">
        <template v-if="item.key == 'customDate'">
          <div class="dropdown dropend">
            <button
              class="dropdown-toggle bg-transparent px-3 pt-1"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              :data-bs-auto-close="'outside'"
              aria-expanded="false"
            >
              Custom Date
            </button>
            <ul
              class="dropdown-menu pt-3"
              aria-labelledby="dropdownMenuButton2"
            >
              <li class="px-3 pt-1 pb-2 date-ddl-li">
                <span class="min-width-40"> From </span>
                <input v-model="fromDate" type="date" class="date-ddl-input" />
              </li>
              <li class="px-3 pt-1 date-ddl-li">
                <span class="min-width-40"> To </span>
                <input v-model="toDate" type="date" class="date-ddl-input" />
              </li>

              <div class="date-set-btn">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="onDateSelect(item)"
                >
                  Set
                </button>
              </div>
            </ul>
          </div>
        </template>

        <template v-else-if="item.key == 'greaterThan'">
          <div class="d-flex max-width mr-1 ml-1 mb-2">
            <p>greater than </p>
            <input v-model="greaterAmt" type="text" class="form-control amt-css" />
            </div>
            <p class="orClass">OR</p>
            <div class="d-flex max-width mr-1 ml-1 mb-2">
            <p>less than </p>
            <input v-model="lesserAmt" type="text" class="form-control amt-css" />
            </div>
            <div class="date-set-btn">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="onAmountSelect(item)"
                >
                  Set
                </button>
              </div>
        </template>
        
        <a v-else class="dropdown-item" @click="onSelect(item)">
          {{ item.label }}
        </a>
      </li>
    </ul>
  </div>
</template>


<script>
import { ref } from "vue";
export default {
  name: "DropdownComponent",
  props: {
    defaultBtnTitle: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
    },
    customDdlClass: {
      type: String,
      default: "",
    },
    ddlClass: {
      type: String,
    },
  },

  setup() {
    const btnTitle = ref(null);
    const fromDate = ref(null);
    const toDate = ref(null);
    const showDdl = ref(true);
    const toggleDdlClass = ref("");
const greaterAmt = ref(null);
const lesserAmt = ref(null);

    const idDdlOpen = ref(false)
    const toggleValue=ref("dropdown")

    function toggleDdl(value) {
      // toggleDdlClass.value = value ? "show" : "hide"
      // console.log("toggling before", value, showDdl.value);
      // // showDdl.value = value ? value : !showDdl.value;
      // console.log("toggling", value, showDdl.value);
      // var myDropdown = document.getElementById('dropdownMenuButton1')
      // // myDropdown.toggle()
      // console.log(myDropdown)
      idDdlOpen.value = true
      value ? toggleValue.value = "dropdown" : toggleValue.value = "false"
    }

    function onSelect(item) {
      console.log(item);
      idDdlOpen.value = false
      btnTitle.value = item.msg;
      // toggleDdl(false);
    }

    // watch(btnTitle, (newV, oldV) => {
    //   if(newV != oldV){
    //     toggleDdl(false)
    //   }
    // })

    function onAmountSelect(item){
      let msg = item.msg;
      if(greaterAmt.value){
        msg = msg.replace("#SIGN", `>`)
        msg = msg.replace("#VALUE", greaterAmt.value)
      }else{
        msg = msg.replace("#SIGN", `<`)
        msg = msg.replace("#VALUE", lesserAmt.value)
      }
      btnTitle.value = msg
      idDdlOpen.value = false;
    }
    function onDateSelect(item) {
      let msg = item.msg;
      console.log(item);

      let from = new Date(fromDate.value);
      let to = new Date(toDate.value);
      let month = from.getMonth() + 1; // as it starts from 0th index
      let date = from.getDate();
      let year = from.getFullYear().toString().substring(2);
      from = `${date}/${month}/${year}`;

      let toMonth = to.getMonth();
      +1;
      let toDateV = to.getDate();
      let toYear = to.getFullYear().toString().substring(2);
      to = `${toDateV}/${toMonth}/${toYear}`;

      msg = msg.replace("#DATE", `${from} - ${to}`);
      btnTitle.value = msg;
      toggleDdl(false);
      idDdlOpen.value = false;
    }

    return {
      onSelect,
      idDdlOpen,
      toggleDdlClass,
      fromDate,
      lesserAmt,
      greaterAmt,
      toDate,
      btnTitle,
      toggleValue,
      onDateSelect,
      toggleDdl,
      showDdl,
      onAmountSelect,
    };
  },
};
</script>

<style scoped>
.dropdown-menu li {
  position: relative;
}
.dropdown-menu .dropdown-submenu {
  display: none;
  position: absolute;
  left: 100%;
  top: -7px;
}
.dropdown-menu .dropdown-submenu-left {
  right: 100%;
  left: auto;
}
.dropdown-menu > li:hover > .dropdown-submenu {
  display: block;
}

.date-ddl-li {
  display: flex;
  gap: 1rem;
}
.date-ddl-input {
  border: 1px solid rgb(171, 169, 169);
  padding: 0.2rem;
}
</style>