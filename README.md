# egg
egg package, replaces all words with egg


```js
const egg = require('egg-convertor')
console.log(egg({ text: 'hello', emoji: false })) //OUTPUT; 'egg egg egg eeg egg'

console.log(egg({ text: 'hello', emoji: true })) //OUTPUT; '🥚🥚🥚🥚🥚'
```
