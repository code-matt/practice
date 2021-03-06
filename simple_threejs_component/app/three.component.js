System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var WebGLRenderer, Scene, PerspectiveCamera, Mesh, BoxGeometry, Material, ThreeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ThreeComponent = (function () {
                function ThreeComponent() {
                }
                ThreeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.scene = new THREE.Scene();
                    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
                    this.camera.position.z = 1000;
                    this.geometry = new THREE.BoxGeometry(200, 200, 200);
                    this.material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
                    this.mesh = new THREE.Mesh(this.geometry, this.material);
                    this.scene.add(this.mesh);
                    this.renderer = new THREE.WebGLRenderer();
                    this.renderer.setSize(window.innerWidth, window.innerHeight);
                    document.body.appendChild(this.renderer.domElement);
                    this.animate();
                    window.addEventListener('resize', function (_) { return _this.onResize(); });
                };
                ThreeComponent.prototype.animate = function () {
                    var _this = this;
                    window.requestAnimationFrame(function (_) { return _this.animate(); });
                    this.mesh.rotation.x += 0.01;
                    this.mesh.rotation.y += 0.02;
                    this.renderer.render(this.scene, this.camera);
                };
                ThreeComponent.prototype.onResize = function () {
                    var width = window.innerWidth;
                    var height = window.innerHeight - 90;
                    this.camera.aspect = width / height;
                    this.camera.updateProjectionMatrix();
                    this.renderer.setSize(width, height);
                };
                ThreeComponent = __decorate([
                    core_1.Component({
                        selector: 'three',
                        template: "\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ThreeComponent);
                return ThreeComponent;
            }());
            exports_1("ThreeComponent", ThreeComponent);
        }
    }
});
//# sourceMappingURL=three.component.js.map