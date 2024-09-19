<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<main class="max-w-6xl mx-auto h-full px-10">
  <hgroup class="card bg-base-100 gap-2">
    <h1 class="text-5xl font-bold">{data.user.name}</h1>
  </hgroup>
  <div class="flex flex-col gap-4 py-10">
    {#if data.user.links && data.user.links.length > 0}
    {#each data.user.links as link}
      <a href="{link.url}" class="card w-full card-compact bg-base-200 px-4 py-2 border flex justify-between items-center flex-row" target="_blank">
        <div>
          <span class="font-semibold">{link.title}</span>
          {#if link.description}
            <p class="card-actions justify-end">
              <span class="text-sm">{link.description}</span>
            </p>
          {/if}
        </div>
      </a>
    {/each}
  {:else}
      <p class="opacity-75">No links yet.</p>
  {/if}
  </div>
</main>
