'use strict';

module.exports = Tooltipr;

function Tooltipr() {
    if (!(this instanceof Tooltipr)) return new Tooltipr();
}

Tooltipr.prototype.create = function(e) {
    var current = e.target;
    this.tooltip = current.getAttribute('data-tooltip');

    this.tooltipDiv = document.createElement('div');
    this.tooltipDiv.className = 'tooltip';
    this.tooltipDiv.innerHTML = this.tooltip;
    document.body.appendChild(this.tooltipDiv);

    var coords = current.getBoundingClientRect();

    var left = coords.left + (current.offsetWidth - this.tooltipDiv.offsetWidth) / 2;
    if (left < 0) left = 0;

    var top = coords.top - this.tooltipDiv.offsetHeight - 5;
    if (top < 0) top = coords.top + current.offsetHeight + 5;

    this.tooltipDiv.style.left = left + 'px';
    this.tooltipDiv.style.top = top + 'px';
};

Tooltipr.prototype.remove = function() {
    if(this.tooltipDiv) {
        document.body.removeChild(this.tooltipDiv);
    }
};
