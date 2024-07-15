<script setup lang="ts">
    
    // useSeoMeta({
    // title: 'My Amazing Site',
    // ogTitle: 'My Amazing Site',
    // description: 'This is my amazing site, let me tell you all about it.',
    // ogDescription: 'This is my amazing site, let me tell you all about it.',
    // ogImage: 'https://example.com/image.png',
    // twitterCard: 'summary_large_image',
    // })

    const title = ref("this is my dynamic title")
</script>



<template>
    <div>
        <Head>
            <Title>{{title}}</Title>
        </Head>
       <h1>This is the main index page</h1>
    </div>
</template>