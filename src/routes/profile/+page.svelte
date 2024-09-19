<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<main class="grid place-content-center h-full">
  <div class="card bg-base-100 gap-2">
    <form action="?/updateProfile" method="POST" class="flex flex-col gap-4">
      <hgroup>
        <h2 class="text-2xl font-semibold">Profile</h2>
      </hgroup>

      <label class="input input-bordered flex items-center">
        <span class="opacity-75">
          spaze.dev/
        </span>
        <input value="{data.user.username}" type="text" class="grow" name="username" id="username" placeholder="username" required />
      </label>

      <input value="{data.user.name}" type="text" name="name" id="name" placeholder="Name" class="input input-bordered w-full max-w-xs" required />

      <button type="submit" class="btn btn-primary">Update</button>
    </form>
  </div>
</main>
