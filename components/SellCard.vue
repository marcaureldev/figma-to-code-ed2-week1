<template>
    <div class="p-5 bg-gray-50 max-w-17 rounded-xl space-y-4">
        <div class="bg-gray-800 w-12 h-12 rounded-lg flex justify-center items-center">
            <img :src="card.src" alt="Wallet Picture" class="w-6">
        </div>
        <div>
            <h1 class="font-bold text-lg">{{ card.subtitle }}</h1>
            <p class="max-w-15 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                aliquet odio mattis.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        card: Object,
    },
}
</script>

<style></style>