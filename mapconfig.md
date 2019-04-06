# mapbox-wc configuration

## Overview
The mapbox-wc configuration is defined in [json](https://en.wikipedia.org/wiki/JSON) with 
a basic structure as follows:
```json
{
    "version": 1.0,
    "map": {
        "zoom": 1,
        "center": [0, 0],
        "pitch" : 0,
        "bearing": 0
    },
    "datacatalog" : [],
    "tools": {},
    "keys" : {
        "mapboxaccesstoken": null
    }
}
```

## datacatalog
The datacatalog contains the layers can be used in the map. Layers can be combined in into an
hierarchical tree of groups.

The basic structure of the datacatalog is:
```json
[
    {
        "type": "group",
        "metadata": {
            "title": "A group for one layer"
        },
        "subLayers": [
            {
                "type": "circle",
                "metadata": {
                    "title": "Cities",
                    "checked": true,
                },
                "source": {
                    "type": "geojson",
                    "data": "./data/cities.json"
                },
                "paint": {
                    "circle-radius": 5,
                    "circle-color": "red",
                    "circle-opacity": 0.6,
                    "circle-stroke-color": "black"
                }
            }
        ]
    }
]
```



