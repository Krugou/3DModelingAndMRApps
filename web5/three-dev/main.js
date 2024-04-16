import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {RGBELoader} from 'three/addons/loaders/RGBELoader.js';
import {VRButton} from 'three/addons/webxr/VRButton.js';
import {XRControllerModelFactory} from 'three/addons/webxr/XRControllerModelFactory.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
let basePath;
if (import.meta.env.MODE === 'production') {
	basePath = '/3DModelingAndMRApps/webBuild5/';
} else {
	basePath = '/';
}
// create a new empty group to include imported models you want to interact with
let group = new THREE.Group();
group.name = 'Interaction-Group';
let controller1, controller2;
let controllerGrip1, controllerGrip2;
let raycaster;
const intersected = [];
const tempMatrix = new THREE.Matrix4();
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
	// Create an AudioListener and add it to the camera
	const listener = new THREE.AudioListener();
	camera.add(listener);

	// Create a global audio source
	const sound = new THREE.Audio(listener);

	// Load a sound and set it as the Audio object's buffer
	const audioLoader = new THREE.AudioLoader();
	audioLoader.load('sounds/song.mp3', function (buffer) {
		sound.setBuffer(buffer);
		sound.setLoop(true);
		sound.setVolume(0.5);
		sound.play();
	});
	// Create a new THREE.WebGLRenderer object
	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setSize(window.innerWidth, window.innerHeight);

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
	// add the group to the scene
	scene.add(group);
	// // Set the cube's position, scale, and rotation
	// cube.position.x = 0;
	// cube.scale.set(2, 2, 2);
	// cube.rotation.y = Math.PI / 4;

	// Call the animate function to start the animation loop
	animate();
}
function loadmodels() {
	new RGBELoader().setPath(basePath).load('hdr/Scenery.hdr', function (texture) {
		texture.mapping = THREE.EquirectangularReflectionMapping;

		scene.background = texture;
		scene.environment = texture;
		renderer.toneMappingExposure = 10.0;
		// modelmazda

		const loader = new GLTFLoader().setPath(basePath);
		loader.load('mazda.gltf', async function (gltf) {
			const modelmazda = gltf.scene;

			// wait until the model can be added to the scene without blocking due to shader compilation
			modelmazda.position.set(17, 0, -1);

			await renderer.compileAsync(modelmazda, camera, scene);

			scene.add(modelmazda);

			// render();
		});

		// model2
		loader.load('tow_boat/scene.gltf', async function (gltf) {
			const model2 = gltf.scene;

			// wait until the model can be added to the scene without blocking due to shader compilation
			model2.position.set(-20, -10, -1);

			await renderer.compileAsync(model2, camera, scene);

			scene.add(model2);

			// render();
		});
		// model3
		loader.load('street_lamp/street_lamp.gltf', async function (gltf) {
			const model3 = gltf.scene;

			// wait until the model can be added to the scene without blocking due to shader compilation
			model3.position.set(0, 0, -1);

			await renderer.compileAsync(model3, camera, scene);

			// scene.add(model3);
			group.add(model3);
			// render();
		});
		// model2
		loader.load('mylandscape/landscape.gltf', async function (gltf) {
			const model2 = gltf.scene;

			// wait until the model can be added to the scene without blocking due to shader compilation
			model2.position.set(0, 0, 0);

			await renderer.compileAsync(model2, camera, scene);

			scene.add(model2);

			// render();
		});
	});
}
initVR();

/**
 * Initializes the VR environment.
 */
function initVR() {
	// Enable WebXR in the renderer
	document.body.appendChild(VRButton.createButton(renderer));
	renderer.xr.enabled = true;

	// Create and configure the first controller
	controller1 = renderer.xr.getController(0);
	// Add event listeners for 'selectstart' and 'selectend' events
	controller1.addEventListener('selectstart', onSelectStart);
	controller1.addEventListener('selectend', onSelectEnd);
	// Add the controller to the scene
	scene.add(controller1);

	// Create and configure the second controller
	controller2 = renderer.xr.getController(1);
	// Add event listeners for 'selectstart' and 'selectend' events
	controller2.addEventListener('selectstart', onSelectStart);
	controller2.addEventListener('selectend', onSelectEnd);
	// Add the controller to the scene
	scene.add(controller2);

	// Create a factory for controller models
	const controllerModelFactory = new XRControllerModelFactory();

	// Create and configure the grip for the first controller
	controllerGrip1 = renderer.xr.getControllerGrip(0);
	// Add a model to the grip
	controllerGrip1.add(
		controllerModelFactory.createControllerModel(controllerGrip1),
	);
	// Add the grip to the scene
	scene.add(controllerGrip1);

	// Create and configure the grip for the second controller
	controllerGrip2 = renderer.xr.getControllerGrip(1);
	// Add a model to the grip
	// controllerGrip2.add(
	// 	controllerModelFactory.createControllerModel(controllerGrip2),
	// );
	// // Add the grip to the scene
	scene.add(controllerGrip2);
	const loader = new GLTFLoader().setPath(basePath);
	loader.load('low_poly_blue_handgun_pistol/scene.gltf', async function (gltf) {
		// gltf.scene.scale.set(0.0003, 0.0003, 0.0003);
		gltf.scene.scale.set(0.1003, 0.1003, 0.1003);

		let mymodel = gltf.scene;
		mymodel.rotation.y = THREE.MathUtils.degToRad(-90);
		mymodel.rotation.x = THREE.MathUtils.degToRad(-30);
		mymodel.position.set(0, 0.01, 0);
		controllerGrip2.add(mymodel);
	});
	// Create a line geometry
	const geometry = new THREE.BufferGeometry().setFromPoints([
		new THREE.Vector3(0, 0, 0),
		new THREE.Vector3(0, 0, -1),
	]);

	// Create a line using the geometry
	const line = new THREE.Line(geometry);
	line.name = 'line';
	line.scale.z = 5;

	// Add a clone of the line to each controller
	controller1.add(line.clone());
	controller2.add(line.clone());

	// Create a raycaster
	raycaster = new THREE.Raycaster();
}
function onSelectStart(event) {
	const controller = event.target;

	const intersections = getIntersections(controller);

	if (intersections.length > 0) {
		const intersection = intersections[0];

		const object = intersection.object;
		object.material.emissive.b = 1;
		controller.attach(object);

		controller.userData.selected = object;
	}

	controller.userData.targetRayMode = event.data.targetRayMode;
}

function onSelectEnd(event) {
	const controller = event.target;

	if (controller.userData.selected !== undefined) {
		const object = controller.userData.selected;
		object.material.emissive.b = 0;
		group.attach(object);

		controller.userData.selected = undefined;
	}
}

function getIntersections(controller) {
	controller.updateMatrixWorld();

	raycaster.setFromXRController(controller);

	return raycaster.intersectObjects(group.children, true);
}

function intersectObjects(controller) {
	// Do not highlight in mobile-ar

	if (controller.userData.targetRayMode === 'screen') return;

	// Do not highlight when already selected

	if (controller.userData.selected !== undefined) return;

	const line = controller.getObjectByName('line');
	const intersections = getIntersections(controller);

	if (intersections.length > 0) {
		const intersection = intersections[0];

		const object = intersection.object;
		object.material.emissive.r = 1;
		intersected.push(object);

		line.scale.z = intersection.distance;
	} else {
		line.scale.z = 5;
	}
}

function cleanIntersected() {
	while (intersected.length) {
		const object = intersected.pop();
		object.material.emissive.r = 0;
	}
}
/**
 * Animates the scene by updating the controls and rendering the scene with the camera.
 */
function animate() {
	renderer.setAnimationLoop(function () {
		cleanIntersected();
		intersectObjects(controller1);
		intersectObjects(controller2);
		controls.update();
		renderer.render(scene, camera);
	});
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
