<template>
<div :class="['dropdown', position]">
  <button :class="btnClass" type="button" :id="title + 'ddl'" data-bs-toggle="dropdown" :data-bs-auto-close="closeOn" aria-expanded="false">
    {{ buttonTitle }}
  </button>

  <slot name="body" :list="ddlList">
    <ul class="dropdown-menu" :aria-labelledby="title + 'ddl'">
        <li v-for="item in ddlList" :key="item.key"> 
          <template v-if="item.hasSubMenu">
            <slot name="content" :ddlTitle="item.label" :ddlLists="item.children.data" :isCombined="item.children.isCombined">
            </slot>
          </template>

          <template v-else>
              <a @click="changeTitle(item)" class="dropdown-item cursor-pointer">{{ item.label }}</a>
          </template>
        </li>
    </ul>
  </slot>
</div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "DdlComponent",
  props: {
    position: {
        type: String,
        default: ""
    },
    ddlList: {
        type: Array,
    },
    btnClass: {
        type: String,
        default: ""
    },
    title: {
        type: String,
        default: ""
    },
    closeOn: {
        type: String,
        default: "inside"
    }
    },
    emits: ["onSelect"],
    setup(props, { emit }){
      const buttonTitle = ref(props.title);
      
      function changeTitle(item) {
        buttonTitle.value = item.msg;
        onOptionClick(item)
      }

      function onOptionClick(item){
        emit("onSelect", item)
      }
      return {
        buttonTitle,
        changeTitle,
      }
    }
};
</script>