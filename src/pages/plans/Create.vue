<template>

    <Layout>
        <a-breadcrumb>
            <a-breadcrumb-item>Planos</a-breadcrumb-item>
            <a-breadcrumb-item>Cadastrar</a-breadcrumb-item>
        </a-breadcrumb>

        <a-typography-title style="margin-top: 1.5rem;" >Cadastrar Plano</a-typography-title>

        <a-card title="Informações do plano" style="width: 100%;" >
            <a-space :size="50" style="display: flex; flex-wrap: wrap;" >
                <div style="display: flex; flex-direction: column;" >
                    <a-typography-paragraph style="margin-bottom: 5px;" >Nome</a-typography-paragraph>
                    <a-input style="width: 20rem;" v-model:value="value" size="large"/>
                </div>
                <div style="display: flex; flex-direction: column;" >
                    <a-typography-paragraph style="margin-bottom: 5px;" >Duração</a-typography-paragraph>
                    <a-input style="width: 20rem;" v-model:value="value" size="large"/>
                </div>
                <div style="display: flex; flex-direction: column;" >
                    <a-typography-paragraph style="margin-bottom: 5px;" >Preço/Mês</a-typography-paragraph>
                    <a-input style="width: 20rem;" v-model:value="value" size="large"/>
                </div>
                <div style="display: flex; flex-direction: column;" >
                    <a-typography-paragraph style="margin-bottom: 5px;" >Preço/À vista</a-typography-paragraph>
                    <a-input style="width: 20rem;" v-model:value="value" size="large"/>
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