<main class="grid place-content-center h-full">
  <div class="card bg-base-100 gap-2">
    <form method="POST" class="flex flex-col gap-4">
      <hgroup>
        <h2 class="text-2xl font-semibold">Register</h2>
        <h3 class="opacity-75">To share links, you'll need an account.</h3>
      </hgroup>
    
      <input type="text" placeholder="Name" name="name" id="name" class="input input-bordered w-full max-w-xs" required />
    
      <label class="input input-bordered flex items-center">
        <span class="opacity-75">
          spaze.dev/
        </span>
        <input type="text" class="grow" name="username" id="username" placeholder="username" required />
      </label>
    
      <input type="password" name="password" id="password" placeholder="Password" class="input input-bordered w-full max-w-xs" required />
    
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
    <p class="opacity-75">Already have an account? <a href="/login" class="underline">Login</a></p>    
  </div>
</main>
