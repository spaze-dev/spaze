<script>

	import { enhance } from "$app/forms"

</script>
<main class="grid place-content-center h-full">
  <div class="card bg-base-100 gap-2">
    <form method="POST" class="flex flex-col gap-4" use:enhance>
      <hgroup>
        <h2 class="text-2xl font-semibold">Login</h2>
        <h3 class="opacity-75">Welcome back!</h3>
      </hgroup>

      <label class="input input-bordered flex items-center">
        <span class="opacity-75">
          spaze.dev/
        </span>
        <input type="text" class="grow" name="username" id="username" placeholder="username" required />
      </label>

      <input type="password" name="password" id="password" placeholder="Password" class="input input-bordered w-full max-w-xs" required />
    
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <p class="opacity-75">Don't have an account? <a href="/register" class="underline">Register</a></p>  
  </div>
</main>
