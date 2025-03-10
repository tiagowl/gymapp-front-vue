<template>

    <Layout>
        <a-breadcrumb>
            <a-breadcrumb-item>Alunos</a-breadcrumb-item>
            <a-breadcrumb-item>Lista</a-breadcrumb-item>
        </a-breadcrumb>

        <a-typography-title style="margin-top: 1.5rem;" >Alunos</a-typography-title>

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
            <template #bodyCell="{ text, column, record }">
              <template v-if="column.key === 'name'" >
                <a @click="()=> router.push('/students/1')" >
                  {{ record.name }}
                </a>
              </template>
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
import { useRouter } from "vue-router"

const router = useRouter();

const dataSource = [
          {
            key: '1',
            name: 'Bruno',
            age: 32,
            height: '1.80',
            weight: 80,
            plan: "6 meses",
            objective: "Hipertrofia"
          },
          {
            key: '2',
            name: 'Bruna',
            age: 18,
            height: '1.65',
            weight: 50,
            plan: "1 ano",
            objective: "Condicionamento Físico"
          },
          {
            key: '3',
            name: 'Laura',
            age: 21,
            height: '1.60',
            weight: 50,
            plan: "1 ano",
            objective: "Condicionamento Físico"
          },
          {
            key: '4',
            name: 'Diego',
            age: 25,
            height: '1.75',
            weight: 80,
            plan: "6 meses",
            objective: "Emagrecimento"
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
            title: 'Altura',
            dataIndex: 'height',
            key: 'height',
          },
          {
            title: 'Peso',
            dataIndex: 'weight',
            key: 'weight',
          },
          {
            title: 'Plano',
            dataIndex: 'plan',
            key: 'plan',
            customFilterDropdown: true,
            onFilter: (value, record) => record.plan.toString().toLowerCase().includes(value.toLowerCase()),
            onFilterDropdownOpenChange: visible => {
            if (visible) {
              setTimeout(() => {
              searchInput.value.focus();
            }, 100);
      }
    }
          },
          {
            title: 'Objetivo',
            dataIndex: 'objective',
            key: 'objective',
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