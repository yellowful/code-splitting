# code splitting

## Other Branches

[without code splitting](https://github.com/yellowful/code-splitting)

[with code splitting in route level](https://github.com/yellowful/code-splitting/tree/route-level)

[with code splitting in component level](https://github.com/yellowful/code-splitting/tree/component-level)

[with code splitting by React.lazy](https://github.com/yellowful/code-splitting/tree/react-lazy)

## after code splitting with React.lazy in developement mode

### `main.chunk.js` shrinks

| file name                  | size     |
|----------------------------|----------|
| bundle.js                  | 8.1 KB   |
| vendors~main.chunk.js      | 450 KB   |
| main.chunk.js              | 4.6 KB   |
| page 2 clicked: 0.chunk.js | 2.2 KB   |
| page 3 clicked: 1.chunk.js | 2.2 KB   |

## After code splitting with React.lazy in build mode

| file name                                | size                |
|------------------------------------------|---------------------|
| build/static/js/2.f7a3b573.chunk.js      | 41.73 KB (-2.25 KB) |
| build/static/js/5.84c4e1e5.chunk.js      | 1.63 KB             |
| build/static/js/runtime-main.03b27825.js | 1.19 KB (-3 B)      |
| build/static/js/main.99ebc732.chunk.js   | 851 B (-204 B)      |
| build/static/js/4.1194b4e5.chunk.js      | 443 B (-1 B)        |
| build/static/js/3.6e10ab1b.chunk.js      | 441 B (-3 B)        |
