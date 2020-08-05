// layer
export { Icon, tileLayer, marker } from 'leaflet/src/layer/index';

// map
export { map } from 'leaflet/src/map/index';

import { freeze } from 'leaflet/src/core/Util';
Object.freeze = freeze;
