# code splitting

## Other Branches

[without code splitting](https://github.com/yellowful/code-splitting)

[with code splitting in route level](https://github.com/yellowful/code-splitting/tree/route-level)

[with code splitting in component level](https://github.com/yellowful/code-splitting/tree/component-level)

[with code splitting by React.lazy](https://github.com/yellowful/code-splitting/tree/react-lazy)

## before code splitting in developement mode

| file name             | size   |
|-----------------------|--------|
| bundle.js             | 8.1 KB |
| vendors~main.chunk.js | 450 KB |
| main.chunk.js         | 4.7 KB |

## before code splitting in build mode

| file name                                | size     |
|------------------------------------------|----------|
| build/static/js/2.8bb83d86.chunk.js      | 41.73 KB |
| build/static/js/3.dfc694e2.chunk.js      | 1.63 KB  |
| build/static/js/runtime-main.59835288.js | 1.17 KB  |
| build/static/js/main.3704debc.chunk.js   | 820 B    |
