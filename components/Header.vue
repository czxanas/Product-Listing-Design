<script setup lang='ts'>
// Navigation Links - to not repeat my code
const navLinks = ref<string[]>(['Home', 'About', 'Blog', 'Pricing'])

// Mobile menu state and dropdown meny's ref
const isMenuOpen = ref(false)
const dropdownMenu = ref(null)

// Toggle menu function
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

// use onClickOutside from vueuse to manage if the user click outside the target (in my case the list component)
onClickOutside(dropdownMenu, event => {
    if (isMenuOpen.value && dropdownMenu.value && !dropdownMenu.value.contains(event.target as Node)) isMenuOpen.value = !isMenuOpen.value
})
</script>


<template>
    <header
        class="fixed top-0 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-full py-8 max-w-[1440px]">
        <Container class="flex items-center justify-between w-full">
            <h1 class="text-3xl text-white font-[900] cursor-pointer">
                <NuxtLink to="/" style="-webkit-text-stroke-width: .75px; -webkit-text-stroke-color: #000">CHILLED GRAPE
                </NuxtLink>
            </h1>

            <nav class="items-center hidden gap-20 lg:flex">
                <ul class="flex gap-10 font-medium">
                    <li v-for="(link, i) in navLinks" :key="i">
                        <NuxtLink to="/">{{ link }}</NuxtLink>
                    </li>
                </ul>

                <NuxtLink to="/">
                    <AtomicButton :size="`small`" :text="`Login`" />
                </NuxtLink>
            </nav>

            <menu @click="toggleMenu" class="flex flex-col gap-[3.5px] lg:hidden cursor-pointer">
                <div v-for="(n, i) in 3" :key="i"
                    class="h-[5px] w-[30px] bg-gradient-to-r from-gradient-start to-gradient-end border-[0.5px] border-white" />
            </menu>
        </Container>

        <transition name="fade">
            <nav v-if="isMenuOpen" ref="dropdownMenu"
                class="fixed z-50 flex flex-col items-center justify-center bg-white top-20 right-5 rounded-[30px] px-8 py-5 shadow-xl border border-black/50 lg:hidden">
                <ul class="flex flex-col gap-6 text-lg font-medium text-black">
                    <li @click="toggleMenu" v-for="(link, i) in navLinks" :key="i">
                        <NuxtLink to="/">{{ link }}</NuxtLink>
                    </li>
                </ul>
                <NuxtLink to="/">
                    <AtomicButton :size="`small`" :text="`Login`" @click="toggleMenu" class="mt-8" />
                </NuxtLink>
            </nav>
        </transition>
    </header>
</template>


<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>