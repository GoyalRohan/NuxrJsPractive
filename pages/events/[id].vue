<script setup>
// import { useNuxtApp } from 'nuxt/app';

    const nuxt = useNuxtApp() ; 
    console.log(nuxt) ; 

</script>


<template>
    <div>
        Event id is : {{ $route.params.id }}
    </div>

</template>