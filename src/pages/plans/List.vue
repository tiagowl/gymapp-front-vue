<template>

    <Layout>
        <a-breadcrumb>
            <a-breadcrumb-item>Planos</a-breadcrumb-item>
            <a-breadcrumb-item>Lista</a-breadcrumb-item>
        </a-breadcrumb>

        <a-typography-title style="margin-top: 1.5rem;" >Planos</a-typography-title>

        <a-table :dataSource="dataSource" :columns="columns">
            <template #customFilterDropdown="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }">
              <div style="padding: 8px">
                <a-input
                  ref="searchInput"
                  :placeholder="`Search ${column.dataIndex}`"
                  :value="selectedKeys[0]"
                  style="width: 188px; margin-bottom: 8px; display: block"
                  @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
                  @pressEnter="handleSearch(selectedKeys, confirm, column.dataIndex)"
                />
                <a-button
                  type="primary"
                  size="small"
                  style="width: 90px; margin-right: 8px"
                  @click="handleSearch(selectedKeys, confirm, column.dataIndex)"
                >
                <template #icon><SearchOutlined /></template>
                Search
              </a-button>
              <a-button size="small" style="width: 90px" @click="handleReset(clearFilters)">
                Reset
              </a-button>
              </div>
            </template>
            <template #customFilterIcon="{ filtered }">
              <search-outlined :style="{ color: filtered ? '#108ee9' : undefined }" />
            </template>
            <template #bodyCell="{ text, column }">
              <span v-if="state.searchText && state.searchedColumn === column.dataIndex">
                <template
                  v-for="(fragment, i) in text
                    .toString()
                    .split(new RegExp(`(?<=${state.searchText})|(?=${state.searchText})`, 'i'))"
                >
                  <mark
                    v-if="fragment.toLowerCase() === state.searchText.toLowerCase()"
                    :key="i"
                    class="highlight"
                  >
                    {{ fragment }}
                  </mark>
                  <template v-else>{{ fragment }}</template>
          </template>
        </span>
          </template>
        </a-table>
    </Layout>

</template>

<script setup lang="ts" >
import { reactive, ref, watch } from 'vue';
import Layout from '../../components/Layout.vue';
import { SearchOutlined } from '@ant-design/icons-vue';

const dataSource = [
          {
            key: '1',
            name: '1 ano',
            duration: "1 ano",
            monthPrice: "497",
            cashPrice: '1950',
          },
          {
            key: '2',
            name: '3 meses',
            duration: "3 meses",
            monthPrice: "560",
            cashPrice: '2000',
          },
          {
            key: '3',
            name: '6 meses',
            duration: "6 meses",
            monthPrice: "200",
            cashPrice: '1950',
          },
    ];

        const columns = [
          {
            title: 'Nome',
            dataIndex: 'name',
            key: 'name',
            customFilterDropdown: true,
            onFilter: (value, record) => record.name.toString().toLowerCase().includes(value.toLowerCase()),
            onFilterDropdownOpenChange: visible => {
            if (visible) {
              setTimeout(() => {
              searchInput.value.focus();
            }, 100);
      }
    }
          },
          {
            title: 'Duração',
            dataIndex: 'duration',
            key: 'duration',
          },
          {
            title: 'Preço/mês',
            dataIndex: 'monthPrice',
            key: 'monthPrice',
          },
          {
            title: 'Preço/ À vista',
            dataIndex: 'cashPrice',
            key: 'cashPrice',
          },
        ];

   const name = ref<String>("");
   const plan = ref<String>("");
   const state = reactive({
    searchText: '',
    searchedColumn: '',
    });

    const searchInput = ref();

   const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      state.searchText = selectedKeys[0];
      state.searchedColumn = dataIndex;
   };

    const handleReset = clearFilters => {
      clearFilters({ confirm: true });
      state.searchText = '';
    };

</script>

<style scoped >

</style>