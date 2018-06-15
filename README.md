# get-open-apps

This is a node.js package for getting the names and paths of the apps the user is currently running.

```JavaScript
const getOpenApps = require('get-open-apps');
let appsOpen = await getOpenApps();
log(appsOpen);
```

```JavaScript
[Telegram: "/Applications/Telegram.app", Atom: "/Applications/Atom.app", Terminal: "/Applications/Utilities/Terminal.app", Splice: "/Applications/Splice.app", Flux: "/Applications/Flux.app"]
```
