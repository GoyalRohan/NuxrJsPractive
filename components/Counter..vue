<script setup >

    // definePageMeta({
    //     middleware: 'auth',
    // });
    // const {$sayHello} = useNuxtApp() ; 
    // $sayHello("Rohan") ; 

    const counter = useCounter() ; 
    


</script>

<template>
    <div>
        Counter :  {{ counter }}
        <button @click="counter++">+</button>
        <button @click="counter--">-</button>
    </div>
</template>