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
    <div class="container bg-white py-2">
        <div class="row gap-y-12">
            <div class="text-dark_text">
                <h1 class="text-2xl pb-8">What is a <i>Capsule Wardrobe?</i></h1>
                <h2 class="flex justify-center pb-4">A capsule wardrobe is a minimalist collection of clothes that can be put together in different ways to cover a variety of outfits and occasions. By swiping left or right on wardrobes, our algorithm learns your preferences and curates a personalized wardrobe for you. Our aim is to maximize your outfit options with just a few versatile pieces.</h2>
                <div class="">
                    <div class="grid grid-cols-3 items-center">
                        <div class="flex justify-end pr-4"><button id="left_CTA"  class="rounded-full border-2 border-black size-8"> &lt </button></div>
                        <div class="flex justify-center"><img id="image_CTA" class="rounded-3xl shadow-black shadow-sm border-2 border-black" alt=""></div>
                        <div class="flex justify-start pl-4"><button id="right_CTA"  class="rounded-full border-2 border-black size-8"> &gt </button></div>
                        
                    </div>
                    <div class=" text-dark_text flex justify-center pt-4"><p id="how_many_CTA" class="rounded-3xl text-2xl font-semibold bg-bright_text p-2"></p></div>
                </div>
                <script>
                    let i = 0;
                  
                    const textElement = document.getElementById('how_many_CTA');
                    const imageElement = document.getElementById('image_CTA');
                    const leftButton = document.getElementById('left_CTA');
                    const rightButton = document.getElementById('right_CTA');
                  
                    function updateText() {
                      let text = '';
                  
                      switch (i) {
                        case 0:
                            number = '21';
                            imageSrc = 'images/Elegant_Pic.png';
                            break;
                        case 1:
                            number = '32';
                            imageSrc = 'images/Oldmoney_Pic.png';
                            break;
                        case 2:
                            number = '43';
                            imageSrc = 'images/Retro_Pic.png';
                            break;
                        case 3:
                            number = '54';
                            imageSrc = 'images/Athleisure_Pic.png';
                            break;
                      }
                  
                        imageElement.src = imageSrc;
                        textElement.innerHTML = `1 Capsule <br>${number} Outfits`;
                    }
                  
                    function decreaseI() {
                      i = (i - 1 + 4) % 4;
                      updateText();
                    }
                  
                    function increaseI() {
                      i = (i + 1) % 4;
                      updateText();
                    }
                  
                    leftButton.addEventListener('click', decreaseI);
                    rightButton.addEventListener('click', increaseI);
                  
                    // Initialize the text
                    updateText();
                  </script>
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
