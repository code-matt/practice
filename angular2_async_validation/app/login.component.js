System.register(['angular2/core', 'angular2/common', './validators/passwordValidators'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, passwordValidators_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (passwordValidators_1_1) {
                passwordValidators_1 = passwordValidators_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(fb) {
                    this.currentpassword = "12345";
                    this.form = fb.group({
                        currentpassword: ['', common_1.Validators.compose([
                                common_1.Validators.required
                            ])],
                        newpassword: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                common_1.Validators.minLength(5)
                            ])],
                        confirmpassword: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                common_1.Validators.minLength(5)
                            ])],
                    }, { validator: passwordValidators_1.PasswordValidators.passwordsMustMatch });
                }
                LoginComponent.prototype.onSubmit = function () {
                    if (this.form.find('currentpassword').value !== this.currentpassword) {
                        this.form.find('currentpassword').setErrors({
                            invalidPassword: true
                        });
                    }
                    else {
                        alert('Password change success!');
                    }
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: 'app/login.component.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map