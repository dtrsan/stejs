/*! STEjs v1.0 | (c) 2013 Domagoj Trsan | MIT licence */
(function() {
    this.STEjs = function(template) {
        this.render = function(values) {
            values = values || {};
            var rendered = template;

            for (key in values) {
                rendered = rendered.replace(new RegExp('%'+key+'%', 'g'), values[key]);
            }
            return rendered;
        };
    };
}).call(this);

