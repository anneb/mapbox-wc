# Mapbox-WC

Mapbox-WC is a webcomponent that encapsulates mapbox-gl. Map configurations are defined in json. Helper components extend the standard features of mapbox-gl. The helper components add such features as a legend, a layer manager, drawing tools, file import and export, map configuration, etc.

## Develop

### Prerequisites
* git
* node with npm  
* polymer-cli `(npm install -g polymer-cli)`

### Get source and dependencies
```
# get source from github
git clone [this_repository]
cd this_repository
# add dependencies
npm install
```

### Add API keys
copy `src/keys.js.example` to `src/keys.js`  
and optionally update `src/keys.js` with your keys in order to use services that require such API keys


### Local run and develop
```
polymer serve
```
Browse to http://localhost:8081 (or another port)

## Build for static http server
If the application should run on http://your-server/your-path for ES5 compatible browsers, use:

```
polymer build --name es5-bundled --base-path your-path
```
The resulting static web files are generated under `build/es5-bundled/`


## Map configuration
[mapconfig.md](./mapconfig.md) documents how to configure maps in using json

