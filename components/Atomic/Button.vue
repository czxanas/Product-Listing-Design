<script setup lang='ts'>
// Your JavaScript/TypeScript code here 
const props = defineProps(['size', 'text'])

const buttonSizes = ref<{}>({
    small: 'px-12 py-1.5',
    large: 'px-12 py-3'
})
</script>


<template>
    <!-- Your template code here -->
    <button type="button" class="button h-fit flex items-center rounded-[100px] justify-center cursor-pointer font-medium bg-gradient-to-r from-gradient-start to-gradient-end text-white"
        :class="buttonSizes[props.size]">
        <span>{{ props.text }}</span>
    </button>
</template>


<style scoped>
/* Your styles here */
</style>