<template>

    <Layout>
        <a-breadcrumb>
            <a-breadcrumb-item>Professores</a-breadcrumb-item>
            <a-breadcrumb-item>Lista</a-breadcrumb-item>
        </a-breadcrumb>

        <a-typography-title style="margin-top: 1.5rem;" >Professores</a-typography-title>

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
            name: 'Bruno',
            age: 32,
            contractDuration: "1 ano",
            cpf: '9999.9999.99-9',
          },
          {
            key: '2',
            name: 'Laura',
            age: 25,
            contractDuration: "2 anos",
            cpf: '9999.9999.99-9',
          },
          {
            key: '3',
            name: 'Pedro',
            age: 21,
            contractDuration: "2 anos",
            cpf: '9999.9999.99-9',
          },
          {
            key: '4',
            name: 'Gabriela',
            age: 22,
            contractDuration: "1 ano",
            cpf: '9999.9999.99-9',
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
            title: 'Idade',
            dataIndex: 'age',
            key: 'age',
          },
          {
            title: 'Duração contrato',
            dataIndex: 'contractDuration',
            key: 'contractDuration',
          },
          {
            title: 'CPF',
            dataIndex: 'cpf',
            key: 'cpf',
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