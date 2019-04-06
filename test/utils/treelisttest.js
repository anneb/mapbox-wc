import {getCheckedLayers} from '../../src/utils/treelist';

const testTree1 = {
    "type": "group",
    "metadata": {
        "title": "Hallo!"
    }, 
    "subLayers": [
        {
            "type": "fill",
            "id": "ne_110m_admin_0_countries",
            "metadata": {
                "checked": true,
                "type": "reference",
                "title": "Natural Earth Countries"
            },
            "source": {
                "type": "geojson",
                "data": "data/countries.geojson",
                "attribution": "<a href=\"https://www.naturalearthdata.com/\" target=\"attribution\">Natural Earth</a>"
            },
            "paint": {
                "fill-color": "green",
                "fill-opacity": 0.4,
                "fill-outline-color": "#444"
            }
        }
    ]
}

const result1 = getCheckedLayers(testTree1);
console.log(result1);