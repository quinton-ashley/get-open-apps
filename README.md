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

### Please consider donating!

If you appreciate this project and the work I've done so far please donate!  Any amount is accepted.  Thank you :)

Ethereum: 0xb4355179da353f1BA4AA0BB5a7E3Ba4FdC7128ea  
Bitcoin: 1LJkyU5jdZb525sBwcx1dA2qV8kgowdcro  
Patreon: <https://www.patreon.com/qashto>  
Paypal: <https://www.paypal.me/qashto/5>
