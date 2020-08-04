<script>
  import "leaflet/dist/leaflet.css";
  import marker from "leaflet/dist/images/marker-icon.png";
  import marker2x from "leaflet/dist/images/marker-icon-2x.png";
  import markerShadow from "leaflet/dist/images/marker-shadow.png";
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

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: marker2x,
      iconUrl: marker,
      shadowUrl: markerShadow,
    });

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

<div class="w-full h-full" bind:this={mapContainer}>
  {#if map != null}
    <slot />
  {/if}
</div>
