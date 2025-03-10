<template>
    <a-layout-sider :style="{'padding-top': '0.0px'}" v-model:collapsed="collapsed" collapsible>
      <div class="logo" >
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item @click="()=> router.push('/')" key="1">
          <HomeOutlined />
          <span>Home</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>Alunos</span>
            </span>
          </template>
          <a-menu-item @click="()=> router.push('/students/list')" key="3">Lista</a-menu-item>
          <a-menu-item @click="()=> router.push('/students/create')" key="4">Cadastrar</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <SkinOutlined />
              <span>Professores</span>
            </span>
          </template>
          <a-menu-item @click="()=> router.push('/teachers/list')" key="6">Lista</a-menu-item>
          <a-menu-item @click="()=> router.push('/teachers/create')" key="7">Cadastrar</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <template #title>
            <span>
              <ScheduleOutlined />
              <span>Planos</span>
            </span>
          </template>
          <a-menu-item @click="()=>router.push('/plans/list')" key="8">Lista</a-menu-item>
          <a-menu-item @click="()=>router.push('/plans/create')" key="9">Cadastrar</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
</template>

<script setup lang="ts" >

import {
  UserOutlined,
  HomeOutlined,
  SkinOutlined,
  ScheduleOutlined
} from '@ant-design/icons-vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['1']);

const router = useRouter();



</script>

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