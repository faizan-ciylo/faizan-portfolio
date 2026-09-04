import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  setCharTimeline,
  setAllTimeline,
  ALL_TRIGGER_IDS,
} from "../../utils/GsapScroll";

export default function handleResize(
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera,
  canvasDiv: React.RefObject<HTMLDivElement>,
  character: THREE.Object3D
) {
  if (!canvasDiv.current) return;
  const canvas3d = canvasDiv.current.getBoundingClientRect();
  const width = canvas3d.width;
  const height = canvas3d.height;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  // Only kill the triggers this module owns and is about to rebuild below —
  // NOT every ScrollTrigger on the page (that used to also nuke unrelated
  // sections' reveal animations, like Research's, with nothing left to
  // ever re-trigger them).
  ALL_TRIGGER_IDS.forEach((id) => {
    ScrollTrigger.getById(id)?.kill();
  });
  setCharTimeline(character, camera);
  setAllTimeline();
}
