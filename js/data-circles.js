function formatearNumero(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? ',' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
}


var dt = new DashTimer('#revenue').init({
    height: 200,
    width: 200,
    start: {
        fill: '#3c6819',
        innerRatio: .9,
        outerRatio: 1
    },
    finish: {
        fill: '#3c6819',
        innerRatio: .9,
        outerRatio: 1
    }
}).setData([{
    immediate: {
        angle: true
    },
    start: {
        angle: 1,
        fill: '#8bd344'
    },
    finish: {
        angle: 0,
        fill: '#8bd344'
    }
}, {
    values: {
        show: true,
        decorate: function (d) {
            d = Math.round(d / 4 * 200000);
            return formatearNumero(d) + '€';
        },
    }
}]).start(3000, 0, .4);
var dt = new DashTimer('#impresions').init({
    height: 200,
    width: 200,
    start: {
        fill: '#2d5466',
        innerRatio: .9,
        outerRatio: 1
    },
    finish: {
        fill: '#2d5466',
        innerRatio: .9,
        outerRatio: 1
    }
}).setData([{
    immediate: {
        angle: true
    },
    start: {
        angle: 1,
        fill: '#6ecbe3'
    },
    finish: {
        angle: 0,
        fill: '#6ecbe3'
    }
}, {
    values: {
        show: true,
        decorate: function (d) {
            d = Math.floor(d / 6 * 5000000);
            return formatearNumero(d) + '€';
        }
    }
}]).start(3000, 0, .6);

var dt = new DashTimer('#visits').init({
    height: 200,
    width: 200,
    start: {
        fill: '#bd5924',
        innerRatio: .9,
        outerRatio: 1
    },
    finish: {
        fill: '#bd5924',
        innerRatio: .9,
        outerRatio: 1
    }
}).setData([{
    immediate: {
        angle: true
    },
    start: {
        angle: 1,
        fill: '#efc430'
    },
    finish: {
        angle: 0,
        fill: '#efc430'
    }
}, {
    values: {
        show: true,
        decorate: function (d) {
            d = Math.floor(d / 2 * 60000000);
            return formatearNumero(d) + '€';
        }
    }
}]).start(3000, 0, .2);