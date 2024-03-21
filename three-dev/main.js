import * as THREE from 'three';

const scene = new THREE.Scene();

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

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

let bounds = new THREE.Vector3(
	5 * (window.innerWidth / window.innerHeight),
	5,
	0,
);

// Set initial position of the cube
cube.position.x = Math.random() * bounds.x * 2 - bounds.x;
cube.position.y = Math.random() * bounds.y * 2 - bounds.y;

// Declare and set initial velocity of the cube
let velocity = new THREE.Vector3(
	(Math.random() - 0.9) * 0.1,
	(Math.random() - 0.9) * 0.1,
	0,
);

cube.rotation.x = Math.random() * Math.PI * 2;
cube.rotation.y = Math.random() * Math.PI * 2;

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
