<script setup lang='ts'>
// Your JavaScript/TypeScript code here 
</script>


<template>
    <!-- Your template code here -->
    <footer class="relative pb-20">
        <Container class="relative">
            <div class="absolute -top-[250px] -left-[250px] rotate-[225deg] -z-10"
                style="width: clamp(700px,40vw,1000px);">
                <AtomicWaver />
            </div>
            
            <div class="grid grid-cols-12 gap-y-14">
                <div ref="footerTitle" class="relative col-span-5 max-lg:mb-52 max-lg:col-span-6 max-sm:col-span-12">
                    <div class="flex flex-col gap-6 text-white">
                        <h3 class="text-3xl font-semibold">CHILLED GRAPE</h3>

                        <p class="w-full max-w-[300px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div class="col-span-2 max-lg:col-span-6 max-sm:col-span-12">
                    <div class="flex flex-col gap-6 w-fit ms-auto max-lg:ms-[50%] max-sm:ms-0">
                        <h4 class="text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                            Company</h4>

                        <ul class="flex flex-col gap-2">
                            <li>About</li>
                            <li>Careers</li>
                            <li>Our Work</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>

                <div class="col-span-2 max-lg:col-span-6 max-sm:col-span-12">
                    <div class="flex flex-col gap-6 w-fit ms-auto max-lg:ms-0">
                        <h4 class="text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                            Products</h4>

                        <ul class="flex flex-col gap-2">
                            <li>About</li>
                            <li>Careers</li>
                            <li>Our Work</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>

                <div class="col-span-3 max-lg:col-span-6 max-sm:col-span-12">
                    <div class="flex flex-col gap-6 w-fit ms-auto max-lg:ms-[50%] max-sm:ms-0">
                        <h4 class="text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                            Follow Us</h4>

                        <div class="grid grid-cols-3 gap-x-6 gap-y-4 max-md:grid-cols-2">
                            <div class="col-span-1 ">
                                <div
                                    class="bg-gradient-to-r from-gradient-start to-gradient-end text-white w-[45px] aspect-square rounded-lg flex items-center overflow-hidden justify-center">
                                    <NuxtImg width="22" height="19" src="/svg/telegram.svg" />
                                </div>
                            </div>
                            <div class="col-span-1 ">
                                <div
                                    class="bg-gradient-to-r from-gradient-start to-gradient-end text-white w-[45px] aspect-square rounded-lg flex items-center overflow-hidden justify-center">
                                    <NuxtImg width="22" height="19" src="/svg/telegram.svg" />
                                </div>
                            </div>
                            <div class="col-span-1 ">
                                <div
                                    class="bg-gradient-to-r from-gradient-start to-gradient-end text-white w-[45px] aspect-square rounded-lg flex items-center overflow-hidden justify-center">
                                    <NuxtImg width="22" height="19" src="/svg/telegram.svg" />
                                </div>
                            </div>
                            <div class="col-span-1 ">
                                <div
                                    class="bg-gradient-to-r from-gradient-start to-gradient-end text-white w-[45px] aspect-square rounded-lg flex items-center overflow-hidden justify-center">
                                    <NuxtImg width="22" height="19" src="/svg/telegram.svg" />
                                </div>
                            </div>
                            <div class="col-span-1 ">
                                <div
                                    class="bg-gradient-to-r from-gradient-start to-gradient-end text-white w-[45px] aspect-square rounded-lg flex items-center overflow-hidden justify-center">
                                    <NuxtImg width="22" height="19" src="/svg/telegram.svg" />
                                </div>
                            </div>
                            <div class="col-span-1 ">
                                <div
                                    class="bg-gradient-to-r from-gradient-start to-gradient-end text-white w-[45px] aspect-square rounded-lg flex items-center overflow-hidden justify-center">
                                    <NuxtImg width="22" height="19" src="/svg/telegram.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </footer>
</template>


<style scoped>
/* Your styles here */
</style>