<script setup lang='ts'>
useSeoMeta({
  title: 'Products Listing - Cold Banana Test',
  ogTitle: 'Products Listing - Cold Banana Test',
  description: 'Rebuild design for my future company, created with ❤️',
  ogDescription: 'Rebuild design for my future company, created with ❤️',
  twitterCard: 'summary_large_image',
})
</script>

<template>
    <div class="relative">
        <Container>
            <Hero />
        </Container>

        <div class="mb-[120px]" />
        
        <Container>
            <Description />
        </Container>
        
        <div class="mb-[160px]" />

        <Container>
            <Products />
        </Container>

        <div class="mb-[450px]" />
    </div>
</template>