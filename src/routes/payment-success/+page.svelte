<script>
export let data

</script>

<body class="bg-bright_bg">
    <div class="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 min-h-screen font-serif text-dark_text">
        <img src="/images/stsw_transparent-dark.png" alt="stsw" class="flex mx-auto h-40">
        <div class="flex flex-col justify-center mx-auto gap-3">
            <h3 class="flex justify-center mb-3 text-2xl">Payment success!</h3>
            <p class="mb-3 text-lg">We'll email you soon at {data['user']['email']} with the details!</p>
            <a href="/app"><p class="mb-3 text-lg underline">get back to swipin'</p></a>
        </div>
    </div>
</body>