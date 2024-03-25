import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

// Declare variables for the scene, camera, renderer, cube, and controls
let container, camera, scene, renderer, cube, controls;

// Call the init function to initialize the scene
init();

/**
 * Initializes the 3D scene, camera, renderer, and objects.
 */
function init() {
	// Create a new div element and append it to the body
	container = document.createElement('div');
	document.body.appendChild(container);

	// Create a new THREE.Scene object
	scene = new THREE.Scene();

	// Create a new THREE.PerspectiveCamera object
	camera = new THREE.PerspectiveCamera(
		75, // Field of view
		window.innerWidth / window.innerHeight, // Aspect ratio
		0.1, // Near clipping plane
		1000, // Far clipping plane
	);

	// Create a new THREE.WebGLRenderer object
	renderer = new THREE.WebGLRenderer();
	// Set the size of the renderer to the window size
	renderer.setSize(window.innerWidth, window.innerHeight);
	// Append the renderer's domElement (the canvas) to the container
	container.appendChild(renderer.domElement);

	// Create a cube using THREE.BoxGeometry and THREE.MeshPhongMaterial
	const geometry = new THREE.BoxGeometry(1, 1, 1);
	const material = new THREE.MeshPhongMaterial({color: 0x00ff00});
	cube = new THREE.Mesh(geometry, material);
	// Add the cube to the scene
	scene.add(cube);

	// Add a directional light to the scene
	const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
	scene.add(directionalLight);

	// Add an axes helper to the scene
	const axesHelper = new THREE.AxesHelper(5);
	scene.add(axesHelper);

	// Add ambient light to the scene
	const light = new THREE.AmbientLight(0x404040); // soft white light
	scene.add(light);

	// Set the camera's position and look at the axes helper
	camera.position.set(2, 2, 2);
	camera.lookAt(axesHelper.position);
	camera.lookAt(new THREE.Vector3(0, 0, 0));

	// Create new OrbitControls
	controls = new OrbitControls(camera, renderer.domElement);

	// Update the controls after any manual changes to the camera's transform
	camera.position.set(0, 20, 100);
	controls.update();

	// Set the cube's position, scale, and rotation
	cube.position.x = 0;
	cube.scale.set(2, 2, 2);
	cube.rotation.y = Math.PI / 4;

	// Call the animate function to start the animation loop
	animate();
}

/**
 * Animates the scene by updating the controls and rendering the scene with the camera.
 */
function animate() {
	// Request the next animation frame
	requestAnimationFrame(animate);

	// Update the controls and render the scene with the camera
	controls.update();
	renderer.render(scene, camera);
}

// Add an event listener for the window resize event
window.addEventListener('resize', resize, false);

/**
 * Resizes the camera and renderer based on the window dimensions.
 */
function resize() {
	// Update the camera's aspect ratio based on the new window dimensions
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	// Update the renderer's size based on the new window dimensions
	renderer.setSize(window.innerWidth, window.innerHeight);
}
