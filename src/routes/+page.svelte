<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<div class="hero bg-base-100 h-full">
  <div class="hero-content text-center">
    <div class="max-w-lg">
      <h1 class="text-5xl font-bold">
        Share links with ease.
      </h1>
      <p class="py-6 max-w-md mx-auto">
        An open source and minimalistic link sharing app.
        Built with SvelteKit, Prisma, Lucia, and Tailwind CSS.
      </p>
      {#if data.user}
        <a href="/profile" class="btn btn-primary">Profile</a>
      {:else}
        <a href="/login" class="btn btn-primary">Get Started</a>
      {/if}
    </div>
  </div>
</div>
