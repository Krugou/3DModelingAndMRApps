import * as THREE from 'three';

/**
 * Represents the main scene of the application.
 * @type {THREE.Scene}
 */
const scene = new THREE.Scene();

/**
 * Represents the camera used to view the scene.
 * @type {THREE.PerspectiveCamera}
 */
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000,
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});

/**
 * Represents a cube mesh in the scene.
 * @type {THREE.Mesh}
 */
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

let velocity = new THREE.Vector3(0.05, 0.05, 0);
let bounds = new THREE.Vector3(
	5 * (window.innerWidth / window.innerHeight),
	5,
	0,
);

/**
 * Animates the scene by updating the cube's rotation and rendering the scene.
 */
const animate = () => {
	requestAnimationFrame(animate);

	cube.position.add(velocity);

	if (Math.abs(cube.position.x) > bounds.x) {
		velocity.x *= -1;
	}
	if (Math.abs(cube.position.y) > bounds.y) {
		velocity.y *= -1;
	}
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
};

animate();

window.addEventListener('resize', function () {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
	bounds.x = 5 * (window.innerWidth / window.innerHeight);
});
