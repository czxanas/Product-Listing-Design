<script setup lang='ts'>
const productsElements = ref<string[]>(['About', 'Careers', 'Our Work', 'Contact'])
</script>


<template>
    <div class="col-span-2 max-lg:col-span-6 max-sm:col-span-12">
        <div class="flex flex-col gap-6 w-fit ms-auto max-lg:ms-0">
            <h4 class="text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                Products</h4>

            <ul class="flex flex-col gap-2">
                <li v-for="(element, i) in productsElements" :key="i"><NuxtLink to="/">{{ element }}</NuxtLink></li>
            </ul>
        </div>
    </div>
</template>