<template>
    <div class="container">
        <TopNav/>
        <router-view/>
        <FooterView />
    </div>
</template>

<script>
import TopNav from '@/components/inc/_TopNav.vue'
import FooterView from '@/components/inc/_FooterView.vue'

export default {
    components: {
        TopNav,
        FooterView,
    }
}
</script>

<style>

</style>
