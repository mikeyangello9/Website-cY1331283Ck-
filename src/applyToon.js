import * as THREE from 'three';
const outlineMaterial = new THREE.MeshBasicMaterial({
  color: 'black',
  side: THREE.BackSide,
  depthWrite: false,
});

export function applyToon({
  scene,
  meshName,
  color,
  gradientMap,
}) {
  if (!scene) return null;

  const mesh = scene.getObjectByName(meshName);
  if (!mesh || !mesh.isMesh) return null;

  // --- TOON MATERIAL ---
  const toonMaterial = new THREE.MeshToonMaterial({
    color: new THREE.Color(color),
    gradientMap,
  });

  mesh.material = toonMaterial;
  mesh.castShadow = true;
  mesh.receiveShadow = true;

 
  const existingOutline = mesh.getObjectByName('__outline');
  if (existingOutline) {
    mesh.remove(existingOutline);
  }

  const outline = new THREE.Mesh(mesh.geometry, outlineMaterial);
  outline.name = '__outline';

  outline.scale.multiplyScalar(1.01);
  outline.position.set(0, 0, 0);
  outline.rotation.set(0, 0, 0);

  outline.renderOrder = -1;
  outline.frustumCulled = false;

  mesh.add(outline);

  return outline;
}
