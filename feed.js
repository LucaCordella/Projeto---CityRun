var video = document.querySelector('video');
var startButton = document.querySelector('#start-button');
var stopButton = document.querySelector('#stop-button');
var captureButton = document.querySelector('#capture-button');
var canvas = document.querySelector('canvas');
var imageOutput = document.querySelector('#image-output');

let stream;

startButton.addEventListener('click', () => {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(s => {
      stream = s;
      video.srcObject = stream;
      video.play();
    })
    .catch(err => {
      console.error('Ocorreu um erro ao acessar a câmera:', err);
    });
});

stopButton.addEventListener('click', () => {
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
    video.srcObject = null;
  }
});

captureButton.addEventListener('click', () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video,   
 0, 0, canvas.width, canvas.height);   

  imageOutput.src = canvas.toDataURL('image/png');
});


captureButton.addEventListener('click', () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width,   
 canvas.height);

  // Criar um Blob a partir da imagem
  canvas.toBlob(blob => {
    // Criar um link para download
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download   
 = 'captura.png'; // Nome do arquivo
    document.body.appendChild(a);
    a.click();

    // Limpar o URL para liberar a memória
    URL.revokeObjectURL(url);
  }, 'image/png');
});