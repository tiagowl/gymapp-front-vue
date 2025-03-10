<script setup lang="ts">

import Layout from '../components/Layout.vue';

const columns = [
  {
    name: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: 'Action',
    key: 'action',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

</script>

<template>
  
  <Layout>
    <a-breadcrumb>
          <a-breadcrumb-item>Home</a-breadcrumb-item>
        </a-breadcrumb>
        <!-- <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          Bill is a cat.
        </div> -->
        <div style="display: flex; width: 100%;" >
          <a-card title="Alunos" style="width: 300px; margin-right: 1.5rem;">
            <template #extra><a href="#">more</a></template>
            <a-typography-title>100</a-typography-title>
          </a-card>
          <a-card title="Inadimplentes" style="width: 300px">
            <template #extra><a href="#">more</a></template>
            <a-typography-title>5</a-typography-title>
          </a-card>
        </div>

        <a-typography-paragraph style="margin-top: 2rem;" >Alunos</a-typography-paragraph>

        <a-table :columns="columns" style="width: 40rem; margin-top: 0.2rem;" :data-source="data">
          <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">
              <span>
                <smile-outlined />
                Name
              </span>
            </template>
          </template>

          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
              <a>
                {{ record.name }}
              </a>
            </template>
            <template v-else-if="column.key === 'tags'">
              <span>
                <a-tag
                  v-for="tag in record.tags"
                  :key="tag"
                  :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
                >
                  {{ tag.toUpperCase() }}
                </a-tag>
              </span>
            </template>
            <template v-else-if="column.key === 'action'">
              <span>
                <a>Invite 一 {{ record.name }}</a>
                <a-divider type="vertical" />
                <a>Delete</a>
                <a-divider type="vertical" />
                <a class="ant-dropdown-link">
                  More actions
                  <down-outlined />
                </a>
              </span>
            </template>
          </template>
        </a-table>
  </Layout>

</template>

<style scoped>
  .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
  position: relative
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
