# get-open-apps

This is a node.js package for getting the names and paths of the apps the user is currently running.

```JavaScript
const getOpenApps = require('get-open-apps');
let appsOpen = await getOpenApps();
log(appsOpen);
```

Returns an array like this:

```JavaScript
[
  Telegram: "/Applications/Telegram.app",
  Atom: "/Applications/Atom.app",
  Terminal: "/Applications/Utilities/Terminal.app",
  Splice: "/Applications/Splice.app",
  Flux: "/Applications/Flux.app"
]
```

Doesn't work on Windows!

### Tip me!

If you appreciate this project and the work I've done so far please tip me! Any amount is accepted. Thank you :)

Patreon: <https://www.patreon.com/qashto>  
Paypal: <https://www.paypal.me/qashto/5>
