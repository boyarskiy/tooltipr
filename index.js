'use strict';

function Tooltipr() {
    if (!(this instanceof Tooltipr)) return new Tooltipr();
}

Tooltipr.prototype.create = function() {
    var current = event.target;
    this.tooltip = current.getAttribute('data-tooltip');

    if(this.tooltip === null) {
        return;
    }

    this.tooltipDiv = document.createElement('div');
    this.tooltipDiv.className = 'tooltip';
    this.tooltipDiv.innerHTML = this.tooltip;
    document.body.appendChild(this.tooltipDiv);

    var getCoords = getTooltipCoords(this.tooltipDiv, current);

    this.tooltipDiv.style.left = getCoords.left + 'px';
    this.tooltipDiv.style.top = getCoords.top + 'px';
};

Tooltipr.prototype.remove = function() {
    if(this.tooltipDiv) {
        document.body.removeChild(this.tooltipDiv);
    }
};

function getTooltipCoords(tooltip, current) {
    var tooltipCoords = current.getBoundingClientRect();

    var left = tooltipCoords.left + (current.offsetWidth - tooltip.offsetWidth) / 2;
    if (left < 0) left = 0;

    var top = tooltipCoords.top - tooltip.offsetHeight - 5;
    if (top < 0) top = tooltipCoords.top + current.offsetHeight + 5;

    return {
        top: top,
        left: left
    }
}

module.exports = Tooltipr;
