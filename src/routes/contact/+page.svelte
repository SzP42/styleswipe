<script>
    //+page.svelte

    export let form

	import { enhance } from "$app/forms";

    let formResponse = null;

</script>

<body>
    <h1>Contact form</h1>

    <form method="post" use:enhance>
        <label for="firstname">First name</label>
        <input type="text" name="firstname" id="firstname" required placeholder="John">

        <label for="lastname">Last name</label>
        <input type="text" name="lastname" id="lastname" required placeholder="Smith">

        <label for="jobtitle">job title</label>
        <input type="text" name="jobtitle" id="job title">

        <label for="email">E-mail: </label>
        <input type="email" name="email" id="email" placeholder="xyz@company.com" required autocomplete="email">

        <label for="company">Company name</label>
        <input type="text" name="company" id="company">

        <label for="message">message</label>
        <textarea name="message" id="message"></textarea>

        <button type="submit">Submit</button>

    </form>

    <p>{form?.message || ''}</p>


</body>