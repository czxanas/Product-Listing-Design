<script setup lang='ts'>
// Your JavaScript/TypeScript code here 
</script>


<template>
    <!-- Your template code here -->
    <header
        class="fixed top-0 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-full py-8 max-w-[1440px]">
        <Container class="flex items-center justify-between w-full">
            <h1 class="text-3xl text-white font-[900] " style="-webkit-text-stroke-width: .75px; -webkit-text-stroke-color: #000">CHILLED GRAPE</h1>

            <nav class="items-center hidden gap-20 lg:flex">
                <ul class="flex gap-10 font-medium">
                    <li>Home</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Pricing</li>
                </ul>

                <AtomicButton :size="`small`" :text="`Login`" />
            </nav>

            <menu class="flex flex-col gap-[3.5px] lg:hidden">
                <div v-for="(n, i) in 3" :key="i" class="h-[5px] w-[30px] bg-black" />
            </menu>
        </Container>
    </header>
</template>


<style scoped>
/* Your styles here */
</style>