<script setup lang="ts">
    useHead({
        title: "Profile Page", 
    })
    const {sayHello} = useUtils() ; 
    sayHello() ; 
</script>

<template>
    <div class="container py-3 mx-auto Main">
        <!-- <h1>Hello Nuxt 3</h1> -->
        <!-- <img src="/slide2.png" alt=""> -->
        <h1 class="text-teal-500">ProfilePage</h1>
    </div>
</template>