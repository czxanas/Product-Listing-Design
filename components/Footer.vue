<template>
    <footer class="relative z-20 pb-16">
        <Container class="relative">
            <div class="absolute -top-[250px] -left-[250px] rotate-[225deg] -z-10"
                style="width: clamp(700px,40vw,1000px);">
                <AtomicWaver />
            </div>
            
            <div class="grid grid-cols-12 text-lg gap-y-14">
                <FooterDescription />

                <FooterCompany />

                <FooterProducts />

                <FooterSocial />
            </div>
        </Container>
    </footer>
</template>