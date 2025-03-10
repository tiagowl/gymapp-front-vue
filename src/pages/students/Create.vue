<template>

    <Layout>
        <a-breadcrumb>
            <a-breadcrumb-item>Alunos</a-breadcrumb-item>
            <a-breadcrumb-item>Cadastrar</a-breadcrumb-item>
        </a-breadcrumb>

        <a-typography-title style="margin-top: 1.5rem;" >Cadastrar Aluno</a-typography-title>

        <a-card title="Informações do aluno" style="width: 100%;" >
            <a-space :size="50" style="display: flex; flex-wrap: wrap;" >
                <div style="display: flex; flex-direction: column;" >
                    <a-typography-paragraph style="margin-bottom: 5px;" >Nome</a-typography-paragraph>
                    <a-input style="width: 20rem;" v-model:value="value" size="large"/>
                </div>
                <div style="display: flex; flex-direction: column;" >
                    <a-typography-paragraph style="margin-bottom: 5px;" >Idade</a-typography-paragraph>
                    <a-input style="width: 20rem;" v-model:value="value" size="large"/>
                </div>
                <div style="display: flex; flex-direction: column;" >
                    <a-typography-paragraph style="margin-bottom: 5px;" >Peso</a-typography-paragraph>
                    <a-input style="width: 20rem;" v-model:value="value" size="large"/>
                </div>
                <div style="display: flex; flex-direction: column;" >
                    <a-typography-paragraph style="margin-bottom: 5px;" >Altura</a-typography-paragraph>
                    <a-input style="width: 20rem;" v-model:value="value" size="large"/>
                </div>
                <div style="display: flex; flex-direction: column;" >
                    <a-typography-paragraph style="margin-bottom: 5px;" >Objetivo</a-typography-paragraph>
                    <a-input style="width: 20rem;" v-model:value="value" size="large"/>
                </div>
                <div style="display: flex; flex-direction: column;" >
                    <a-typography-paragraph style="margin-bottom: 5px;" >Plano</a-typography-paragraph>
                    <a-select ref="select" v-model="value" size="large" style="width: 20rem;" >
                        <a-select-option value="4 meses" >4 meses</a-select-option>
                        <a-select-option value="6 meses" >6 meses</a-select-option>
                        <a-select-option value="1 ano" >1 ano</a-select-option>
                    </a-select>
                </div>
            </a-space>
        </a-card>
        <a-card style="width: 100%; margin-top: 2rem; display: flex; justify-content: flex-end;" >
            <a-button type="primary" size="large" >Cadastrar</a-button>
            <a-button type="primary" danger style="margin-left: 1rem;" size="large" >Cancelar</a-button>
        </a-card>
    </Layout>

</template>

<script setup >
import Layout from '../../components/Layout.vue';

import { ref } from "vue"

const value = ref("");

</script>

<style scoped >

</style>