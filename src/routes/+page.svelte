<script>
	import { goto } from "$app/navigation";
	import { supabase } from "$lib/supabaseClient.js";
	import { onMount } from "svelte";
	import "../app.css";
</script>

<nav class="navbar text-right right-10 fixed top-5 navbar-dark bg-transparent" id="navbar">
    <div class="container relative">
        <div class="pr-0 mr-0 right-0">
            <img src="images/stsw_transparent-dark.png" alt="Style Swipe" class="w-64 h-16 object-cover object-right"> <!--TODO change this to the logo, add href to home page-->
        </div>
        <button class="navbar-btn" onclick="toggleVisibility()" data-toggle="collapse" data-target="#navbar-row" aria-expanded="false" aria-label="Toggle navigation">
            <span class="block h-3 rounded-full bg-transparent"></span>
            <span class="not-sr-only underline font-normal text-lg pr-6">Open navbar menu</span>
            <span class="block h-3 rounded-full bg-transparent"></span>
        </button>
        <div class="navbar-row hidden pr-6" id="navbar-row">
            <ul class="navbar-col">
                <li>
                    
                    
                <span class="block h-1 rounded-full bg-bright-bg"></span><a class="nav-link" href="#">Home</a>
                    <span class="block h-1 rounded-full bg-bright-bg"></span>
                </li>
                <li>
                    
                <span class="block h-1 rounded-full bg-bright-bg"></span><a class="nav-link" href="#">About us</a>
                    <span class="block h-1 rounded-full bg-bright-bg"></span>
                </li>
                <li>
                    
                <span class="block h-1 rounded-full bg-bright-bg"></span><a class="nav-link" href="#">Founders</a>
                    <span class="block h-1 rounded-full bg-bright-bg"></span>
                </li>
                <li>
                    
                <span class="block h-1 rounded-full bg-bright-bg"></span><a class="nav-link" href="#">Contact us</a>
                    <span class="block h-1 rounded-full bg-bright-bg"></span>
                </li>
                <span class="block h-3 rounded-full bg-bright-bg"></span>
                <li>
                    <a class="btn text-dark-text bg-bright-bg btn-outline btn-lg font-medium capitalize border-2 border-dark-text rounded-lg p-1 hover:text-bright-text hover:bg-dark-bg text-lg" href="/login">Get Started</a>
            </li>
            <span class="block h-1 rounded-full bg-bright-bg"></span>
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
<section class="py-16 bg-bright-bg lg:py-32">
    <div class="container">
        <div class="row gap-y-12">
            <div class="ml-5 col lg:w-6/12 text-dark-text">
                <h1 class="mb-8 text-dark-text text-3xl">Find your dream outfits just by swiping!</h1>
                <p class="mb-8 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <a class="btn btn-lg btn-tertiary w-full sm:w-max text-3xl underline" href="/login">Try it out!</a> <!--TODO Href to actual swiping page if already signed in-->
            </div>
        </div>
    </div>
</section>
<section class="py-16 bg-bright-bg text-dark-text lg:py-32">
    <div class="container ml-5 ">
        <div class="row gap-y-16">
            <div class="col md:w-4/12">
                <h2 class="h2 text-2xl font-semibold mb-4" >How we work</h2>
                <p class="line-clamp-2 mb-4 text-muted"id="howwework">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div class="col md:w-4/12">
                <div class="mb-12">
                    <div class="w-90 h-14  rounded-lg rounded-bl-xl relative">
                        <div class="hwwbutholder">
                            <button id="howweworkbutton" class="w-36 h-10 border-dark-text border-2 bg-dark-bg text-bright-text absolute top-0 right-0 rounded-bl-lg rounded-tr-lg flex justify-center items-center line-clamp-2 text-right group p-0 font-medium" onclick="togglehowwework()">Read more...</button>
                            <button id="howweworkbutton2" class="w-36 h-10 border-dark-text border-2 bg-dark-bg text-bright-text absolute top-0 right-0 rounded-bl-lg rounded-tr-lg flex justify-center items-center line-clamp-2 hidden text-right group p-0 font-medium" onclick="togglehowwework()">Read less...</button>
                            <script>
                                function togglehowwework() {
                                  var textElement = document.getElementById("howwework");
                                  textElement.classList.toggle("line-clamp-2");
                                  var buttonElement = document.getElementById("howweworkbutton");
                                  buttonElement.classList.toggle("hidden");
                                  var buttonElement = document.getElementById("howweworkbutton2");
                                  buttonElement.classList.toggle("hidden");
                                }
                              </script>
                        </div>
                    </div>
                </div>
                <h2 class="h2 text-2xl font-semibold mb-4" >Measurments</h2>
                <p class="text-muted line-clamp-2 mb-4" id="measurment">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                
            
                <div class="mb-12">
                    <div class="w-90 h-14  rounded-lg rounded-bl-xl relative">
                        <div class="msrmbutholder">
                            <button id="measurmentbutton" class="w-36 h-10 border-2 border-dark-text bg-dark-bg text-bright-text absolute top-0 right-0 rounded-bl-lg rounded-tr-lg flex justify-center items-center line-clamp-2 text-right group p-0 font-medium" onclick="togglemeasurment()">Read more...</button>
                            <button id="measurmentbutton2" class="w-36 h-10 bg-dark-bg border-2 text-bright-text absolute top-0 right-0 rounded-bl-lg rounded-tr-lg border-dark-text flex justify-center items-center line-clamp-2 hidden text-right group p-0 font-medium" onclick="togglemeasurment()">Read less...</button>
                            <script>
                                function togglemeasurment() {
                                  var textElement = document.getElementById("measurment");
                                  textElement.classList.toggle("line-clamp-2");
                                  var buttonElement = document.getElementById("measurmentbutton");
                                  buttonElement.classList.toggle("hidden");
                                  var buttonElement = document.getElementById("measurmentbutton2");
                                  buttonElement.classList.toggle("hidden");
                                }
                              </script>
                        </div>
                    </div>
                </div>
                <h2 class="h2 text-2xl font-semibold mb-4" >Algorythm</h2>
                <p class="text-muted line-clamp-2 mb-4" id="algorythm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                
            
                <div class="mb-12">
                    <div class="w-90 h-14  rounded-lg rounded-bl-xl relative">
                        <div class="msrmbutholder">
                            <button id="algorythmbutton" class="w-36 h-10 border-2 border-dark-text bg-dark-bg text-bright-text absolute top-0 right-0 rounded-bl-lg rounded-tr-lg flex justify-center items-center line-clamp-2 text-right group p-0 font-medium" onclick="togglealgorythm()">Read more...</button>
                            <button id="algorythmbutton2" class="w-36 border-dark-text h-10 border-2 bg-dark-bg text-bright-text absolute top-0 right-0 rounded-bl-lg rounded-tr-lg flex justify-center items-center line-clamp-2 hidden text-right group p-0 font-medium" onclick="togglealgorythm()">Read less...</button>
                            <script>
                                function togglealgorythm() {
                                  var textElement = document.getElementById("algorythm");
                                  textElement.classList.toggle("line-clamp-2");
                                  var buttonElement = document.getElementById("algorythmbutton");
                                  buttonElement.classList.toggle("hidden");
                                  var buttonElement = document.getElementById("algorythmbutton2");
                                  buttonElement.classList.toggle("hidden");
                                }
                              </script>
                        </div>
                    </div>
                </div>
                <h2 class="h2 text-2xl font-semibold mb-4" >Our sets</h2>
                <p class="text-muted line-clamp-2 mb-4" id="setinformhome">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                
            
                <div class="mb-12">
                    <div class="w-90 h-14  rounded-lg rounded-bl-xl relative">
                        <div class="msrmbutholder">
                            <button id="setinformhomebutton" class="w-36 h-10 bg-dark-bg border-2 text-bright-text absolute top-0 right-0 border-dark-text rounded-bl-lg rounded-tr-lg flex justify-center items-center line-clamp-2 text-right group p-0 font-medium" onclick="togglesetinformhome()">Read more...</button>
                            <button id="setinformhomebutton2" class="w-36 h-10 bg-dark-bg border-2 border-dark-text text-bright-text absolute top-0 right-0 rounded-bl-lg rounded-tr-lg flex justify-center items-center line-clamp-2 hidden text-right group p-0 font-medium" onclick="togglesetinformhome()">Read less...</button>
                            <script>
                                function togglesetinformhome() {
                                  var textElement = document.getElementById("setinformhome");
                                  textElement.classList.toggle("line-clamp-2");
                                  var buttonElement = document.getElementById("setinformhomebutton");
                                  buttonElement.classList.toggle("hidden");
                                  var buttonElement = document.getElementById("setinformhomebutton2");
                                  buttonElement.classList.toggle("hidden");
                                }
                              </script>
                        </div>
                    </div>
                </div>
                <h2 class="h2 text-2xl font-semibold mb-4" >Discounts</h2>
                <p class="text-muted line-clamp-2 mb-4" id="discountinfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                
            
                <div class="mb-12">
                    <div class="w-90 h-14 border-dark-text rounded-lg rounded-bl-xl relative">
                        <div class="msrmbutholder">
                            <button id="discountinfobutton" class="w-36 h-10 border-2 border-dark-text bg-dark-bg text-bright-text absolute top-0 right-0 rounded-bl-lg rounded-tr-lg flex justify-center items-center line-clamp-2 text-right group p-0 font-medium" onclick="togglediscountinfo()">Read more...</button>
                            <button id="discountinfobutton2" class="w-36 h-10 border-dark-text bg-dark-bg text-bright-text absolute top-0 right-0 rounded-bl-lg rounded-tr-lg border-2 flex justify-center items-center line-clamp-2 hidden text-right group p-0 font-medium" onclick="togglediscountinfo()">Read less...</button>
                            <script>
                                function togglediscountinfo() {
                                  var textElement = document.getElementById("discountinfo");
                                  textElement.classList.toggle("line-clamp-2");
                                  var buttonElement = document.getElementById("discountinfobutton");
                                  buttonElement.classList.toggle("hidden");
                                  var buttonElement = document.getElementById("discountinfobutton2");
                                  buttonElement.classList.toggle("hidden");
                                }
                              </script>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section class="py-16 bg-bright-bg text-dark-text">
    <div class="container">
        <div class="row">
            <div class="col relative">
                <h2 class="text-3xl mb-6 lg:mb-12">Check out some of our sets!</h2>
                <div class="grid grid-cols-3 gap-x-8 gap-y-8">
                    <div class="col-span-3 lg:col-span-2">
                        <div class="block relative group h-full overflow-hidden">
                            <img class="min-h-full object-cover" src="https://d1pnnwteuly8z3.cloudfront.net/images/a4f01840-cd76-49a6-9d2c-aded32ed05e1/a6926183-4c3d-46bb-9ad1-e34178b3bcf9.webp" loading="lazy" width="1063" height="649" alt="" />
                        </div>
                    </div>
                    <div class="col-span-3 lg:col-span-1 flex flex-col gap-y-8">
                        <div>
                            <div class="block relative group overflow-hidden">
                                <img class="" src="https://d1pnnwteuly8z3.cloudfront.net/images/a4f01840-cd76-49a6-9d2c-aded32ed05e1/c00b53a9-f2c3-4001-b159-a3a1620cb641.webp" loading="lazy" width="1062" height="649" alt="" />
                            </div>
                        </div>
                        <div>
                            <div class="block relative group overflow-hidden">
                                <img class="" src="https://d1pnnwteuly8z3.cloudfront.net/images/a4f01840-cd76-49a6-9d2c-aded32ed05e1/80f090de-9139-49f4-b94c-bbcbaf562dbb.webp" loading="lazy" width="1062" height="648" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end mt-2 md:mt-8">
                    <a class="btn group p-0 font-medium" href="/login"> <!--TODO Href to actual swiping page if already signed in-->
                        <span>View all projects</span>
                        <svg class="fas w-6 duration-300 ml-3 group-hover:ml-4" width="100%" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="currentcolor"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="py-16 bg-bright-bg lg:py-32">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="max-w-[36rem] mx-auto text-center mb-6 md:mb-10 lg:md-12">
                    <p class="mb-4 text-dark-text">Features</p>
                    <h2 class="h2 mb-4 text-dark-text">Design that solves problems, one product at a time</h2>
                </div>
                <div class="grid grid-cols-1 text-bright-text md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
                    <div class="bg-dark-bg p-6 md:px-12 md:py-8">
                        <img class="mb-4" src="https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/b3bfff48-7942-4103-b866-62c401cab00b.svg" width="32" height="28" alt="" />
                        <h3 class="h5 font-medium">Get everything in one place</h3>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div class="bg-dark-bg p-6 md:px-12 md:py-8">
                        <img class="mb-4" src="https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/aa566fc9-af17-4ce7-b1f6-beabfb16b6ff.svg" alt="" width="32" height="32" />
                        <h3 class="h5 font-medium">Easy sizing</h3>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div class="bg-dark-bg p-6 md:px-12 md:py-8">
                        <img class="mb-4" src="https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/9ceb8efb-9d33-4930-bddb-8e63c3d5a33e.svg" alt="" width="35" height="35" />
                        <h3 class="h5 font-medium">Steep discounts</h3>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div class="bg-dark-bg p-6 md:px-12 md:py-8">
                        <img class="mb-4" src="https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/919c7416-bcd6-4e10-bf9d-2233a9c63289.svg" alt="" width="35" height="35" />
                        <h3 class="h5 font-medium">AI Style advisor</h3>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div class="bg-dark-bg p-6 md:px-12 md:py-8">
                        <img class="mb-4" src="https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/aa566fc9-af17-4ce7-b1f6-beabfb16b6ff.svg" alt="" width="32" height="32" />
                        <h3 class="h5 font-medium">No more wasted time</h3>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div class="bg-dark-bg p-6 md:px-12 md:py-8">
                        <img class="mb-4" src="https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/9409090c-4977-435d-8a41-8edaef1a8cb4.svg" alt="" width="34" height="34" />
                        <h3 class="h5 font-medium">Ease of use</h3>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="py-16 bg-bright-bg text-lg text-dark-text lg:py-32">
    <div class="container">
        <div class="row gap-y-12">
            <div class="col md:w-4/12">
                <h2 class="h3 text-2xl mb-4">Frequently asked questions:</h2>
            </div>
            <div class="col">
                <div class="accordion">
                    <div class="accordion-item">
                        <button class="accordion-header" onclick="toggleq1()" aria-expanded="false">
                            <span class="w-8 md:mr-8 text-secondary">01</span> Kerdes1
                        </button>
                        <div id="q1" class="accordion-collapse hidden">
                            <div class="accordion-body md:ml-16">
                                <p class="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <script>
                        function toggleq1() {
                          var buttonElement = document.getElementById("q1");
                          buttonElement.classList.toggle("hidden");
                        }
                      </script>
                    <div class="accordion-item">
                        <button class="accordion-header" onclick="toggleq2()" aria-expanded="false">
                            <span class="w-8 md:mr-8 text-secondary">02</span> Kerdes2
                        </button>
                        <div id="q2" class="accordion-collapse hidden">
                            <div class="accordion-body md:ml-16">
                                <p class="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <script>
                        function toggleq2() {
                          var buttonElement = document.getElementById("q2");
                          buttonElement.classList.toggle("hidden");
                        }
                      </script>
                    <div class="accordion-item">
                        <button class="accordion-header" onclick="toggleq3()" aria-expanded="false">
                            <span class="w-8 md:mr-8 text-secondary">03</span> Kerdes3
                        </button>
                        <div class="accordion-collapse hidden"id="q3">
                            <div class="accordion-body md:ml-16">
                                <p class="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <script>
                        function toggleq3() {
                          var buttonElement = document.getElementById("q3");
                          buttonElement.classList.toggle("hidden");
                        }
                      </script>
                    <div class="accordion-item">
                        <button class="accordion-header" onclick="toggleq4()" aria-expanded="false">
                            <span class="w-8 md:mr-8 text-secondary">04</span> Kerdes4
                        </button>
                        <div class="accordion-collapse hidden" id="q4">
                            <div class="accordion-body md:ml-16">
                                <p class="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <script>
                        function toggleq4() {
                          var buttonElement = document.getElementById("q4");
                          buttonElement.classList.toggle("hidden");
                        }
                      </script>
                    <div class="accordion-item">
                        <button class="accordion-header" onclick="toggleq5()" aria-expanded="false">
                            <span class="w-8 md:mr-8 text-secondary">05</span> Kerdes4
                        </button>
                        <div class="accordion-collapse hidden" id="q5">
                            <div class="accordion-body md:ml-16">
                                <p class="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <script>
                        function toggleq5() {
                          var buttonElement = document.getElementById("q5");
                          buttonElement.classList.toggle("hidden");
                        }
                      </script>
                </div>
            </div>
        </div>
    </div>
</section>
<footer class=" pt-5 lg:pt-10 bg-dark-bg text-bright-text" id="footer">
    <div class="container ">
        <div class="row">
            <div class="col w-6/12 ml-5">
                <a class="navbar-brand mb-12" href="/"></a>
                <h1 class="text-muted text-3xl"> Reach StyleSwipe:</h1> <!--TODO Change to logo?-->
            </div>
            <div class="col w-6/12 ml-16">  
                <div class="gap-4">
                    <div><a href="https://facebook.com"target="_blank">
                        <i class="text-2xl">Facebook</i>
                    </a></div>
                    <div><a href="https://twitter.com" target="_blank">
                        <i class="text-2xl fab fa-twitter">Twitter</i>
                    </a></div>
                    <div><a href="https://instagram.com" target="_blank">
                        <i class="text-2xl fab fa-instagram fa-3x">Instagram</i>
                    </a></div>
                    <div><a href="https://linkedin.com" target="_blank">
                        <i class="text-2xl fab fa-linkedin fa-3x">LinkedIn</i>
                    </a></div>
                </div>
            </div>
        </div>
    </div>
</footer>
