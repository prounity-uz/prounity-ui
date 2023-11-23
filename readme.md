# Prounity UI starter

## Description
This is a starter project for Unity UI development. It contains a basic UI setup with a main menu and a game scene. The main menu contains a button to start the game and a button to quit the game. The game scene contains a button to return to the main menu. The project also contains a basic UI framework with a base class for UI screens and a UI manager to handle the screens. 

## Getting started
```
npm install prounity-ui --save
```

## Usage
```
<link
  href="https://fonts.googleapis.com/css2?family=Open+Sans&amp;family=Oswald&amp;family=Roboto&amp;display=swap"
  rel="stylesheet"
/>

<style>
  @font-face {
    font-family: "Material Symbols";
    font-style: normal;
    font-weight: 100 700;
    src: url(https://fonts.gstatic.com/s/materialsymbolsoutlined/v151/kJEhBvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oFsLjBuVY.woff2)
      format("woff2");
  }
</style>

<script
  type="module"
  src="./node_modules/pro-unity-ui/dist/pu-ui/pu-ui.esm.js"
></script>

<pu-button>
  <pu-icon slot="start">star</pu-icon>
  Elevated button
</pu-button>
```