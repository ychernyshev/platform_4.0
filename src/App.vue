<template>
    <div class="container">
        <TopNav/>
        <router-view/>
    </div>
</template>

<script>
import TopNav from '@/components/inc/_TopNav.vue'

export default {
    components: {
        TopNav,
    }
}
</script>

<style>

</style>
