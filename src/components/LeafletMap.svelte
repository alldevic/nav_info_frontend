<script>
  import { onMount, setContext, getContext } from "svelte";

  const L = getContext("leafletInstance").getLeaflet();
  let mapContainer;
  let map;

  setContext("leafletMapInstance", {
    getMap: () => map,
  });

  onMount(() => {
    if (L == null) {
      throw new Error("No Leaflet instance was provided.");
    }

    map = L.map(mapContainer, {
      center: [0, 0],
      zoom: 0,
    });
    L.tileLayer("https://a.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      maxZoom: 18,
    }).addTo(map);
  });
</script>

<div class="w-full h-full" bind:this={mapContainer}>
  {#if map != null}
    <slot />
  {/if}
</div>
