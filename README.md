# Tooltipr

Simplest JavaScript module for creating tooltips.

## Instal

```
$ npm install --save tooltipr
```

## Usage

Require tooltip after installation

```js
var tooltipr = require("tooltipr");
```

Add ```data-tooltip = "hello world"``` to your element

```html
<div class="elem" data-tooltip="hello world">Tooltip</div>
```

Create tooltip

```js
var tooltip = tooltipr();
var elem = document.querySelector('.elem');

elem.onmouseover = function(e) {
    tooltip.create(e);
}
```

Remove tooltip

```js
elem.onmouseout = function(e) {
    tooltip.remove(e);
}
```

Add styles

```css
.tooltip {
	position: fixed;
}
```

## License

MIT