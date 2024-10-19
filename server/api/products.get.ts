export default defineEventHandler(async () => {
    const products = await $fetch(`https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products`)

    return products
})