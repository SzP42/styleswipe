<script>
    // used for the price sliders 
    let price 

</script>

<form id="initial_survey" name="initial_survey">
    <fieldset>
        <legend>Choose a style that you like</legend>
        <table class="centered-table">
            <tr>
                <td>
                    <label for="Style1">*Style1 image*</label>
                    <input type="checkbox" id="Style1" name="Style1" value={true}>
                </td>

                <td>
                    <label for="Style2">*Style2 image*</label>
                    <input type="checkbox" id="Style2" name="Style2" value={true}>
                </td>

                <td>
                    <label for="Style3">*Style3 image*</label>
                    <input type="checkbox" id="Style3" name="Style3" value={true}>
                </td>
            </tr>

            <tr>
                <td>
                    <label for="Style4">*Style4 image*</label>
                    <input type="checkbox" id="Style4" name="Style4" value={true}>
                </td>

                <td>
                    <label for="Style5">*Style5 image*</label>
                    <input type="checkbox" id="Style5" name="Style5" value={true}>
                </td>

                <td>
                    <label for="Style6">*Style6 image*</label>
                    <input type="checkbox" id="Style6" name="Style6" value={true}>
                </td>
            </tr>

            <tr>
                <td>
                    <label for="Style7">*Style7 image*</label>
                    <input type="checkbox" id="Style7" name="Style7" value={true}>
                </td>

                <td>
                    <label for="Style8">*Style8 image*</label>
                    <input type="checkbox" id="Style8" name="Style8" value={true}>
                </td>

                <td>
                    <label for="Style9">*Style9 image*</label>
                    <input type="checkbox" id="Style9" name="Style9" value={true}>
                </td>
            </tr>
        </table>
        <br>
        <div class="slidecontainer" id="slidecontainer">
            <label for="slider">How big is your budget for a set?  <sub>Max: $5000</sub></label><br>
            <input type="number" min=0 max=5000 bind:value={price}>
                <input type="range" class="slider" id="slider" min=60 max=5000 bind:value={price} name="price" ><br><br>
        </div>
        <!-- Used to check if the user has completed the form, and to redirect them away from the page if they have -->
        <input type="hidden" name="completed-form" value="true">
    </fieldset>
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