# calc.js

Flexible expression parser and offers an integrated solution to work with numbers, big numbers, complex numbers, units, and matrices. Powerful and easy to use.

# Usage

```sh
npm install calc.js
```

```js
var calc = require('calc.js');

calc('12 / (2.3 + 0.7)');    // 4
calc('5.08 cm to inch');     // 2 inch
calc('sin(45 deg) ^ 2');     // 0.5
calc('9 / 3 + 2i');          // 3 + 2i
calc('det([-1, 2; 3, 1])');  // -7
```

# Credit

Thanks to [mathjs](https://github.com/josdejong/mathjs) eval.

# License

MIT License

Copyright (c) 2016 Van-Duyet Le

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.