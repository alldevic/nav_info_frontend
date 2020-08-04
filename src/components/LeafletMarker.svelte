<script>
  import { getContext } from "svelte";

  export let lat = 0;
  export let lng = 0;

  const map = getContext("leafletMapInstance").getMap();
  const L = getContext("leafletInstance").getLeaflet();

  L.marker([lat, lng]).addTo(map);
</script>
