# Code Splitting

## Other Branches

[without code splitting](https://github.com/yellowful/code-splitting)

[with code splitting in route level](https://github.com/yellowful/code-splitting/tree/route-level)

[with code splitting in component level](https://github.com/yellowful/code-splitting/tree/component-level)

[with code splitting by React.lazy](https://github.com/yellowful/code-splitting/tree/react-lazy)

## After code splitting in route level in developement mode

### The `main.chunk.js` shrinks

| file name                  | size     |
|----------------------------|----------|
| bundle.js                  | 8.1 KB   |
| vendors~main.chunk.js      | 450 KB   |
| main.chunk.js              | 4.5 KB   |
| page 2 clicked: 0.chunk.js | 2.2 KB   |
| page 3 clicked: 1.chunk.js | 2.2 KB   |

## After comments adding and code splitting in route level in developement mode

### The `main.chunk.js` grows

| file name                  | size     |
|----------------------------|----------|
| bundle.js                  | 8.1 KB   |
| vendors~main.chunk.js      | 450 KB   |
| main.chunk.js              | 5.1 KB   |
| page 2 clicked: 0.chunk.js | 2.2 KB   |
| page 3 clicked: 1.chunk.js | 2.2 KB   |

## After code splitting in build mode

| file name                                | size                |
|------------------------------------------|---------------------|
| build/static/js/2.09a92da3.chunk.js      | 43.98 KB (+2.25 KB) |
| build/static/js/5.a85a37fb.chunk.js      | 1.63 KB             |
| build/static/js/runtime-main.35932d72.js | 1.2 KB (+24 B)      |
| build/static/js/main.9e141c22.chunk.js   | 1.04 KB (+250 B)    |
| build/static/js/3.49772134.chunk.js      | 444 B (-1.19 KB)    |
| build/static/js/4.1e7c3b89.chunk.js      | 444 B               |
