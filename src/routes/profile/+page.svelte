<script lang="ts">
	import { enhance } from "$app/forms"
  import type { PageData } from "./$types";
  export let data: PageData;

  let addModalOpen = false
</script>

<main class="grid h-full grid-cols-1 lg:grid-cols-2 px-10 gap-8">
  <div class="card bg-base-100 gap-2">
    <form action="?/updateProfile" method="POST" class="flex flex-col gap-4" use:enhance>
      <hgroup class="flex justify-between">
        <h2 class="text-2xl font-semibold">Profile</h2>
        <button type="submit" class="btn btn-outline btn-sm" formaction="/logout">Logout</button>
      </hgroup>

      <label class="input input-bordered flex items-center">
        <span class="opacity-75">
          spaze.dev/
        </span>
        <input value="{data.user.username}" type="text" class="grow" name="username" id="username" placeholder="username" required />
      </label>

      <input value="{data.user.name}" type="text" name="name" id="name" placeholder="Name" class="input input-bordered w-full" required />

      <button type="submit" class="btn btn-primary">Update</button>
    </form>
  </div>
  <div class="card bg-base-100 gap-2">
    <div class="flex flex-col gap-4">
      <hgroup class="flex justify-between">
        <h2 class="text-2xl font-semibold">Links</h2>
        <button on:click={() => addModalOpen = true} class="btn btn-outline btn-sm">Add Link</button>
      </hgroup>

      {#if data.user.links && data.user.links.length > 0}
        {#each data.user.links as link}
          <div class="card w-full card-compact bg-base-200 px-4 py-2 border flex justify-between items-center flex-row">
            <div>
              <span class="font-semibold">{link.title}</span>
              {#if link.description}
                <p class="card-actions justify-end">
                  <span class="text-sm">{link.description}</span>
                </p>
              {/if}
            </div>
            <form action="?/deleteLink" method="POST" use:enhance>
              <!-- svelte-ignore a11y_consider_explicit_label -->
              <button type="submit" class="btn btn-sm btn-circle btn-ghost">
                <iconify-icon icon="fa-trash" class="text-sm"></iconify-icon>
                <input type="hidden" name="id" id="id" value={link.id} />
              </button>
            </form>
          </div>
        {/each}
      {:else}
          <p class="opacity-75">No links yet.</p>
      {/if}
    </div>
  </div>
</main>

<dialog class="modal" class:modal-open={addModalOpen}>
  <div class="modal-box">
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button on:click={() => addModalOpen = false} class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
      <iconify-icon icon="fa-close" class="text-sm"></iconify-icon>
    </button>
    <h3 class="text-lg font-bold">Add Link</h3>
    <p class="py-2">
      Add a link to share with the world.
    </p>
    <div class="modal-action">
      <form action="?/addLink" method="POST" class="gap-4 flex flex-col w-full" use:enhance>
        <input type="text" name="url" id="url" placeholder="URL" class="input input-bordered w-full" required />
        <input type="text" name="title" id="title" placeholder="Title" class="input input-bordered w-full" required />
        <input type="text" name="description" id="description" placeholder="Description" class="input input-bordered w-full" />
        <button type="submit" class="btn btn-primary w-full" on:click={() => addModalOpen = false}>Add</button>
      </form>
    </div>
  </div>
</dialog>
