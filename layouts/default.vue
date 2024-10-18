<script setup lang='ts'>
// Your JavaScript/TypeScript code here 
</script>


<template>
    <!-- Your template code here -->
    <div id="root" class="relative grid overflow-hidden min-h-[100dvh] grid-rows-[1fr_auto]">
        <Header />

        <main class="relative">
            <slot />
        </main>

        <Footer />
    </div>
</template>


<style>
/* Your styles here */
* {
    font-family: Poppins;
}
</style>