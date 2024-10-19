<script setup lang='ts'>
const props = defineProps(['size', 'text'])

const buttonSizes = ref<{}>({
    small: 'px-12 py-2',
    large: 'px-12 py-3'
})
</script>


<template>
    <button type="button" class="button h-fit w-fit flex items-center rounded-[100px] justify-center cursor-pointer font-medium bg-gradient-to-r from-gradient-start to-gradient-end text-white"
        :class="buttonSizes[props.size]">
        <span>{{ props.text }}</span>
    </button>
</template>