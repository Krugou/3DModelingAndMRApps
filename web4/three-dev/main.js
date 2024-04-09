import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {RGBELoader} from 'three/addons/loaders/RGBELoader.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
// Declare variables for the scene, camera, renderer, cube, and controls
let container, camera, scene, renderer, cube, controls;
let lastLoggedPosition = null;
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

	loadmodels();

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
	// const geometry = new THREE.BoxGeometry(1, 1, 1);
	// const material = new THREE.MeshPhongMaterial({color: 0x00ff00});
	// cube = new THREE.Mesh(geometry, material);
	// Add the cube to the scene
	// scene.add(cube);

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
	camera.position.set(7, 3, 6);
	controls.update();

	// // Set the cube's position, scale, and rotation
	// cube.position.x = 0;
	// cube.scale.set(2, 2, 2);
	// cube.rotation.y = Math.PI / 4;

	// Call the animate function to start the animation loop
	animate();
}
function loadmodels() {
	new RGBELoader()
		.setPath('/')
		.load('3DModelingAndMRApps/webBuild4/hdr/Scenery.hdr', function (texture) {
			texture.mapping = THREE.EquirectangularReflectionMapping;

			scene.background = texture;
			scene.environment = texture;
			renderer.toneMappingExposure = 10.0;
			// modelmazda

			const loader = new GLTFLoader().setPath('/');
			loader.load(
				'3DModelingAndMRApps/webBuild4/mazda.gltf',
				async function (gltf) {
					const modelmazda = gltf.scene;

					// wait until the model can be added to the scene without blocking due to shader compilation
					modelmazda.position.set(17, 0, -1);

					await renderer.compileAsync(modelmazda, camera, scene);

					scene.add(modelmazda);

					// render();
				},
			);

			// model2
			loader.load(
				'3DModelingAndMRApps/webBuild4/tow_boat/scene.gltf',
				async function (gltf) {
					const model2 = gltf.scene;

					// wait until the model can be added to the scene without blocking due to shader compilation
					model2.position.set(-20, -10, -1);

					await renderer.compileAsync(model2, camera, scene);

					scene.add(model2);

					// render();
				},
			);
			// model3
			loader.load(
				'3DModelingAndMRApps/webBuild4/street_lamp/street_lamp.gltf',
				async function (gltf) {
					const model3 = gltf.scene;

					// wait until the model can be added to the scene without blocking due to shader compilation
					model3.position.set(0, 0, -1);

					await renderer.compileAsync(model3, camera, scene);

					scene.add(model3);

					// render();
				},
			);
			// model2
			loader.load(
				'3DModelingAndMRApps/webBuild4/mylandscape/landscape.gltf',
				async function (gltf) {
					const model2 = gltf.scene;

					// wait until the model can be added to the scene without blocking due to shader compilation
					model2.position.set(-20, -10, -1);

					await renderer.compileAsync(model2, camera, scene);

					scene.add(model2);

					// render();
				},
			);
		});
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
	// Log the camera's position only when it changes
	if (!lastLoggedPosition || !camera.position.equals(lastLoggedPosition)) {
		console.log(camera.position);
		lastLoggedPosition = camera.position.clone();
	}
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
