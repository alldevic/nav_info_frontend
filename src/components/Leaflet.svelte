<script>
  import "leaflet/dist/leaflet.css";
  import marker from "leaflet/dist/images/marker-icon.png";
  import marker2x from "leaflet/dist/images/marker-icon-2x.png";
  import markerShadow from "leaflet/dist/images/marker-shadow.png";

  import { onMount, setContext } from "svelte";

  let leaflet;

  onMount(async () => {
    leaflet = await import("./Leaflet");

    delete leaflet.Icon.Default.prototype._getIconUrl;

    leaflet.Icon.Default.mergeOptions({
      iconRetinaUrl: marker2x,
      iconUrl: marker,
      shadowUrl: markerShadow,
    });
  });

  setContext("leafletInstance", {
    getLeaflet: () => leaflet,
  });
</script>

<div class={$$props.class}>
  {#if leaflet != null}
    <slot />
  {/if}
</div>
