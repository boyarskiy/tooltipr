# Tooltipr

Simplest JavaScript module for creating tooltips.

## Instal

```
$ npm install --save tooltipr
```

## Usage

1. Require tooltip after installation

```js
var tooltipr = require("tooltipr");
```

2. Add ```data-tooltip = "hello world"``` to your element

```html
<div class="elem" data-tooltip="hello world">Tooltip</div>
```

3. Create

```js
var tooltip = tooltipr();
var elem = document.querySelector('.elem');

elem.onmouseover = function(e) {
    tooltip.create(e);
}
```

4. Remove

```js
elem.onmouseout = function(e) {
    tooltip.remove(e);
}
```

5. Add styles

```css
.tooltip {
	position: fixed;
}
```
