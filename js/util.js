/* Utilities
 *
 * App utility methods
 *
 */

(function(exports) {
    "use strict";

    function Util(settings) {

        this.buildTemplate = function (el, context) {
            var source = el.html();
            var template = Handlebars.compile(source);
            return template(context);
        };


     }

    exports.Util = Util;
}(window));
