const Handlebars = require('handlebars');
const H = require('just-handlebars-helpers');
H.registerHelpers(Handlebars);

// formatNumber
Handlebars.registerHelper('formatNumber', function (number, options) {
    const format = options.hash.format || 'decimal';
    const minimumFractionDigits = options.hash.minimumFractionDigits || 0;
    const maximumFractionDigits = options.hash.maximumFractionDigits || 2;
    const formatter = new Intl.NumberFormat(undefined, {
        style: 'decimal',
        minimumFractionDigits,
        maximumFractionDigits,
    });
    return formatter.format(number);
});

module.exports = {Handlebars};
