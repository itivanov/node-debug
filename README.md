# Node.js Debug

Debug console extension with the process.pid and current time prefix

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

MIT License

Copyright (c) 2017 Ivan Ivanov <itanev@gmail.com> (https://github.com/itivanov)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
