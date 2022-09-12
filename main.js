window.onload = function() {

    const MAX = 12;
    let rendererArray = [];
    let sceneArray = [];
    let cameraArray = [];
    let boxArray = [];
    for (let i = 0; i < MAX; ++i) {

          // サイズを指定
          const width = 64;
          const height = 64;
    
          // レンダラーを作成
          rendererArray.push( new THREE.WebGLRenderer({
            canvas: document.querySelector('#canvas' + i)
          }));
          rendererArray[i].setPixelRatio(window.devicePixelRatio);
          rendererArray[i].setSize(width, height);
    
          // シーンを作成
          sceneArray.push( new THREE.Scene() );
    
          // カメラを作成
          cameraArray.push( new THREE.PerspectiveCamera(45, width / height) );
          cameraArray[i].position.set(0, 0, +1000);
    
          // 箱を作成
          const geometry = new THREE.BoxGeometry(400, 400, 400);
          const material = new THREE.MeshNormalMaterial();
          boxArray.push( new THREE.Mesh(geometry, material) );
          sceneArray[i].add(boxArray[i]);
    }
          tick();
    
          // 毎フレーム時に実行されるループイベントです
          function tick() {
            if (cameraArray.length >= MAX) {
                for (let i = 0; i < MAX; ++i) {
                    boxArray[i].rotation.y += 0.01 * (i + 1);
                    rendererArray[i].render(sceneArray[i], cameraArray[i]); // レンダリング
                }
            }    
            requestAnimationFrame(tick);
          }
}