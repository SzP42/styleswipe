<script>
	import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import "../app.css"
    export let data
    const { supabase } = data

    // onMount( async () => {
    //     const { data, error } = await supabase.auth.getSession()
    //     if (data['session']) {goto('/app')}
    // })
    
    import Navbar from './navbar.svelte';
    import Footer from './footer.svelte';
</script>

<Navbar />
<section class="py-16 bg-bright_bg justify-center flex text-center lg:py-32"> <!--Call to action-->
    <div class="container">
        <div class="row gap-y-12">
            <div class="text-dark_text">
                <h1 class="mb-8 text-dark_text text-3xl">Find your dream outfits just by swiping!</h1>
                <span class="block h-1 rounded-full bg-transparent"></span>
                <a class="btn btn-lg btn-tertiary w-full sm:w-max text-3xl underline" href="/login"><button class="border-2 border-black rounded-xl bg-bright_bg text-dark_text hover:bg-dark_bg hover:text-bright_text p-2">Find your style!</button></a> <!--TODO Href to actual swiping page if already signed in-->
            </div>
        </div>
    </div>
</section>


<div class="py-16 bg-bright_bg justify-center flex text-center lg:pt-32">
    <div class="container align-middle flex justify-center text-bright_text">
        <h1 class="bg-dark_bg text-2xl lg:text-3xl w-4/6 md:w-1/3 min-h-20 rounded-xl border-4 border-black flex items-center justify-center">
            Which one is your wardrobe?
        </h1>
    </div>
</div>

<section class="pb-16 bg-bright_bg text-dark_text lg:pb-32"> <!--Pictures-->
    <div class="flex justify-center items-center">
        <div class="grid grid-cols-2 align-middle mx-10 text-center gap-x-7 text-dark_text md:grid-cols-3 md:gap-x-12 lg:grid-cols-3 lg:gap-x-20 gap-y-6 xl:gap-x-30 xl:mx-20">
            <div class="col bg-white rounded-3xl border-2 border-dark_bg shadow-lg hover:shadow-2xl  hover:shadow-black shadow-black">
                <h2 class="h2 text-lg sm:text-2xl md:text-2xl lg:text-3xl bg-dark_bg py-3 text-white rounded-full mt-10 w-4/6 mx-auto font-semibold mb-4" >Old money</h2>
                <img src="images/Oldmoney_Pic.png" alt="Old Money set" class="rounded-3xl">
            </div>

            <div class="col bg-white rounded-3xl border-2 border-dark_bg  shadow-lg hover:shadow-2xl  hover:shadow-black shadow-black">
                <h2 class="h2 text-xl sm:text-2xl md:text-2xl lg:text-3xl bg-dark_bg py-3 text-white rounded-full mt-10 w-4/6 mx-auto font-semibold mb-4" >Elegant</h2>
                <img src="images/Elegant_Pic.png" alt="Elegant set" class="rounded-3xl">
            </div>
                

            <div class="col bg-white rounded-3xl border-2 border-dark_bg  shadow-lg hover:shadow-2xl  hover:shadow-black shadow-black">
                <h2 class="h2 text-xl sm:text-2xl md:text-2xl lg:text-3xl bg-dark_bg py-3 text-white rounded-full mt-10 w-4/6 mx-auto font-semibold mb-4" >Athleisure</h2>
                <img src="images/Athleisure_Pic.png" alt="Athleisure set" class="rounded-3xl">
            </div>
            

            <div class="col bg-white rounded-3xl border-2 border-dark_bg  shadow-lg hover:shadow-2xl  hover:shadow-black shadow-black">
                <h2 class="h2 text-xl sm:text-2xl md:text-2xl lg:text-3xl bg-dark_bg py-3 text-white rounded-full mt-10 w-4/6 mx-auto font-semibold mb-4" >Elegant</h2>
                <img src="images/Elegant_Pic.png" alt="Elegant set" class="rounded-3xl">
            </div>
                

            <div class="col bg-white rounded-3xl border-2 border-dark_bg  shadow-lg hover:shadow-2xl  hover:shadow-black shadow-black">
                <h2 class="h2 text-xl sm:text-2xl md:text-2xl lg:text-3xl bg-dark_bg py-3 text-white rounded-full mt-10 w-4/6 mx-auto font-semibold mb-4" >Retro</h2>
                <img src="images/Retro_Pic.png" alt="Retro set" class="rounded-3xl">
            </div>
            
            

            <div class="col bg-white rounded-3xl border-2 border-dark_bg  shadow-lg hover:shadow-2xl  hover:shadow-black shadow-black">
                
                <h2 class="h2 text-xl sm:text-2xl md:text-2xl lg:text-3xl bg-dark_bg py-3 text-white rounded-full mt-10 w-4/6 mx-auto font-semibold mb-4" >Streetwear</h2>
                
                <img src="images/Streetwear_Pic.png" alt="Streetwear set" class="rounded-3xl">
              </div>

            
        </div>
        
           
    </div>
    
</section>
<section class="pt-16 bg-bright_bg text-dark_text md:pt-32"> <!--About us-->
    <div class="pb-8 md:pb-16">
        <h1 class="text-dark_bg text-2xl sm:text-3xl md:text-4xl flex justify-center">OUR PASSION, YOUR STYLE</h1>
    </div>
    <div class="flex justify-center items-center">
        <div class="grid grid-cols-1 sm:grid-cols-2 align-middle mx-10 text-center gap-x-6 text-dark_text md:grid-cols-3 md:gap-x-10 lg:grid-cols-3 lg:gap-x-16 gap-y-6 xl:gap-x-24 xl:mx-20">
            <div class="col bg-white rounded-3xl border-2 border-dark_bg shadow-lg hover:shadow-2xl  hover:shadow-black shadow-black">
                <h2 class="h2 text-lg md:text-xl lg:text-2xl  bg-dark_bg py-3 text-white rounded-full mt-6 md:mt-8 w-4/6 mx-auto font-semibold mb-4" >Capsule Wardrobe</h2>
                <p class="p-2 lg:p-4 lg:text-lg" id="howwework">A capsule wardrobe is a minimalist collection of clothes that can create various outfits for different occasions.</p>
            </div>

            <div class="col bg-white rounded-3xl border-2 border-dark_bg shadow-lg hover:shadow-2xl  hover:shadow-black shadow-black">
                <h2 class="h2 text-lg md:text-xl lg:text-2xl  bg-dark_bg py-3 text-white rounded-full mt-6 md:mt-8 w-4/6 mx-auto font-semibold mb-4" >Effortless</h2>
                <p class="p-2 lg:p-4 lg:text-lg" id="algorythm">Our advisors curate wardrobes focused on color and harmony, so you don’t have to. Enjoy countless ready-made looks.</p>
            </div>

            <div class="col bg-white rounded-3xl border-2 border-dark_bg shadow-lg hover:shadow-2xl  hover:shadow-black shadow-black">
                <h2 class="h2 text-lg md:text-xl lg:text-2xl bg-dark_bg py-3 text-white rounded-full mt-6 md:mt-8 w-4/6 mx-auto font-semibold mb-4" >Numerous Outfits</h2>
                <p class="p-2 lg:p-4 lg:text-lg" id="measurment">We aim to maximize looks with just a few pieces. For example, 7 items can generate 16 unique outfits.</p>
            </div>
            
            <div class="col bg-white rounded-3xl border-2 border-dark_bg shadow-lg hover:shadow-2xl  hover:shadow-black shadow-black">
                <h2 class="h2 text-lg md:text-xl lg:text-2xl bg-dark_bg py-3 text-white rounded-full mt-6 md:mt-8 w-4/6 mx-auto font-semibold mb-4"  >Interface & Algorithm</h2>
                <p class="p-2 lg:p-4 lg:text-lg" id="discountinfo">Swipe left or right on wardrobes, and our algorithm learns your style to find your perfect match.</p>
            </div>

            <div class="col bg-white rounded-3xl border-2 border-dark_bg shadow-lg hover:shadow-2xl  hover:shadow-black shadow-black">
                <h2 class="h2 text-lg md:text-xl lg:text-2xl bg-dark_bg py-3 text-white rounded-full mt-6 md:mt-8 w-4/6 mx-auto font-semibold mb-4"  >Time-Saving</h2>
                <p class="p-2 lg:p-4 lg:text-lg" id="interfaceinfo">Save time with pre-made outfits. Just a few clicks, and your wardrobe is complete, no need to browse endlessly.</p>
            </div>

            <div class="col bg-white rounded-3xl border-2 border-dark_bg shadow-lg hover:shadow-2xl  hover:shadow-black shadow-black">
                <h2 class="h2 text-lg md:text-xl lg:text-2xl  bg-dark_bg py-3 text-white rounded-full mt-6 md:mt-8 w-4/6 mx-auto font-semibold mb-4" >Discounts</h2>
                <p class="p-2 lg:p-4 lg:text-lg" id="setinformhome">Save money with us compared to regular stores. Soon, get exclusive discounts of 10% to 30% on wardrobes with 8 to 15 pieces.</p>
            </div>


        </div>
    </div>
</section>
<section class=" bg-bright_bg text-dark_text text-xl justify-center flex text-center py-16 lg:py-32"> <!--Certifications-->
    
    <div class="container">
        <div class="row">
            <div class="text-dark_text">
                <div class="text-2xl lg:text-3xl">Certifications</div>
                <div class="container pb-8 pt-6">
                    <div class="flex">
                        <div class="w-full max-w-screen-lg mx-auto px-4">
                            <div class="bg-dark_bg text-bright_text rounded-3xl px-4 lg:px-8 py-1 w-8/12 md:w-6/12 mx-auto border-4 border-black">
                                <h1 class="pt-2 lg:pt-4 mb-8 text-bright_text text-md lg:text-2xl text-center">
                                    2nd place on Startup Challenge by
                                </h1>
                                <div class="flex justify-center space-x-20 xl:space-x-24 pb-2 lg:pb-4">
                                    <img src="images/Engame.webp" alt="Engame Akadémia" class="w-4/12 h-auto">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</section>

<Footer />
