**Example usage:**

```js
// All settings are optional
let format = require('num-format-currency')({
  suffix: ' USD',
  prefix: '$',
  decimalSeparator: '.',
  decimals: 2,
  groupSeparator: ','
});

format(123456.78910) // => $123,456.78 USD
```
