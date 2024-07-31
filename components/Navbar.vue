<template>
    <div class="max-w-70 mx-auto py-3.5 px-6 md:flex justify-between items-center">

        <div class="flex items-center">
            <img src="/icons/logo.svg" alt="" class="w-8">
        </div>

        <div @click="menuOpen" class="absolute lg:hidden right-6 top-4 cursor-pointer">
            <img src="/icons/close_btn.png" alt="" v-if="open">
            <img src="/icons/hamburger_menu.svg" alt="" v-else>
        </div>

        <ul class="lg:flex lg:items-center lg:px-0 px-3 lg:pb-0 pb-8 top-14 lg:w-auto w-full lg:static absolute bg-gray-50
            duration-500 ease-in" :class="[open ? 'left-0' : 'left-[-100%]']">
            <li class="lg:mx-4 lg:my-0 my-6" v-for="(link, index) in Links" :key="index">
                <NuxtLink to="">
                    {{ link.name }}
                </NuxtLink>
            </li>
        </ul>

        <div class="flex gap-4 items-center lg:static absolute top-[19em] duration-500 ease-in" :class="[open ? 'left-0' : 'left-[-100%]']">
            <button class="border-gray-800 border-r-2 px-5 py-1">
                Sign up
            </button>

            <button class="bg-gray-800 hover:bg-gray-50 hover:text-black duration-500 text-white rounded-full px-4 py-1">
                Connect Wallet
            </button>
        </div>


    </div>
</template>

<script>
export default {

    setup() {

        let open = ref(false)

        let Links = [
            { name: 'Home', link: '/' },
            { name: 'Top Sales', link: '/top-sales' },
            { name: 'Collections', link: '/collections' },
            { name: 'Our Blog', link: '/our-blog' },
            { name: 'About us', link: '/about-us' },
        ];

        function menuOpen() {
            open.value = !open.value
        }

        return { Links, open, menuOpen }
    }

}
</script>

<style></style>