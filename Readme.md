Bufferify
=========

Bufferify is a browserify transform allowing to require text file as buffers.

This can be used to include templates (such as ejs or handlebars template files) in a bundle.

## Example

raw.txt :
```

This is raw text.

```

main.js :
```javascript
var buf = require('./raw.txt');

console.log(buf.toString('utf-8'));
```

```bash
browserify -t [ bufferify .txt .data ] main.js -o bundle.js
```

Output :
```

This is raw text.


```

## Todo

- Provide more configuration options such as regex or glob matching in addition to extentions.

