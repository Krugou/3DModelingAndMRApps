import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

let container, camera, scene, renderer, cube, controls;

init();

function init() {
	container = document.createElement('div');
	document.body.appendChild(container);

	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000,
	);

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	container.appendChild(renderer.domElement);

	const geometry = new THREE.BoxGeometry(1, 1, 1);
	const material = new THREE.MeshPhongMaterial({color: 0x00ff00});
	cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
	scene.add(directionalLight);

	const axesHelper = new THREE.AxesHelper(5);
	scene.add(axesHelper);
	const light = new THREE.AmbientLight(0x404040); // soft white light
	scene.add(light);
	camera.position.set(2, 2, 2);
	camera.lookAt(axesHelper.position);
	camera.lookAt(new THREE.Vector3(0, 0, 0));

	controls = new OrbitControls(camera, renderer.domElement);

	//controls.update() must be called after any manual changes to the camera's transform
	camera.position.set(0, 20, 100);
	controls.update();

	cube.position.x = 0;
	cube.scale.set(2, 2, 2);
	cube.rotation.y = Math.PI / 4;

	animate();
}

function animate() {
	requestAnimationFrame(animate);

	controls.update();
	renderer.render(scene, camera);
}

window.addEventListener('resize', resize, false);

function resize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}
