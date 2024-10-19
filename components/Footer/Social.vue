<script setup lang="ts">
// that for the link for my images
const url = useRequestURL()

const socialMedias = ref<string[]>(['telegram', 'x', 'youtube', 'facebook', 'instagram', 'tiktok'])
</script>

<template>
    <div class="col-span-3 max-lg:col-span-6 max-sm:col-span-12">
        <div class="flex flex-col gap-6 w-fit ms-auto max-lg:ms-[50%] max-sm:ms-0">
            <h4 class="text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                Follow Us</h4>

            <div class="grid grid-cols-3 gap-x-6 gap-y-4 max-md:grid-cols-2">
                <div v-for="(social, i) in socialMedias" :key="i" class="col-span-1 ">
                    <NuxtLink to="/"
                        class="bg-gradient-to-r from-gradient-start to-gradient-end text-white w-[45px] aspect-square rounded-lg flex items-center overflow-hidden justify-center">
                        <NuxtImg width="22" height="19" :src="`${url.origin}/images/socialmedia/${social}.webp`"
                            :alt="`${social} icon.`" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>