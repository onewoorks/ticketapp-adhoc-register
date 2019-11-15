<template>
    <v-container>

        <qrcode value="Hello, World!" :options="{ width: 200 }"></qrcode>
    </v-container>
</template>

<script>
    import VueQrcode from '@chenfengyuan/vue-qrcode';
    export default {
        components: {
            "qrcode": VueQrcode
        }    
    }
</script>

<style lang="scss" scoped>

</style>