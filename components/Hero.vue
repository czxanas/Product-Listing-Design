<template>
    <section class="relative w-full min-h-[100dvh] flex items-center">
        <div class="relative z-20 flex flex-col gap-10 pl-0 md:pl-[80px] duration-300">
            <h2 class="flex flex-col text-[64px] font-[900] leading-[1.1]">
                <span>LOREM IPSUM</span>
                <span>DOLOR SIT AMET.</span>
            </h2>

            <NuxtLink to="/">
                <AtomicButton size="large" text="Read More" />
            </NuxtLink>
        </div>

        <!-- ======================================= ATOMIC - ABSOLUTE ======================================= -->
        <!-- ======================================= ATOMIC - ABSOLUTE ======================================= -->

        <!-- Atomic Wavers -->
        <div class="absolute max-w-[500px] -top-[200px] -left-[100px] -rotate-[30deg]">
            <AtomicWaver />
        </div>

        <!-- Atomic Wavers -->
        <div
            class="absolute max-w-[200px] opacity-15 top-[40%] -translate-y-1/2 left-1/2 -translate-x-1/2 -rotate-[180deg]">
            <AtomicWaver />
        </div>

        <!-- Atomic Wavers -->
        <div class="absolute max-w-[300px] opacity-15 top-[55%] left-2/3 translate-x-[30%] -rotate-[180deg]">
            <AtomicWaver />
        </div>

        <!-- Atomic Wavers -->
        <div class="absolute max-w-[300px] opacity-10 top-[55%] left-0 -translate-x-[100%] -rotate-[220deg]">
            <AtomicWaver />
        </div>

        <!-- Atomic Wavers -->
        <div
            class="absolute max-w-[500px] min-w-[450px] top-1/2 -translate-y-1/2 left-2/3 translate-x-[30%] -rotate-[130deg]">
            <AtomicWaver />
        </div>
    </section>
</template>