<template>

    <Layout>
        <a-breadcrumb>
            <a-breadcrumb-item>Aluno</a-breadcrumb-item>
            <a-breadcrumb-item>Fulano</a-breadcrumb-item>
        </a-breadcrumb>

        <a-typography-title style="margin-top: 1.5rem;" >Fulano</a-typography-title>

        <a-card title="Informações do aluno" style="width: 100%;" >
            <a-space :size="50" style="display: flex; flex-wrap: wrap;" >
                <div style="display: flex; flex-direction: column;" >
                    <a-typography-paragraph style="margin-bottom: 5px;" >Nome</a-typography-paragraph>
                    <a-input style="width: 20rem;" v-model:value="student.name" size="large"/>
                </div>
                <div style="display: flex; flex-direction: column;" >
                    <a-typography-paragraph style="margin-bottom: 5px;" >Idade</a-typography-paragraph>
                    <a-input style="width: 20rem;" v-model:value="student.age" size="large"/>
                </div>
                <div style="display: flex; flex-direction: column;" >
                    <a-typography-paragraph style="margin-bottom: 5px;" >Peso</a-typography-paragraph>
                    <a-input style="width: 20rem;" v-model:value="student.weight" size="large"/>
                </div>
                <div style="display: flex; flex-direction: column;" >
                    <a-typography-paragraph style="margin-bottom: 5px;" >Altura</a-typography-paragraph>
                    <a-input style="width: 20rem;" v-model:value="student.height" size="large"/>
                </div>
                <div style="display: flex; flex-direction: column;" >
                    <a-typography-paragraph style="margin-bottom: 5px;" >Objetivo</a-typography-paragraph>
                    <a-input style="width: 20rem;" v-model:value="student.objective" size="large"/>
                </div>
                <div style="display: flex; flex-direction: column;" >
                    <a-typography-paragraph style="margin-bottom: 5px;" >Plano</a-typography-paragraph>
                    <a-select ref="select" v-model:value="student.plan" size="large" style="width: 20rem;" >
                        <a-select-option value="4 meses" >4 meses</a-select-option>
                        <a-select-option value="6 meses" >6 meses</a-select-option>
                        <a-select-option value="1 ano" >1 ano</a-select-option>
                    </a-select>
                </div>
            </a-space>
        </a-card>
        <a-card style="width: 100%; margin-top: 2rem; display: flex; justify-content: flex-end; margin-bottom: 1.5rem;" >
            <a-button type="primary" size="large" >Salvar</a-button>
            <a-button type="primary" danger style="margin-left: 1rem;" size="large" >Cancelar</a-button>
        </a-card>

        <div style="width: 100%; display: flex; justify-content: flex-end;" >
            <a-button type="primary" :icon="h(PlusOutlined)" @click="showDrawer"  >Cadastrar Treino</a-button>
        </div>

        <a-config-provider :locale="ptBR">
            <a-calendar style="margin-top: 1rem; padding: 1rem;" v-model:value="value" @panelChange="onPanelChange" >
                <template #dateCellRender="{ current }">
                    <a-typography-text style="font-weight: bold; font-size: 1rem;" v-if="getListData(current) === 'Treino A'" type="secondary" >
                        {{ getListData(current) }}
                    </a-typography-text>
                    <a-typography-text style="font-weight: bold; font-size: 1rem;" v-if="getListData(current) === 'Treino B'" type="success" >
                        {{ getListData(current) }}
                    </a-typography-text>
                    <a-typography-text style="font-weight: bold; font-size: 1rem;" v-if="getListData(current) === 'Treino C'" type="warning" >
                        {{ getListData(current) }}
                    </a-typography-text>
                </template>
            </a-calendar>
        </a-config-provider>

        <a-drawer v-model:open="open" title="Cadastrar Treino" placement="right" >
            <div style="width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: space-between;" >
                <div style="width: 100%; height: auto; display: flex; flex-direction: column;" >
                    <a-typography-paragraph style="font-size: 1rem; margin-bottom: 0.5rem;" >Selecione o Dia</a-typography-paragraph>
                    <ConfigProvider :locale="localebr">
                        <a-date-picker style="width: 100%;" />
                    </ConfigProvider>
                    <a-typography-paragraph style="font-size: 1rem; margin-bottom: 0.5rem; margin-top: 1.2rem;" >Selecione o treino</a-typography-paragraph>
                    <a-select>
                        <a-select-option value="jack">Treino A</a-select-option>
                        <a-select-option value="lucy">Treino B</a-select-option>
                        <a-select-option value="disabled">Treino C</a-select-option>
                    </a-select>
                </div>
                <div style="width: 100%; display: flex; justify-content: flex-end;" >
                    <a-button type="primary" style="width: 10rem;" >Cadastrar</a-button>
                </div>
            </div>
        </a-drawer>

    </Layout>

</template>

<script setup lang="ts" >
import Layout from '../../components/Layout.vue';

import {ref, h} from "vue";

import {
    PlusOutlined 
} from '@ant-design/icons-vue';

import { Dayjs } from 'dayjs';
const value = ref<Dayjs>();
const onPanelChange = (value: Dayjs, mode: string) => {
  console.log(value, mode);
};

import dayjs from 'dayjs'
import "dayjs/locale/pt-br"
dayjs.locale('pt-br');

import ptBR from "ant-design-vue/es/locale/pt_BR";
import locale from 'ant-design-vue/es/date-picker/locale/pt_BR';

const student = ref({
    name: "Fulano",
    age: 22,
    weight: 65,
    height: 1.75,
    objective: "hipertrofia",
    plan: "6 meses"
});

const open = ref<boolean>(false);
const value1 = ref<Dayjs>();
const localebr = ref(locale);

const getListData = (value: Dayjs) => {
    let listData;

    switch(value.date()){
        case 3: 
            listData = "Treino A";
            break;
        case 4:
            listData = "Treino B"
            break;
        case 5:
            listData = "Treino C"
            break;
        case 10: 
            listData = "Treino A"
            break;
        case 12:
            listData = "Treino B"
            break;
        case 13:
            listData = "Treino C"
            break;
    }

    return listData || "";
}

const showDrawer = () => {
  open.value = true;
};


</script>