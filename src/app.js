import { moveCursor } from "./cursor.js";

const video = document.getElementById("cam");

// Config da lib
const modelParams = {
  flipHorizontal: true,
  maxNumBoxes: 1,
  scoreThreshold: 0.6,
};

let model;

// 1️⃣ Inicia a câmera corretamente
navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
  video.srcObject = stream;

  // Só roda quando o vídeo estiver 100% carregado
  video.addEventListener("loadeddata", () => {
    console.log("Vídeo pronto!");
    startModel();
  });
});

// 2️⃣ Carrega o modelo
function startModel() {
  handTrack.load(modelParams).then(lmodel => {
    model = lmodel;
    console.log("Modelo carregado!");
    runDetection(); // Agora SIM podemos rodar.
  });
}

// 3️⃣ Função de detecção em loop
function runDetection() {
  if (!model) return;

  model.detect(video).then(predictions => {
    console.log(predictions);

    if (predictions.length > 0) {
      const hand = predictions[0].bbox; // [x, y, w, h]

      const centerX = hand[0] + hand[2] / 2;
      const centerY = hand[1] + hand[3] / 2;

      // converter para tela
      const x = (centerX / video.width) * window.innerWidth;
      const y = (centerY / video.height) * window.innerHeight;

      moveCursor(x, y);
    }

    requestAnimationFrame(runDetection);
  });
}
