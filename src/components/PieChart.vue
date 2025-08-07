<template>
  <div class="col-md-6 col-lg-4 statistic-item">
    <div class="chart-percent-2">
      <DropdownComponent
        :options="ddlList"
        :defaultBtnTitle="'Category wise expenses of Current Month'"
        :customDdlClass="'dark-text-color fs-2 text-wrap font-weight-600'"
      />

      <!-- chart -->
      <div class="chart-wrap">
        <Pie
          :chart-options="chartOptions"
          :chart-data="chartData"
          :chart-id="chartId"
          :dataset-id-key="datasetIdKey"
          :css-classes="cssClasses"
          :styles="styles"
          :width="width"
          :height="height"
        />

        <div id="chartjs-tooltip">
          <table></table>
        </div>
        <button :class="['mt-2 btn btn-primary width-100']">
          Add Category
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Pie } from "vue-chartjs";
import { topIncomesList } from "@/utils/constants/constants";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
import { defineAsyncComponent } from "vue";

export default {
  name: "PieChart",
  props: {
    chartId: {
      type: String,
      default: "pie-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 300,
    },
    height: {
      type: Number,
      default: 280,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    ddlList: {
      type: Array,
    },
    // chartData : {},
    // chartOptions: {}
  },
  components: {
    Pie,
    DropdownComponent: defineAsyncComponent(() =>
      import("@/components/DropdownComponent.vue")
    ),
  },

  setup() {
    return {
      topIncomesList,
      chartData: {
        labels: [
          "Food",
          "Clothing",
          "Entertainment",
          "Religious Deeds",
          "Study",
          "Others",
        ],
        datasets: [
          {
            borderWidth: 1,
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(221, 122, 215, 1)",
              "rgba(201, 221, 122, 1)",
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(221, 122, 215, .2)",
              "rgba(201, 221, 122, .2)",
            ],
            data: [1000, 500, 1500, 1000, 2221, 2711],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "right",
            reverse: true,
            labels: {
              boxWidth: 15,
              boxHeight: 15,
              padding: 15,
              // usePointStyle: true,
              // pointStyle: "circle",
            },
          },
        },
      },
    };
  },
};
</script>