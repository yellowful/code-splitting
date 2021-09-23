# code splitting

## Other Branches

[without code splitting](https://github.com/yellowful/code-splitting)

[with code splitting in route level](https://github.com/yellowful/code-splitting/tree/route-level)

[with code splitting in component level](https://github.com/yellowful/code-splitting/tree/component-level)

[with code splitting by React.lazy](https://github.com/yellowful/code-splitting/tree/react-lazy)

## After code splitting in component level in developement mode

The `main.chunk.js` grows

| file name                  | size     |
|----------------------------|----------|
| bundle.js                  | 8.1 KB   |
| vendors~main.chunk.js      | 450 KB   |
| main.chunk.js              | 4.8 KB   |
| page 2 clicked: 0.chunk.js | 2.2 KB   |
| page 3 clicked: 1.chunk.js | 2.2 KB   |

## After comments adding and code splitting in component level in developement mode

The `main.chunk.js` grows

| file name                  | size     |
|----------------------------|----------|
| bundle.js                  | 8.1 KB   |
| vendors~main.chunk.js      | 450 KB   |
| main.chunk.js              | 5.4 KB   |
| page 2 clicked: 0.chunk.js | 2.2 KB   |
| page 3 clicked: 1.chunk.js | 2.2 KB   |

## After code splitting in build mode

| file name                                | size                |
|------------------------------------------|---------------------|
| build/static/js/2.c585b00a.chunk.js      | 43.97 KB (+2.23 KB) |
| build/static/js/5.a85a37fb.chunk.js      | 1.63 KB             |
| build/static/js/runtime-main.35932d72.js | 1.2 KB (+3 B)       |
| build/static/js/main.4f2881c7.chunk.js   | 979 B (+128 B)      |
| build/static/js/3.49772134.chunk.js      | 444 B (+3 B)        |
| build/static/js/4.1e7c3b89.chunk.js      | 444 B (+1 B)        |

