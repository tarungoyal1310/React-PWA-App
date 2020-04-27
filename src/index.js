import React from "react";
import ReactDom from "react-dom";
import App from "./App.js";

ReactDom.render(<App/>, document.getElementById("root"));


window.addEventListener('load', e => {
    // new PWAConfApp();
    registerSW();
  });

  async function registerSW() { 
    if ('serviceWorker' in navigator) { 
      try {
        await navigator.serviceWorker.register('./sw.js'); 
      } catch (e) {
        alert('ServiceWorker registration failed. Sorry about that.'); 
      }
    }
  }