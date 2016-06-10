System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PasswordValidators;
    return {
        setters:[],
        execute: function() {
            PasswordValidators = (function () {
                function PasswordValidators() {
                }
                PasswordValidators.passwordsMustMatch = function (group) {
                    var newpw = group.find('newpassword');
                    var confirmpw = group.find('confirmpassword');
                    if (newpw.value !== confirmpw.value)
                        return { passwordsMustMatch: true };
                    return null;
                };
                return PasswordValidators;
            }());
            exports_1("PasswordValidators", PasswordValidators);
        }
    }
});
//# sourceMappingURL=passwordValidators.js.map