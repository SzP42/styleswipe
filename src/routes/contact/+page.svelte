<script>
    //+page.svelte

    export let form

	import { enhance } from "$app/forms";

    let formResponse = null;
    import Navbar from '../navbar.svelte';

</script>

<Navbar />
<section class="bg-bright_bg">
    <div class="w-full p-8 lg:pt-16">
        <div class="flex justify-center">
            <div class="w-full max-w-screen-lg flex justify-center">
                <div class="bg-dark_bg text-bright_text rounded-lg py-1 w-full max-w-xl border-double border-8 border-black">
                    <h1 class="my-8 text-bright_text text-2xl text-center">
                        Get a new distributional channel for your clothes and pay nothing for it!
                    </h1>
                </div>
            </div>
        </div>
    </div>

</section>
<body class="bg-bright_bg">
    <h1 class="flex justify-center text-2xl ">Why should you sell on StyleSwipe?</h1>
    <script>
    function togglesubmit() {
        var textElement = document.getElementById("alert-popup");
        textElement.classList.toggle("hidden");
    }
    </script>
    <div class="flex justify-center">
        <div class="grid grid-cols-2 align-middle mx-10 text-center gap-x-7 text-dark_text md:gap-x-12 lg:gap-x-20 gap-y-6 xl:gap-x-30 xl:mx-20"> <!--Main grid-->
            <div class="flex justify-center">
                <div class="grid grid-cols-1 gap-y-6 w-1/2 "> <!--Left info-->
                    <p class="mb-4 text-muted border-2 border-black rounded-xl mt-6 bg-dark_bg text-bright_text p-2">We offer numerous models to display your clothes on our platform, each flexible and completely free</p>
                    <p class="mb-4 text-muted border-2 border-black rounded-xl  bg-dark_bg text-bright_text p-2">StyleSwipe transfers our traffic to your website, converting it to active shoppers</p>
                    <p class="mb-4 text-muted border-2 border-black rounded-xl  bg-dark_bg text-bright_text p-2">We deliver you enormous order quantities, as a capsule wardrobe typically contains 8 to 15 pieces of clothes offered by your brand</p>
                    <p class="mb-4 text-muted border-2 border-black rounded-xl  bg-dark_bg text-bright_text p-2">Our Style advisors take over the task of the creation of capsule wardrobes from your clothes, so all you have to do is to lie back and wait for the orders to come in</p>
                    <p class="mb-4 text-muted border-2 border-black rounded-xl  bg-dark_bg text-bright_text p-2">If you want to build a more environmentally conscious image of your brand, and sell a lot of clothes at the same time, StyleSwipe is the perfect match for you</p>
                </div>
            </div>
            <div class="grid grid-cols-1"> <!--Right form-->
                <h1 class="mt-8">Discuss the opportunities!</h1>
                <form method="post" use:enhance class="grid grid-col-1 gap-y-6">
                <div>   <label for="firstname">First name</label>
                    <input type="text" name="firstname" id="firstname" required placeholder="John">
                </div>
                <div>    <label for="lastname">Last name</label>
                    <input type="text" name="lastname" id="lastname" required placeholder="Smith">
                </div>
                <div>    <label for="jobtitle">job title</label>
                    <input type="text" name="jobtitle" id="job title">
                </div>
                <div>    <label for="email">E-mail: </label>
                    <input type="email" name="email" id="email" placeholder="xyz@company.com" required autocomplete="email">
                </div>
                <div>    <label for="company">Company name</label>
                    <input type="text" name="company" id="company">
                </div>
                <div>    <label for="message">message</label>
                    <textarea name="message" id="message"></textarea>
                </div>
                <button onclick="togglesubmit()" class="justify-center flex"><p class="line-clamp-2 mb-4 text-muted border-2 border-black rounded-xl bg-bright_bg text-dark_text hover:bg-dark_bg hover:text-bright_text w-1/2 p-2" id="submitbut">Submit</button>
                
                </form>
            </div>
        </div>
    </div>
    <div id="alert-popup" class="fixed content-center pb-24 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full hidden">
        <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div class="mt-3 text-center">
                <h3 class="text-lg leading-6 font-medium text-gray-900">Alert</h3>
                <div class="mt-2 px-7 py-3">
                    <p class="text-sm text-gray-500">
                        This is your alert message.
                    </p>
                </div>
                <div class="items-center px-4 py-3">
                    <button id="closeAlert" onclick="togglesubmit()"  class="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                        OK
                    </button>
                </div>
            </div>
        </div>
    </div>


</body>
