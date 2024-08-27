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
                    
                <span class="block h-1 rounded-full bg-transparent"></span><a class="nav-link" href="#">Contact us</a>
                    <span class="block h-1 rounded-full bg-transparent"></span>
                </li>
                <li>
                    
                <span class="block h-1 rounded-full bg-transparent"></span><a class="nav-link" href="contact">Become our partner</a>
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