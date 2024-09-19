<script lang="ts">
  import { page } from "$app/stores";
</script>

<main class="grid h-full place-content-center">
  {$page.error?.message}
</main>
