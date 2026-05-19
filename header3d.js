// Decorative Three.js header banner: an ambient wireframe wave mesh with
// cursor parallax, drag-to-spin momentum, and a gradient that radiates
// outward from the cursor.
(function () {
  function init() {
    const header = document.getElementById('page-header');
    if (!header || typeof THREE === 'undefined') return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const canvas = document.createElement('canvas');
    canvas.className = 'header-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    header.insertBefore(canvas, header.firstChild);

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 6;

    // --- Gradient ramp -------------------------------------------------------
    // Radiates from a light lavender at the cursor out to the brand indigo,
    // matching the site's #667eea -> #764ba2 heading/brand palette.
    const STOPS = [
      new THREE.Color(0xc4b5fd), // cursor centre
      new THREE.Color(0x9f7aea),
      new THREE.Color(0x764ba2),
      new THREE.Color(0x667eea)  // outer
    ];
    const _c = new THREE.Color();
    const _v = new THREE.Vector3();
    function rampColor(t, out) {
      t = t < 0 ? 0 : (t > 1 ? 1 : t);
      const seg = t * (STOPS.length - 1);
      const i = Math.min(Math.floor(seg), STOPS.length - 2);
      return out.copy(STOPS[i]).lerp(STOPS[i + 1], seg - i);
    }

    // --- Wave mesh -----------------------------------------------------------
    const W = 22, H = 8, SX = 72, SY = 24;
    const geo = new THREE.PlaneGeometry(W, H, SX, SY);
    geo.setAttribute('color',
      new THREE.BufferAttribute(new Float32Array(geo.attributes.position.count * 3), 3));
    const base = geo.attributes.position.array.slice();
    const mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
      vertexColors: true, wireframe: true, transparent: true, opacity: 0.6
    }));
    scene.add(mesh);

    // --- Shared interaction state -------------------------------------------
    const state = {
      time: 0, dt: 0,
      pxTarget: 0, pyTarget: 0,
      px: 0, py: 0,
      spinX: 0, spinY: 0,
      rotX: 0, rotY: 0,
      dragging: false
    };

    function resize() {
      const w = header.clientWidth;
      const h = header.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }

    // --- Pointer / drag handling --------------------------------------------
    let lastX = 0, lastY = 0;
    function pointerNorm(e) {
      const r = header.getBoundingClientRect();
      return {
        x: ((e.clientX - r.left) / r.width) * 2 - 1,
        y: -(((e.clientY - r.top) / r.height) * 2 - 1)
      };
    }
    if (!reduceMotion) {
      header.addEventListener('pointermove', function (e) {
        const p = pointerNorm(e);
        state.pxTarget = p.x;
        state.pyTarget = p.y;
        if (state.dragging) {
          state.spinY += (e.clientX - lastX) * 0.0009;
          state.spinX += (e.clientY - lastY) * 0.0009;
        }
        lastX = e.clientX;
        lastY = e.clientY;
      });
      header.addEventListener('pointerdown', function (e) {
        state.dragging = true;
        lastX = e.clientX;
        lastY = e.clientY;
        header.classList.add('banner-grabbing');
      });
      window.addEventListener('pointerup', function () {
        state.dragging = false;
        header.classList.remove('banner-grabbing');
      });
      header.addEventListener('pointerleave', function () {
        state.pxTarget = 0;
        state.pyTarget = 0;
      });
    }
    window.addEventListener('resize', resize);

    // --- Per-frame update ----------------------------------------------------
    function update() {
      const pos = geo.attributes.position.array;
      const col = geo.attributes.color.array;
      const cx = state.px * (W / 2) * 0.85;
      const cy = state.py * (H / 2) * 0.85;

      for (let i = 0; i < pos.length; i += 3) {
        const x = base[i], y = base[i + 1];
        let z = Math.sin(x * 0.55 + state.time * 0.9) * 0.28
              + Math.sin(y * 0.85 + state.time * 1.15) * 0.20;
        const d2 = (x - cx) * (x - cx) + (y - cy) * (y - cy);
        z += Math.exp(-d2 / 3.0) * 1.1;  // raised bump that follows the cursor
        pos[i + 2] = z;
      }
      geo.attributes.position.needsUpdate = true;

      mesh.rotation.x = -0.5 + state.py * 0.22 + state.rotX * 0.3;
      mesh.rotation.z = state.px * 0.16 + state.rotY * 0.3;
      mesh.updateMatrixWorld(true);

      // Colour each vertex by its screen-space distance from the cursor.
      for (let i = 0; i < pos.length; i += 3) {
        _v.set(pos[i], pos[i + 1], pos[i + 2]).applyMatrix4(mesh.matrixWorld).project(camera);
        const dx = _v.x - state.px, dy = _v.y - state.py;
        rampColor(Math.sqrt(dx * dx + dy * dy) / 2.0, _c);
        col[i] = _c.r; col[i + 1] = _c.g; col[i + 2] = _c.b;
      }
      geo.attributes.color.needsUpdate = true;
    }

    // --- Boot ----------------------------------------------------------------
    resize();

    if (reduceMotion) {
      update();
      renderer.render(scene, camera);
      return;
    }

    const clock = new THREE.Clock();
    let running = true;
    function animate() {
      if (!running) return;
      requestAnimationFrame(animate);
      state.dt = Math.min(clock.getDelta(), 0.05);
      state.time += state.dt;
      state.px += (state.pxTarget - state.px) * 0.06;
      state.py += (state.pyTarget - state.py) * 0.06;
      state.spinX *= 0.94;
      state.spinY *= 0.94;
      state.rotX += state.spinX;
      state.rotY += state.spinY;
      update();
      renderer.render(scene, camera);
    }
    animate();
    document.addEventListener('visibilitychange', function () {
      running = !document.hidden;
      if (running) { clock.getDelta(); animate(); }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
