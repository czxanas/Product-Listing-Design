<script setup lang='ts'>
const url = useRequestURL()
</script>


<template>
    <section class="relative grid grid-cols-2 gap-y-24 gap-x-14">
        <div class="col-span-1 max-lg:col-span-2">
            <div class="flex flex-col justify-center h-full gap-9">
                <h3 class="max-w-[520px] text-4xl font-[900]">Lorem ipsum dolor sit amet.</h3>
                <p class="max-w-[643px] text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                    dolor sit amet, consectetur
                    adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit.</p>
                <AtomicButton size="small" text="Read More" />
            </div>
        </div>

        <div class="relative col-span-1 max-lg:col-span-2">
            <div class="absolute -translate-x-1/2 md:-translate-y-[20%] top-1/2 left-1/2 w-[70%] max-md:w-[75vw] duration-300">
                <AtomicWaver />
            </div>
            <div class="relative flex items-center justify-center">
                <NuxtImg width="454" height="584" class="max-h-[500px] object-contain" :src="`${url.origin}/images/Flower.webp`" alt="Flower picture." />
            </div>
        </div>
    </section>
</template>