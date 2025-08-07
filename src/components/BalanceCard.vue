<template>
  <div :class="containerClass">

    <!-- amount -->
    <faIcon class="dashboard-card-icon" :icon="iconType" />
    <span class="dashboard-amount-text"
      ><span> &#8377; {{ amount }}</span></span
    >

    <!-- dropdown -->
    <div class="dashboard-balance-text-div">
      <span class="dashboard-amount-type-text">
        <DropdownComponent 
            :options="ddlList"
            :defaultBtnTitle="btnTitle"
        /> 
      </span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { defineAsyncComponent } from "vue";
export default {
  name: "BalanceCard",
  props: {
    amount: {
      type: Number,
    },
    containerClass: {
      type: String,
    },
    iconType: {
      type: Array,
    },
    btnClass: {
      type: String,
      default: "",
    },
    btnColor: {
      type: String,
    },
    ddlList: {
      type: Array
    }
  },
  components: {
    DropdownComponent: defineAsyncComponent(() =>
      import("@/components/DropdownComponent.vue")
    ),
      // DropdownList: defineAsyncComponent(() =>
      //   import("@/components/DropdownList.vue")
      // ),
  },
  setup(props){
    const btnTitle = ref("")
    
    function onOptionClick(key){

      if(key && key.dateObj) {
        props.ddlList.forEach(item => {
        if(item.key == key.key){
          let msg = item.msg;
          msg = msg.replace("#DATE", key.dateObj.month + "'" + key.dateObj.year)
          btnTitle.value = msg
        }
      })
      }
      else if(key) {
      props.ddlList.forEach(item => {
        if(item.key == key.key){
          btnTitle.value = item.msg
        }
      })
      }
      else {
        props.ddlList.forEach(item => {
          if(item.default) {
            btnTitle.value = item.msg
          }
        })
      }
    }
    onOptionClick()

    return {
      // onOptionClick,
      btnTitle
    }
  }
};
</script>