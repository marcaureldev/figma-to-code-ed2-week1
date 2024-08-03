<template>
    <section class="font-raleway">
        <div class="bg-gray-50">
            <Navbar />
        </div>

        <div class="md:flex justify-between max-w-70 mx-auto py-12 px-6">
            <div class="space-y-3 max-w-30 lg:mx-0 mx-auto">
                <h1 class="lg:text-7xl text-5xl">
                    See the NFT new world
                </h1>
                <p class="text-gray text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, di
                </p>
                <div class="flex items-center gap-3">
                    <p class="text-gray text-sm font-semibold">Discover Now</p>
                    <img src="/icons/discover_btn.svg" alt="Image pour le boutton en savoir plus" class="w-8">
                </div>
            </div>
            <div class="max-w-[30em] hidden mx-auto lg:flex gap-2">
                <div class="w-[12em]" data-aos="fade-up">
                    <img src="/images/fame.svg" alt="" class="w-[8em] float-end">
                    <img src="/images/machine.svg" alt="" class="w-[11em]">
                </div>
                <img src="/images/monkey.svg" alt="" class="w-[11em]" data-aos="fade-down">
            </div>

            <img src="/images/hero_section.svg" alt="" class="lg:hidden w-25 mx-auto lg:mx-0">

        </div>

        <div class="max-w-70 mx-auto p-8">
            <div class="space-y-4 py-5 px-6">
                <h1 class="text-3xl font-bold">Our Collections</h1>
                <div class="flex flex-wrap space-y-3 md:space-y-0 justify-between items-center overflow-x-auto ">
                    <div class="flex gap-4 items-center">
                        <div class="bg-gray-800 text-sm text-white rounded-lg px-4 py-1">
                            <p>All Categories</p>
                        </div>
                        <div class="bg-gray-50 text-sm text-black rounded-lg px-4 py-1">
                            <p>Art</p>
                        </div>
                        <div class="bg-gray-50 text-sm text-black rounded-lg px-4 py-1">
                            <p>Celebrities</p>
                        </div>
                        <div class="bg-gray-50 text-sm text-black rounded-lg px-4 py-1 hiddn md:block">
                            <p>Gaming</p>
                        </div>
                        <div class="bg-gray-50 text-sm text-black rounded-lg px-4 py-1 hiddn md:block">
                            <p>Sport</p>
                        </div>
                    </div>
                    <p>View More</p>
                </div>
            </div>

            <div
                class="grid grid-cols-2 place-items-center gap-5 lg:grid-cols-4 p-4 sm:max-w-[40em] mx-auto lg:max-w-[65em] collections">
                <CollectionsCard v-for="(collection, index) in collections" :key="index" :collection="collection" />
            </div>
        </div>

        <div class="max-w-70 mx-auto space-y-8 p-8">
            <h1 class="text-3xl font-bold">Create and Sell Now</h1>

            <!-- Afficher le carrousel uniquement sur les petits écrans -->
            <div class="block sm:hidden gap-5">
                <Carousel :value="cards" :numVisible="1" :numScroll="1"
                    class="flex justify-center p-carousel w-[300px] mx-auto">
                    <template v-slot:item="slotProps">
                        <SellCard :card="slotProps.data" />
                    </template>
                </Carousel>
            </div>


            <!-- Afficher la grille uniquement sur les écrans moyens et grands -->
            <div
                class="hidden sm:grid grid-cols-2 lg:grid-cols-4 place-items-center gap-5 p-4 sm:max-w-[40em] mx-auto lg:max-w-[65em]">
                <SellCard v-for="(card, index) in cards" :key="index" :card="card" />
            </div>
        </div>

        <div class="p-10 max-w-70 mx-auto">
            <div class="bg-profile bg-center h-20 rounded-2xl flex justify-center items-center">
                <div class="space-y-8 text-center">
                    <h1 class="lg:text-6xl md:text-5xl text-2xl text-white font-medium">Build your NFT profile</h1>
                    <p class="text-white md:text-xl">Join almost 10k NFT profiles on Digit !</p>
                    <button
                        class="bg-gray-800 hover:bg-gray-50 hover:text-black duration-500 text-white rounded-full px-4 py-1">
                        Sign up now
                    </button>
                </div>
            </div>
        </div>

        <div class="max-w-70 mx-auto p-8">
            <Footer />
        </div>
    </section>
</template>

<script>
import Carousel from 'primevue/carousel';
import SellCard from '@/components/SellCard';
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css'
export default {
    components: {
        Carousel,
        SellCard,
    },
    data() {
        return {
            label: 'All Categories',
            art: 'Art',
            celebrities: 'Celebrities',
            gaming: 'Gaming',
            sport: 'Sport',

            collections: [
                {
                    pictures: '/images/cybercump.svg',
                    title: 'CyberPunk',
                },

                {
                    pictures: '/images/durolost.svg',
                    title: 'Durolost  Boll - Upper',
                },

                {
                    pictures: '/images/space_x.svg',
                    title: 'Space X Wiper',
                },

                {
                    pictures: '/images/snoop.svg',
                    title: 'Snoop Dogg',
                },
            ],

            cards: [
                {
                    src: '/icons/wallet.svg',
                    subtitle: 'Set up your wallet',
                },

                {
                    src: '/icons/cloud_download.svg',
                    subtitle: 'Add your NFT’s',
                },

                {
                    src: '/icons/sale_tag.svg',
                    subtitle: 'Promote your NFT’s',
                },

                {
                    src: '/icons/bitcoin_ellipse.svg',
                    subtitle: 'Sell your NFT’s',
                },
            ],
        };
    },

    setup() {
        onMounted(() => {
            AOS.init();
        });
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
@media (max-width: 487px) {
    .collections {
        display: grid;
        grid-template-columns: 1fr;
    }
}
</style>