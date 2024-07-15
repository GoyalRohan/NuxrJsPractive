<script setup >
    
    // const {data : products , pending} = await useLazyFetch('/api/products') ; 
    // // console.log(data.value) ; 

    const {data: productCount , pending} = await useLazyAsyncData("products" , () => {
        $fetch("/api/products")
    }) ;

    console.log(productCount) ;

    const refresh = () => refreshNuxtData('products')
</script>



<template>
    <div>
       <h1>This is the main index page</h1>
       <br> <br>
       <p>{{ pending ? "loading" :  productCount }}</p>

       <button @click="refresh">Refresh</button>
    </div>
</template>