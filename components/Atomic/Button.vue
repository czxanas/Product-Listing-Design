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
    <button type="button" class="button h-fit flex items-center rounded-[100px] justify-center cursor-pointer font-medium"
        :class="buttonSizes[props.size]">
        <span>{{ props.text }}</span>
    </button>
</template>


<style scoped>
/* Your styles here */
.button {
    background: linear-gradient(90deg, #73E0A9 0%, #5B68DF 100%);
    color: #fff;
}
</style>