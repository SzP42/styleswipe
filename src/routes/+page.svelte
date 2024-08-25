<script>
	import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import "../app.css"
    export let data
    const { supabase } = data
    onMount( async () => {
        const { data, error } = await supabase.auth.getSession()
        if (data['session']) {goto('/app')}
    })
</script>

<nav class="navbar pt-5 z-50 top-0 border-b-2 border-black items-center sticky navbar-dark bg-[#dcbaa4]" id="navbar"> <!--Navigation Bar-->
    <div class="">
        <div class="flex items-center justify-between">
            <button class="navbar-btn pl-6" onclick="toggleVisibility()" data-toggle="collapse" data-target="#navbar-row" aria-expanded="false" aria-label="Toggle navigation">
                <svg class="block h-10 w-10 fill-current" viewBox="2 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Mobile menu</title>
                    <path d="M0 4h20v1H0V4zm0 6h20v1H0v-1zm0 6h20v1H0v-1z"></path>
                </svg>
            </button>
            <div class="flex-grow flex justify-center">
                <a href="/">
                    <img src="images/stsw_transparent-dark.png" alt="Style Swipe" class="mb-4 w-64 h-16 object-cover object-center border-4 rounded-lg border-dark_text">
                </a>
            </div>
            <div class="w-12"></div> <!-- This empty div balances the layout -->
        </div>
        
        <div class="navbar-row hidden pr-6 pl-6" id="navbar-row">
            <ul class="navbar-col">
                <li>
                    
                    
                <span class="block h-1 rounded-full bg-transparent"></span><a class="nav-link" href="/">Home</a>
                    <span class="block h-1 rounded-full bg-transparent"></span>
                </li>
                <li>
                    
                <span class="block h-1 rounded-full bg-transparent"></span><a class="nav-link" href="#">About us</a>
                    <span class="block h-1 rounded-full bg-transparent"></span>
                </li>
                <li>
                    
                <span class="block h-1 rounded-full bg-transparent"></span><a class="nav-link" href="#">Founders</a>
                    <span class="block h-1 rounded-full bg-transparent"></span>
                </li>
                <li>
                    
                <span class="block h-1 rounded-full bg-transparent"></span><a class="nav-link" href="#">Contact us</a>
                    <span class="block h-1 rounded-full bg-transparent"></span>
                </li>
                <span class="block h-3 rounded-full bg-transparent"></span>
                <li>
                    <a class="btn text-dark_text btn-outline  btn-lg font-medium capitalize border-2 border-dark_text rounded-lg p-1 hover:text-bright_text hover:bg-dark_bg text-lg" href="/login">Get Started</a>
                </li>
                <span class="block h-3 rounded-full "></span>
            </ul>
        </div>
        <script>
            function toggleVisibility() {
              var textElement = document.getElementById("navbar-row");
              textElement.classList.toggle("hidden");
            }
          </script>
    </div>
</nav>
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
<section class="pt-16 bg-bright_bg text-dark_text lg:pt-32"> <!--About us-->
    <div class="flex justify-center items-center">
        <div class="grid grid-cols-2 align-middle mx-10 text-center gap-x-6 text-dark_text md:grid-cols-3 md:gap-x-10 lg:grid-cols-3 lg:gap-x-16 gap-y-6 xl:gap-x-24 xl:mx-20">
            <div class="col">
                <h2 class="h2 text-2xl font-semibold mb-4 " >Capsule Wardrobe</h2>
                <button onclick="togglehowwework()"><p class="line-clamp-2 mb-4 text-muted border-2 border-black rounded-xl bg-bright_bg text-dark_text hover:bg-dark_bg hover:text-bright_text p-2" id="howwework">According to the definition, "a capsule wardrobe is a minimalist collection of clothes that can be put together in different ways to cover a variety of outfits and occasions"1. What we offer is the perfect capsule wardrobe tailored to your style.</p></button>
            </div>
                <script>
                    function togglehowwework() {
                      var textElement = document.getElementById("howwework");
                      textElement.classList.toggle("line-clamp-2");
                    }
                </script>

            <div class="col">
                <h2 class="h2 text-2xl font-semibold mb-4" >Numerous Outfits</h2>
                <button onclick="togglemeasurment()"><p class="line-clamp-2 mb-4 text-muted border-2 border-black rounded-xl bg-bright_bg text-dark_text hover:bg-dark_bg hover:text-bright_text p-2" id="measurment">Our goal is to create as many looks as possible with just a few clothing items. Buy fewer clothes and achieve a highly curated look through the masterful combination of those items. For example, just 7 pieces of clothing can create 16 different appearances.</p></button>
            </div>
                <script>
                    function togglemeasurment() {
                        var textElement = document.getElementById("measurment");
                        textElement.classList.toggle("line-clamp-2");
                    }
                </script>

            <div class="col">
                <h2 class="h2 text-2xl font-semibold mb-4" >Effortless</h2>
                <button onclick="togglealgorythm()"><p class="line-clamp-2 mb-4 text-muted border-2 border-black rounded-xl bg-bright_bg text-dark_text hover:bg-dark_bg hover:text-bright_text p-2" id="algorythm">Our wardrobes are curated by style advisors who focus on colors, harmony, and finding the perfect matching pieces, so you don't have to worry about putting outfits together. Simply enjoy the countless looks they create.
                </p></button>
            </div>
            
                <script>
                    function togglealgorythm() {
                        var textElement = document.getElementById("algorythm");
                        textElement.classList.toggle("line-clamp-2");
                    }
                    </script>

            
            <div class="col">
                <h2 class="h2 text-2xl font-semibold mb-4" >Interface & Algorithm</h2>
                <button onclick="togglediscountinfo()"><p class="line-clamp-2 mb-4 text-muted border-2 border-black rounded-xl bg-bright_bg text-dark_text hover:bg-dark_bg hover:text-bright_text p-2" id="discountinfo">Finding your wardrobe feels more like playing a game than a physically and mentally exhausting task. By swiping wardrobes left or right based on your preferences, our algorithm learns your style and curates the perfect wardrobe for you.</p></button>
            </div>
            
            <script>
                function togglediscountinfo() {
                    var textElement = document.getElementById("discountinfo");
                    textElement.classList.toggle("line-clamp-2");
                }
            </script>

            <div class="col">
                <h2 class="h2 text-2xl font-semibold mb-4" >Time-Saving</h2>
                <button onclick="toggleinterfaceinfo()"><p class="line-clamp-2 mb-4 text-muted border-2 border-black rounded-xl bg-bright_bg text-dark_text hover:bg-dark_bg hover:text-bright_text p-2" id="interfaceinfo">Your time is valuable to us. Save time with our pre-made outfits that cover every aspect of your wardrobe, instead of spending hours shopping and manually putting together a wardrobe in enormous online stores. Just a few clicks, and you won't have to think about what to wear.</p></button>
            </div>

            <script>
                function toggleinterfaceinfo() {
                    var textElement = document.getElementById("interfaceinfo");
                    textElement.classList.toggle("line-clamp-2");
                }
            </script>
            <div class="col">
                <h2 class="h2 text-2xl font-semibold mb-4" >Discounts</h2>
                <button onclick="togglesetinformhome()"><p class="line-clamp-2 mb-4 text-muted border-2 border-black rounded-xl bg-bright_bg text-dark_text hover:bg-dark_bg hover:text-bright_text p-2" id="setinformhome">We help you save money when you shop with us compared to regular stores. Soon, we'll introduce exclusive discounts ranging from 10% to 30% on entire wardrobes, which can include 8 to 15 pieces, offering significant savings.
                </p></button>
            </div>
                <script>
                    function togglesetinformhome() {
                        var textElement = document.getElementById("setinformhome");
                        textElement.classList.toggle("line-clamp-2");
                    }
                    </script>


        </div>
    </div>
</section>

<div class="py-16 bg-bright_bg justify-center flex text-center lg:pt-32">
    <div class="container align-middle flex justify-center text-bright_text">
        <h1 class="bg-dark_bg text-2xl lg:text-3xl w-1/3 min-h-20 rounded-xl border-4 border-black flex items-center justify-center">
            Which one is your wardrobe?
        </h1>
    </div>
</div>

<section class="pb-16 bg-bright_bg text-dark_text lg:pb-32"> <!--Pictures-->
    <div class="flex justify-center items-center">
        <div class="grid grid-cols-2 align-middle mx-10 text-center gap-x-7 text-dark_text md:grid-cols-3 md:gap-x-12 lg:grid-cols-3 lg:gap-x-20 gap-y-6 xl:gap-x-30 xl:mx-20">
            <div class="col">
                <h2 class="h2 text-2xl font-semibold mb-4 " >Old money</h2>
                <img src="images/Old_Money_Pic.png" alt="Old Money set" class="rounded-3xl border-2 border-black">
                 </div>

            <div class="col">
                <h2 class="h2 text-2xl font-semibold mb-4" >Elegant</h2>
                <img src="images/Elegant_Pic.png" alt="Elegant set" class="rounded-3xl border-2 border-black">
                 </div>
                

            <div class="col">
                <h2 class="h2 text-2xl font-semibold mb-4" >Soft boy</h2>
                <img src="images/Soft_Boy_Pic.png" alt="Soft boy set" class="rounded-3xl border-2 border-black">
                  </div>
            

            <div class="col">
                <h2 class="h2 text-2xl font-semibold mb-4" >Skater</h2>
                <img src="images/Skater_Pic.jpg" alt="Skater set" class="rounded-3xl border-2 border-black">
                   </div>
                

            <div class="col">
                <h2 class="h2 text-2xl font-semibold mb-4" >Retro</h2>
                <img src="images/Retro_Pic.jpg" alt="Retro set" class="rounded-3xl border-2 border-black">
                  </div>
            
            

            <div class="col">
                <h2 class="h2 text-2xl font-semibold mb-4" >Streetwear</h2>
                <img src="images/Streetwear_Pic.png" alt="Streetwear set" class="rounded-3xl border-2 border-black">
              </div>

            
        </div>
        
           
    </div>
    
</section>
<section class=" bg-bright_bg justify-center flex text-center pb-16 lg:pb-32"> <!--Call to action again-->
    <div class="container">
        <div class="row gap-y-12">
            <div class="text-dark_text">
                <a class="btn btn-lg btn-tertiary w-full sm:w-max text-3xl underline" href="/login"><button class="border-2 border-black rounded-xl bg-bright_bg text-dark_text hover:bg-dark_bg hover:text-bright_text px-8 py-4"> Find out! </button></a> <!--TODO Href to actual swiping page if already signed in-->
                <div class="container p-8 lg:pt-16">
                    <div class="flex justify-center items-center align-middle">
                        <div class="w-full max-w-screen-lg mx-auto px-4">
                            <div class="bg-dark_bg text-bright_text rounded-lg px-4 lg:px-8 py-1 w-full md:w-8/12 mx-auto border-double border-8 border-black">
                                <h1 class="my-8 text-bright_text text-2xl text-center">
                                Don't waste time with shopping, get the full set designed for you!
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</section>
<section class=" bg-bright_bg text-dark_text text-xl justify-center flex text-center pb-16 lg:pb-32"> <!--Certifications-->
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
                                    <img src="images/Day1.webp" alt="Day1 Capital" class="w-4/12 h-auto">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</section>


<footer class=" pt-5 lg:pt-10 bg-dark_bg text-bright_text" id="footer"> 
    <div class="container ">
        <div class="row">
            <div class="col w-6/12 ml-5">
                <h1 class="text-muted text-3xl"> Reach StyleSwipe:</h1> <!--TODO Change to logo?-->
            </div>
            <div class="col w-6/12 ml-16">  
                <div class="gap-4">
                    <div><a href="https://facebook.com"target="_blank">
                        <i class="text-2xl underline">Facebook</i>
                    </a></div>
                    <div><a href="https://twitter.com" target="_blank">
                        <i class="text-2xl fab fa-twitter underline">Twitter</i>
                    </a></div>
                    <div><a href="https://instagram.com" target="_blank">
                        <i class="text-2xl fab fa-instagram fa-3x underline">Instagram</i>
                    </a></div>
                    <div><a href="https://linkedin.com" target="_blank">
                        <i class="text-2xl fab fa-linkedin fa-3x underline">LinkedIn</i>
                    </a></div>
                </div>
            </div>
        </div>
    </div>
</footer>
