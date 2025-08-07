<template>
  <div>
    <DdlComponent
      :ddlList="ddlList"
      :btnClass="btnClass"
      :title="btnTitle"
      :closeOn="ddlClose"
      @onSelect="onSelect"
    >
      <template #content="{ ddlLists, ddlTitle, isCombined }">
        <DdlComponent
          :btnClass="'dropdown-item'"
          :position="'dropend'"
          :ddlList="ddlLists"
          :title="ddlTitle"
          :closeOn="ddlClose"
          @onSelect="onSelect"
        >
          <template v-if="isCombined" #body="{ list }">
            <div
              :id="'subMenuBtn'"
              :class="['dropdown-menu p-4', subMenuClass]"
            >
              <DdlComponent
                v-for="x in list"
                :key="x.key"
                :btnClass="'btn btn-light dropdown-toggle min-wdt-90'"
                :ddlList="x.children"
                :title="x.label"
                :closeOn="ddlClose"
                @onSelect="onSelect"
              >
              </DdlComponent>
                <button type="submit" @click="onSet()" :class="['btn btn-text-light', btnColor]">
                  Set
                </button>
            </div>
          </template>

          <template v-else #content="{ ddlLists, ddlTitle, isCombined }">
            <DdlComponent
              :btnClass="'dropdown-item'"
              :position="'dropend'"
              :ddlList="ddlLists"
              :title="ddlTitle"
              :closeOn="ddlClose"
              @onSelect="onSelect"
            >
              <template v-if="isCombined" #body="{ list }">
                <div
                  :id="'subMenuBtn'"
                  :class="['dropdown-menu p-4', subMenuClass]"
                >
                  <DdlComponent
                    v-for="y in list"
                    :key="y.key"
                    :btnClass="'btn btn-light dropdown-toggle'"
                    :ddlList="y.children"
                    :title="y.label"
                    :closeOn="ddlClose"
                    @onSelect="onSelect"
                  >
                  </DdlComponent>
                  <button type="submit" @click="onSet()" :class="['btn btn-text-light', btnColor]">
                  Set
                </button>
                </div>
              </template>
            </DdlComponent>
          </template>
        </DdlComponent>
      </template>
    </DdlComponent>
  </div>
</template>


<script>
import { defineAsyncComponent, ref } from "vue";

export default {
  name: "DropdownList",
  components: {
    DdlComponent: defineAsyncComponent(() =>
      import("@/components/DdlComponent.vue")
    ),
  },
  props: {
    isList: {
      type: Boolean,
      default: true,
    },
    btnClass: {
      type: String,
    },
    ddlClose: {
      type: String,
      default: "inside",
    },
    btnTitle: {
      type: String,
      default: null,
    },
    ulClass: {
      type: String,
      default: "",
    },
    subMenuClass: {
      type: String,
      default: "setDateDDl",
    },
    ddlList: {
      type: Array,
    },
    btnColor: {
      type: String,
    },
  },
  setup(props) {
    const cardTitle = ref(props.btnTitle)
    const dateObj = {}

    function onSet(){
      let msg = dateObj.msg;
      msg = msg.replace("#DATE", dateObj.month + "'" + dateObj.year)
      cardTitle.value = msg
    }

    function onSelect(key){
      // dateObj[key] = label
      console.log(key)
    }
    return {
      onSet,
      onSelect
    };
  },
};
</script>