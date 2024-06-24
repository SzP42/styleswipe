<script>
	import { enhance } from "$app/forms";
	import { goto } from "$app/navigation";

    export let userId
    
    // used for the price sliders 
    let price 

    // recursive function that returns an array with numbers sequencing from start to end
    function range(start, end) {
    if (start === end) return [start];
    return [start, ...range(start + 1, end)];
    }

    const handleSubmit = () => {
    return async ({ result }) => {
      const formResponse = result.data;
      if (formResponse) {
        goto('/app')
      } else {
        alert('Something went wrong!')
      }
    };
  };

    let sizes = ["XS", "S", "M", "L", "XL", "XXL"]
    let shoesizes = range(38, 50)

</script>

<form id="initial_survey" name="initial_survey" method="post" action="?/setSurveyData" use:enhance={handleSubmit}>
    <fieldset>
        <legend>Introduce yourself</legend>
        <label for="styles">Choose 3 styles that you like</label>
        <table class="centered-table" id="styles">
            <tr>
                <td>
                    <label for="style1">*style1 image*</label>
                    <input type="checkbox" id="style1" name="style1" value={true}>
                </td>

                <td>
                    <label for="style2">*style2 image*</label>
                    <input type="checkbox" id="style2" name="style2" value={true}>
                </td>

                <td>
                    <label for="style3">*style3 image*</label>
                    <input type="checkbox" id="style3" name="style3" value={true}>
                </td>
            </tr>

            <tr>
                <td>
                    <label for="style4">*style4 image*</label>
                    <input type="checkbox" id="style4" name="style4" value={true}>
                </td>

                <td>
                    <label for="style5">*style5 image*</label>
                    <input type="checkbox" id="style5" name="style5" value={true}>
                </td>

                <td>
                    <label for="style6">*style6 image*</label>
                    <input type="checkbox" id="style6" name="style6" value={true}>
                </td>
            </tr>

            <tr>
                <td>
                    <label for="style7">*style7 image*</label>
                    <input type="checkbox" id="style7" name="style7" value={true}>
                </td>

                <td>
                    <label for="style8">*style8 image*</label>
                    <input type="checkbox" id="style8" name="style8" value={true}>
                </td>

                <td>
                    <label for="style9">*style9 image*</label>
                    <input type="checkbox" id="style9" name="style9" value={true}>
                </td>
            </tr>
        </table>
        <br>
        <div class="size-inputs">
            <label for="tshirt">What size are your t-shirts?</label>
            <select name="tshirt" id="tshirt" required>
                {#each sizes as size}
                    <option value={size}>{size}</option>
                {/each}
            </select>
            <br><br>

            <label for="sweater">What size are your sweaters?</label>
            <select name="sweater" id="sweater">
                {#each sizes as size}
                    <option value={size}>{size}</option>
                {/each}
            </select>
            <br><br>

            <label for="pants">What size are your pants?</label>
            <select name="pants" id="pants">
                {#each sizes as size}
                    <option value={size}>{size}</option>
                {/each}
            </select>
            <br><br>

            <label for="shoe">What size shoes do you wear?</label>
            <select name="shoe" id="shoe">
                {#each shoesizes as size}
                    <option value={size}>{size}</option>
                {/each}
            </select>
            <br><br>

        </div>
        <div class="slidecontainer" id="slidecontainer">
            <label for="slider">How big is your budget for a set?  <sub>Max: $5000</sub></label><br>
            <input type="number" min=0 max=5000 bind:value={price} required>
                <input type="range" class="slider" id="slider" min=60 max=5000 bind:value={price} name="price" ><br><br>
        </div>
        <br>
        <!-- Used to check if the user has completed the form, and to redirect them away from the page if they have -->
        <input type="hidden" name="completed_form" value={true}>
        <input type="hidden" name="user_id" value={userId}>
    </fieldset>
    <br>
    <button type="submit">Let's go!</button>
</form>

<style>
    .centered-table {
      margin-left: auto;
      margin-right: auto;
      width: 50%;
      }
    
      .slidecontainer {
      width: 100%; /* Width of the outside container */
    }
    
    /* The slider itself */
    .slider {
      width: 50%; /* Full-width */
      background: #d3d3d3; /* Grey background */
      outline: none; /* Remove outline */
      opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
      -webkit-transition: .2s; /* 0.2 seconds transition on hover */
      transition: opacity .2s;
    }
    
    /* Mouse-over effects */
    .slider:hover {
      opacity: 1; /* Fully shown on mouse-over */
    }
    
    /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
    .slider::-webkit-slider-thumb {
      cursor: pointer; /* Cursor on hover */
    }
    
    
    </style>