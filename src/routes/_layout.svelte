<script>
  import Nav from "../components/Nav.svelte";
  import Tailwindcss from "../Tailwindcss.svelte";

  export let segment;
</script>

<Tailwindcss />

<Nav {segment} />

<main>
  <slot />
</main>
