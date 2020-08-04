<script>
  import LeafletMap from "../components/LeafletMap.svelte";
  import LeafletMarker from "../components/LeafletMarker.svelte";
  import Leaflet from "../components/Leaflet.svelte";

  let markers = [
    [40, -3],
    [60, 10],
  ];

  function handle() {
    markers.push([0, 0]);
    markers = markers;
    console.log("added");
  }
</script>

<style type="text/postcss">
  h1 {
    @apply bg-black text-white;
  }
</style>

<svelte:head>
  <title>Nav Info</title>
</svelte:head>

<h1>About this site</h1>

<p>This is the 'about' page. There's not much here.</p>
<button on:click={handle}>qweqweqe</button>

<Leaflet class="w-screen h-screen">
  <LeafletMap on:update={() => console.log('Update!')}>
    {#each markers as marker}
      <LeafletMarker lat={marker[0]} lng={marker[1]} />
    {/each}
  </LeafletMap>
</Leaflet>
