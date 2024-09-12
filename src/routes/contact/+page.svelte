<script>
    //+page.svelte

    // export let form

	import { enhance } from "$app/forms";

    let formResponse = null;
    import Navbar from '../navbar.svelte';
    import Footer from '../footer.svelte';

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
    <div class="flex justify-center">
        <div class="grid grid-cols-2 align-middle mx-10 text-center gap-x-7 text-dark_text md:gap-x-12 lg:gap-x-20 gap-y-6 xl:gap-x-30 xl:mx-20"> <!--Main grid-->
            <div class="flex justify-center">
                <div class="grid grid-cols-1 mx-auto gap-y-6 lg:w-1/2"> <!--Left info-->
                    <p class="mb-4 text-muted border-2 border-black rounded-xl mt-6 bg-dark_bg text-bright_text p-2">We offer numerous models to display your clothes on our platform, each flexible and completely free</p>
                    <p class="mb-4 text-muted border-2 border-black rounded-xl  bg-dark_bg text-bright_text p-2">StyleSwipe transfers our traffic to your website, converting it to active shoppers</p>
                    <p class="mb-4 text-muted border-2 border-black rounded-xl  bg-dark_bg text-bright_text p-2">We deliver you enormous order quantities, as a capsule wardrobe typically contains 8 to 15 pieces of clothes offered by your brand</p>
                    <p class="mb-4 text-muted border-2 border-black rounded-xl  bg-dark_bg text-bright_text p-2">Our Style advisors take over the task of the creation of capsule wardrobes from your clothes, so all you have to do is to lie back and wait for the orders to come in</p>
                    <p class="mb-4 text-muted border-2 border-black rounded-xl  bg-dark_bg text-bright_text p-2">If you want to build a more environmentally conscious image of your brand, and sell a lot of clothes at the same time, StyleSwipe is the perfect match for you</p>
                </div>
            </div>
            <div class="grid grid-cols-1 text-bright_text"> <!--Right form-->
                <div class="bg-dark_bg rounded-xl mx-auto border-2 border-black p-8">
                    <h1 class="text-center mb-8">Discuss the opportunities!</h1>
                    <form id="contactForm" method="post" use:enhance class="grid grid-col-1 gap-y-6">
                        <div>
                            <label for="firstname">First name</label>
                            <input class="text-dark_text" type="text" name="firstname" id="firstname" required placeholder="John">
                        </div>
                        <div>
                            <label for="lastname">Last name</label>
                            <input class="text-dark_text" type="text" name="lastname" id="lastname" required placeholder="Smith">
                        </div>
                        <div>
                            <label for="jobtitle">Job title</label>
                            <input class="text-dark_text" type="text" name="jobtitle" id="jobtitle">
                        </div>
                        <div>
                            <label for="email">E-mail:</label>
                            <input class="text-dark_text" type="email" name="email" id="email" placeholder="xyz@company.com" required autocomplete="email">
                        </div>
                        <div>
                            <label for="company">Company name</label>
                            <input class="text-dark_text" type="text" name="company" id="company">
                        </div>
                        <div>
                            <label for="message">Message</label>
                            <textarea class="text-dark_text" name="message" id="message" placeholder="Your message" required autocomplete="message"></textarea>
                        </div>
                        <button type="submit" id="submitButton" class="justify-center flex">
                            <p class="line-clamp-2 mb-4 text-muted border-2 border-black rounded-xl bg-bright_bg text-dark_text hover:bg-special_state_bg hover:text-dark_bg w-1/2 p-2" id="submitbut">Submit</p>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div id="alert-popup" class="fixed content-center pb-24 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full hidden">
        <div class="relative top-20 mx-auto p-5 border-2 border-dark_bg w-96 shadow-lg rounded-md bg-bright_bg">
            <div class="mt-3 text-center">
                <h3 class="text-lg leading-6 font-semibold text-gray-900">Success!</h3>
                <div class="mt-2 px-7 py-3">
                    <p class="text-sm text-dark_text">
                        We have received Your message. We will get back to You as soon as possible!
                    </p>
                </div>
                <div class="items-center px-4 py-3">
                    <button id="closeAlert" class="px-4 py-2 bg-dark_bg text-bright_text text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                        OK
                    </button>
                </div>
            </div>
        </div>
    </div>
    <script>
        function validateForm() {
            const form = document.getElementById('contactForm');
            if (!form) return false;
    
            const firstName = form.elements['firstname'].value.trim();
            const lastName = form.elements['lastname'].value.trim();
            const email = form.elements['email'].value.trim();
            const message = form.elements['message'].value.trim();
    
            if (firstName && lastName && email && message) {
                return true;
            } else {
                alert("Please fill out all required fields (First name, Last name, Email, and Message).");
                return false;
            }
        }
    
        function showAlert() {
            const alertPopup = document.getElementById('alert-popup');
            if (alertPopup) alertPopup.classList.remove('hidden');
        }
    
        function closeAlert() {
            const alertPopup = document.getElementById('alert-popup');
            if (alertPopup) alertPopup.classList.add('hidden');
        }
    
        function initializeForm() {
            const form = document.getElementById('contactForm');
            const closeAlertButton = document.getElementById('closeAlert');
    
            if (form) {
                form.addEventListener('submit', function(event) {
                    event.preventDefault();
                    if (validateForm()) {
                        showAlert();
                    }
                });
            }
    
            if (closeAlertButton) {
                closeAlertButton.addEventListener('click', closeAlert);
            }
        }
    
        // Try different initialization methods
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeForm);
        } else {
            initializeForm();
        }
    </script>
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

</body>

<Footer />
