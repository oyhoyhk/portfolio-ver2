function threeLoad() {
  // create a scene, that will hold all our elements such as objects, cameras and lights.
  var scene = new THREE.Scene();
  // create a camera, which defines where we're looking at.
  var camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  // create a render and set the size
  var webGLRenderer = new THREE.WebGLRenderer();
  webGLRenderer.setClearColor(new THREE.Color(0x000000, 1.0));
  webGLRenderer.setSize(window.innerWidth, window.innerHeight);
  // position and point the camera to the center of the scene
  camera.position.x = 20;
  camera.position.y = 0;
  camera.position.z = 150;

  // add the output of the renderer to the html element
  document.getElementById(`introBox`).appendChild(webGLRenderer.domElement);

  var cloud;
  var controls = new (function() {
    this.size = 0.5;
    this.transparent = false;
    this.opacity = 0.5;
    this.vertexColors = false;
    this.color = 0xffffff;
    this.sizeAttenuation = true;
    this.rotateSystem = true;
    this.redraw = function() {
      if (scene.getObjectByName("particles")) {
        scene.remove(scene.getObjectByName("particles"));
      }
      createParticles(
        controls.size,
        controls.transparent,
        controls.opacity,
        controls.vertexColors,
        controls.sizeAttenuation,
        controls.color
      );
    };
  })();

  controls.redraw();
  render();

  function createParticles(
    size,
    transparent,
    opacity,
    vertexColors,
    sizeAttenuation,
    color
  ) {
    var geom = new THREE.Geometry();
    var material = new THREE.PointCloudMaterial({
      size: size,
      transparent: transparent,
      opacity: opacity,
      vertexColors: vertexColors,
      sizeAttenuation: sizeAttenuation,
      color: color
    });

    var range = 500;
    for (var i = 0; i < 15000; i++) {
      var particle = new THREE.Vector3(
        Math.random() * range - range / 2,
        Math.random() * range - range / 2,
        Math.random() * range - range / 2
      );
      geom.vertices.push(particle);
      var color = new THREE.Color(0x00ff00);
      color.setHSL(
        color.getHSL().h,
        color.getHSL().s,
        Math.random() * color.getHSL().l
      );
      geom.colors.push(color);
    }

    cloud = new THREE.PointCloud(geom, material);
    cloud.name = "particles";
    scene.add(cloud);
  }

  var step = 0;

  function render() {
    step += 0.01;
    cloud.rotation.x = step;
    cloud.rotation.z = step;
    requestAnimationFrame(render);
    webGLRenderer.render(scene, camera);
  }
}
