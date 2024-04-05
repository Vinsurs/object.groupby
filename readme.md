# object.groupby

As its name says, it is a ponyfill or polyfill of [Object.groupBy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy) ES feature.

## install

You can use any package management tool you like to download it. pnpm is recommended:
```bash
$ pnpm i object-group-bye
```

### usage

```ts
import { ObjectGroupBy } from "object-group-bye"
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];
const result = ObjectGroupBy(inventory, ({ type }) => type);
/* Result is:
{
  vegetables: [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
  ],
  fruit: [
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  meat: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/
```

This package also supports polyfill usage: 
```ts
    // import the polyfill at the top of your code
    import "object-group-bye/polyfill"
    // now you can use it directly with `object.groupBy` static method
    const result = Object.groupBy(inventory, ({ type }) => type);
    // ...
```

### license

MIT