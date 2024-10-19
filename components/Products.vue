<script setup lang='ts'>
// const { data: products } = await useFetch(`/api/products`) // This is the normal case, when we fetch and get all products (easy case to manage)

// Some basic variables
const products = ref([])   // Holds the loaded products
const loadedCount = ref(6) // For example, here i want only 6 products to show them
const allProducts = ref([]) // Here, is where the first products are stocked

// Products fetched - Function is ready to use
const fetchProducts = async () => {
    const { data } = await useFetch(`/api/products`)
    allProducts.value = data.value[0] // Save all products in memory
    products.value = allProducts.value.slice(0, loadedCount.value) // Load initial 6 products
}

// Products fetched
await fetchProducts()

// Show more products after clicking the load more button, that's good for user experience UX
const loadMore = () => {
    loadedCount.value += 6 // Increase the count of loaded products by 6
    products.value = allProducts.value.slice(0, loadedCount.value) // Update products to show the new slice
}
</script>


<template>
    <section class="relative pt-[140px]">
        <div class="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-x-10 gap-y-16">
            <!-- Display products -->
            <NuxtLink v-for="(product, i) in products" :key="i" to="/"
                class="col-span-1 overflow-hidden rounded-[30px] shadow-xl shadow-black/30">
                <div class="w-full">
                    <div class="w-full aspect-[12/10] rounded-[30px] overflow-hidden shadow-xl shadow-black/30">
                        <img class="object-cover w-full h-full" :src="product.image" alt="Product image." />
                    </div>
                    <div class="flex flex-col px-4 py-6 mt-4">
                        <h4 class="uppercase font-[700] text-2xl">{{ product.product_name }}</h4>
                        <div class="uppercase font-[700] text-2xl text-gray-500">£{{ product.price }}</div>
                    </div>
                </div>
            </NuxtLink>
        </div>
        <!-- Load more button -->
        <div v-if="loadedCount < allProducts.length" class="mt-16">
            <button @click="loadMore" class="uppercase font-[700] text-2xl text-secondary">Load More</button>
        </div>
    </section>
</template>