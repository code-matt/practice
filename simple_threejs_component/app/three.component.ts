import { Component, OnInit } from '@angular/core'
import WebGLRenderer = THREE.WebGLRenderer;
import Scene = THREE.Scene;
import PerspectiveCamera = THREE.PerspectiveCamera;
import Mesh = THREE.Mesh;
import BoxGeometry = THREE.BoxGeometry;
import Material = THREE.Material;

@Component({
  selector: 'three',
  template: `
  `
})
export class ThreeComponent implements OnInit{
  private scene: Scene;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;
  private mesh: Mesh;
  private geometry: BoxGeometry;
  private material: Material;

  ngOnInit(){
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    this.camera.position.z = 1000;

    this.geometry = new THREE.BoxGeometry( 200, 200, 200 );
    this.material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

    this.mesh = new THREE.Mesh( this.geometry, this.material );
    this.scene.add( this.mesh );

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( this.renderer.domElement );

    this.animate()
    window.addEventListener('resize', _ => this.onResize());
  }

  public animate() {
    window.requestAnimationFrame(_ => this.animate());

    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02

    this.renderer.render(this.scene, this.camera);
  }

  public onResize() {
    const width = window.innerWidth;
    const height = window.innerHeight - 90;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }
}
