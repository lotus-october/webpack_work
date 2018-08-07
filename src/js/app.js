import pluginBubbly from './plugin/bubbly-bg';
import css from '../scss/test.css';

/**
 * option
 * animate: false, // default is true
 * blur: 1, // default is 4
 * bubbleFunc: () => `hsla(${Math.random() * 360}, 100%, 50%, ${Math.random() * 0.25})`, // default is () => `hsla(0, 0%, 100%, ${r() * 0.1})`)
 * bubbles: 100, // default is Math.floor((canvas.width + canvas.height) * 0.02);
 * canvas: document.querySelector("#background"), // default is created and attached
 * colorStart: "#4c004c", // default is blue-ish
 * colorStop: "#1a001a",// default is blue-ish
 * compose: "lighter", // default is "lighter"
 */
bubbly({
  colorStart: '#fff',
  colorStop: '#fff',
  bubbles: 10,
  blur: 1,
  bubbleSizeAdjust: 60,
  compose: 'source-over',
  //bubbleFunc:() => `hsla(178, 100%, 58%, .6)`
  bubbleFunc:() => `hsla(178, 98%, 36%, .6)`
});
