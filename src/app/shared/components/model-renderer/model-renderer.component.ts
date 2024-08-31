import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { TranslateService } from "@ngx-translate/core";
import * as THREE from "three";

@Component({
  selector: "app-model-renderer",
  templateUrl: "./model-renderer.component.html",
  styleUrls: ["./model-renderer.component.css"],
})
export class ModelRendererComponent implements OnInit {
  constructor(private store: Store, public translate: TranslateService) {}

  ngOnInit() {
    this.initializeValues();
  }

  initializeValues(): void {
    // Create a scene
    let scene = new THREE.Scene();

    // Create a camera
    let camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 10);

    // Create a renderer
    let renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById("canvas") as HTMLCanvasElement,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create a light
    let light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 10, 0);
    scene.add(light);

    // Create a floor
    let floorGeometry = new THREE.PlaneGeometry(10, 10);
    let floorMaterial = new THREE.MeshLambertMaterial({ color: 0xaaaaaa });
    let floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);

    // Create a wall
    let wallGeometry = new THREE.BoxGeometry(10, 4, 0.1);
    let wallMaterial = new THREE.MeshLambertMaterial({ color: 0xcccccc });
    let wall = new THREE.Mesh(wallGeometry, wallMaterial);
    wall.position.set(0, 2, -5);
    scene.add(wall);

    // Render the scene
    renderer.render(scene, camera);
  }
}
