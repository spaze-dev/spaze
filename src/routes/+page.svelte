<script lang="ts">
  import SvelteSeo from "svelte-seo";
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<SvelteSeo 
  title="SPAZE"
  description="An open source and minimalistic link sharing app. Built with SvelteKit, Prisma, Lucia, and Tailwind CSS."
  canonical="https://spaze.dev"
  keywords="links, share, social, network, spaze"
  openGraph={{
    title: "SPAZE",
    description: "An open source and minimalistic link sharing app. Built with SvelteKit, Prisma, Lucia, and Tailwind CSS.",
    url: "https://spaze.dev",
    site_name: "SPAZE",
  }}
  twitter={{
    card: "summary_large_image",
    site: "@vyntrix",
    title: "SPAZE",
    description: "An open source and minimalistic link sharing app. Built with SvelteKit, Prisma, Lucia, and Tailwind CSS.",
  }}
/>

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
