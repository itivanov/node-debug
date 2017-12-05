# Node.js Debug

Debug console extension

## Installation

```
npm install node-debug --save
```

## Usage

``` js
var debug = require('node-debug');
```

### log()

Logs the message as if you called console.log but prefixes the output with the process.pid and current time

``` js
debug.log('APP', 'Starting server', port);

// [5635] [2017-12-05T13:21:07.558Z] [APP] [Starting server] [80]
```

### error()

Logs the message as if you called console.error but prefixes the output with the process.pid and current time

``` js
debug.error('APP', 'Server error', error);

// [5635] [2017-12-05T13:21:07.558Z] [APP] [Server error] [Port already in use]
```

## License
MIT
