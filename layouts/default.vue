<template>
    <div id="root" class="relative grid overflow-hidden min-h-[100dvh] grid-rows-[1fr_auto]">
        <Header />

        <main class="relative">
            <slot />
        </main>

        <Footer />
    </div>
</template>


<style>
:root {
    font-family: Poppins;
}
</style>