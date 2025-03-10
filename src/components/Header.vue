<template>
    <a-layout-header style="background: #fff; padding: 0; display: flex; align-items: center; justify-content: flex-end; padding: 16px;" >
        <a-dropdown :trigger="['click']" >
          <a-badge count="2" >
            <BellOutlined style="font-size: 1.5rem;" />
          </a-badge>
          <template #overlay>
            <a-menu style="width: 15rem; height: auto" >
              <a-list item-layout="horizontal" style="width: 100%;" :data-source="data" > 
                <template #renderItem="{ item }" >
                  <a-list-item>
                    <a-list-item-meta :description="item.description" >
                      <template #title >
                        {{item.title}}
                      </template>
                      <template #avatar >
                        <a-avatar src="https://joeschmoe.io/api/v1/random" />
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                </template>
              </a-list>
            </a-menu>
          </template>
        </a-dropdown>      
        <SettingOutlined style="font-size: 1.5rem; margin-left: 1rem;" />
    </a-layout-header>
</template>

<script setup lang="ts" >

import {
  BellOutlined,
  SettingOutlined 
} from '@ant-design/icons-vue';

const data = [
  { title: "Vencimento de pagamento", description: "Pagamento de Laura da silva venceu" },
  { title: "Vencimento de pagamento", description: "Pagamento de Laura da silva venceu" },
]

</script>