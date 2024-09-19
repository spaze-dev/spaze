<script lang="ts">
	import '../app.css'
	import 'iconify-icon'
	
	import type { PageData } from './$types';
	import Header from '$lib/components/header.svelte'
	import Footer from '$lib/components/footer.svelte'
	export let data: PageData
</script>

<div class="layout max-w-6xl">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.layout {
		display: grid;
		height: 100vh;
		grid-template-rows: auto 1fr auto;
	}
</style>
