<script>
  import { onMount, setContext } from "svelte";

  export let L;

  let mapContainer;
  let map;

  setContext("leafletMapInstance", {
    getMap: () => map,
    getLeaflet: () => L,
  });

  onMount(() => {
    if (L == null) {
      throw new Error("No Leaflet instance was provided.");
    }

    map = L.map(mapContainer, {
      center: [0, 0],
      zoom: 0,
    });
    L.tileLayer("https://a.tile.openstreetmap.org/{z}/{x}/{y}.png ", {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      maxZoom: 18,
    }).addTo(map);
  });
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" />
</svelte:head>

<div class="w-full h-full" bind:this={mapContainer}>
  {#if map != null}
    <slot />
  {/if}
</div>
