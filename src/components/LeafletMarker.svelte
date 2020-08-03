<script>
  import { getContext } from "svelte";

  export let lat = 0;
  export let lng = 0;

  const map = getContext("leafletMapInstance").getMap();

  L.marker([lat, lng]).addTo(map);
</script>
