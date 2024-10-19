<script setup lang='ts'>
// Your JavaScript/TypeScript code here 
</script>


<template>
    <!-- Your template code here -->
    <header
        class="fixed top-0 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-full py-8 max-w-[1440px]">
        <Container class="flex items-center justify-between w-full">
            <h1 class="text-3xl text-white font-[900] ">CHILLED GRAPE</h1>

            <nav class="flex items-center gap-20">
                <ul class="flex gap-10 font-medium">
                    <li>Home</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Pricing</li>
                </ul>

                <AtomicButton :size="`small`" :text="`Login`" />
            </nav>
        </Container>
    </header>
</template>


<style scoped>
/* Your styles here */
</style>