<template>
    <div>
        <v-container class='text-center' >
            <h2 v-ripple="{center:true}" 
            class='text-center'>{{ event_detail.event_info.event_name.toUpperCase()}}</h2>
            <div>{{ event_detail.event_info.date}}</div>
            <div>{{ event_detail.event_info.venue}}</div>
        </v-container>
        
    </div>
</template>

<script>
    export default {
        props: ["event_detail"]
    }
</script>

<style lang="scss" scoped>

</style>