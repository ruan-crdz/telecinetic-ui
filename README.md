# 🖐️✨ Telecinetic UI — Controle a interface com a mão

**Telecinetic UI** é uma interface experimental que permite controlar elementos da página usando apenas o movimento da mão — sem clicar e sem tocar no mouse.

Tudo funciona **100% dentro do navegador**, utilizando **MediaPipe Hands** para rastrear 21 pontos da mão em tempo real.  
Não requer backend, instalações, nem APIs pagas. Apenas abra o `index.html` no navegador e permita o uso da câmera.

---

## 🚀 Funcionalidades

- Cursor virtual guiado pela posição da mão  
- Detecção precisa do dedo indicador  
- Atualização suave e responsiva  
- Funciona offline após carregado  
- Nenhum dado é enviado a servidores externos  
- Base ideal para:
  - cliques por gesto (pinça)  
  - hover no ar  
  - scroll controlado com a mão  
  - drag & drop gestual  
  - interfaces futuristas e acessíveis  

---

## 🧰 Tecnologias

- **MediaPipe Hands** — rastreamento da mão  
- **JavaScript** — lógica e interação  
- **CSS** — cursor visual e animações  
- **WebRTC** — captura da webcam  

Tudo gratuito e aberto.

---

## 📂 Estrutura do Projeto

```

telecinetic-ui/
│
├── index.html
│
├── src/
│   ├── app.js          # inicialização principal
│   ├── handTracking.js # MediaPipe Hands + posição da mão
│   ├── cursor.js       # lógica do cursor virtual
│
├── styles/
│   ├── base.css        # estilo geral da página
│   └── cursor.css      # aparência do cursor controlado pela mão
│
└── README.md

````

---

## ▶️ Como rodar

1. Baixe ou clone:

```bash
git clone https://github.com/seu-user/telecinetic-ui
````

2. Abra o arquivo:

```
index.html
```

3. Permita o acesso à câmera.

A partir daí, mova sua mão na frente da webcam para controlar o cursor.

---

## 🔧 Como funciona internamente

1. **MediaPipe Hands** processa o vídeo da câmera
2. O modelo retorna 21 landmarks da mão
3. Pegamos a posição do ponto `index_finger_tip`
4. Convertamos essa posição para coordenadas de tela
5. Movemos um cursor HTML fictício
6. A interface reage aos movimentos

---

## 🧠 Expansões futuras

* Cliques por gesto de pinça
* Scroll por movimento vertical
* Botões interagíveis no ar
* Drag & drop gestual
* Reconhecimento mais avançado de gestos
* Animações de feedback visual futuristas

---

## 📜 Licença

MIT — totalmente livre para uso e modificação.

---

## 👤 Autor Ruan Cardozo

Criado para estudos de UX futurista, interações touchless e acessibilidade moderna.
