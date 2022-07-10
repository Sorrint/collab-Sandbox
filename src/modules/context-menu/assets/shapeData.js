import { random } from '../utils';

export const shapeData = () => {
  const arrayWithSvg = [
    [
      `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve"> <path class="linesandangles_een" d="M30,16l-9,7v-2.534L26.742,16L21,11.534V9L30,16z M11,20.466L5.258,16L11,11.534V9l-9,7l9,7V20.466z M17.794,9l-6,14h2.177l6-14H17.794z"/></svg>`,
    ],
    [
      `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve"> <path class="linesandangles_een" d="M6,4v24l20-12L6,4z M8,7.532L22.113,16L8,24.468V7.532z"/> </svg>`,
    ],
    [
      `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve"> <path class="linesandangles_een" d="M4,4v24h24V4H4z M10,6h12v7H10V6z M26,26H6V6h2v9h16V6h2V26z M18,7h3v5h-3V7z"/> </svg>`,
    ],
    [
      `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    width="100px" height="100px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve"> <path class="linesandangles_een" d="M24,19V7c0-1.657-1.343-3-3-3H7C5.343,4,4,5.343,4,7v5h4v12c0,1.657,1.343,3,3,3h14 c1.657,0,3-1.343,3-3v-5H24z M8,10H6V7c0-0.551,0.449-1,1-1c0.552,0,1,0.448,1,1V10z M10,24V7c0-0.35-0.06-0.687-0.171-1H21c0.551,0,1,0.449,1,1v12H12v5c0,0.552-0.448,1-1,1C10.449,25,10,24.551,10,24z M26,24c0,0.551-0.449,1-1,1H13.829
   C13.94,24.687,14,24.35,14,24v-3h12V24z M20,12h-8v-2h8V12z M20,16h-8v-2h8V16z"/> </svg>`,
    ],
    [
      `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    width="100px" height="100px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve"> <path class="linesandangles_een" d="M16,8c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S20.411,8,16,8z M16,22c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S19.309,22,16,22z M15,26h2v3h-2V26z M17,6h-2V3h2V6z M29,15v2h-3v-2H29z M3,15h3v2H3V15z M23.778,22.364l2.121,2.121l-1.414,1.414l-2.121-2.121L23.778,22.364z M8.222,9.636L6.101,7.515L7.515,6.1l2.121,2.121
   L8.222,9.636z M24.485,6.1l1.414,1.414l-2.121,2.121l-1.414-1.414L24.485,6.1z M8.222,22.364l1.414,1.414l-2.121,2.121l-1.414-1.414L8.222,22.364z"/> </svg>`,
    ],
    [
      `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"   width="100px" height="100px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve"> <path class="linesandangles_een" d="M27.577,12.912c-1.401-5.23-6.164-8.884-11.58-8.884c-0.48,0-0.966,0.029-1.442,0.087L14.004,5.85c1.146,1.037,1.963,2.37,2.361,3.854c1.142,4.261-1.396,8.657-5.657,9.798c-1.482,0.398-3.052,0.357-4.518-0.118l-1.228,1.344c1.888,4.429,6.214,7.291,11.021,7.291h0.001c1.043,0,2.089-0.138,3.106-0.411c3.096-0.83,5.684-2.815,7.286-5.591C27.981,19.242,28.407,16.008,27.577,12.912z M24.646,21.018c-1.336,2.313-3.492,3.968-6.072,4.659c-0.849,0.228-1.72,0.343-2.589,0.343h-0.001c-3.312,0-6.35-1.631-8.191-4.282c1.15,0.101,2.313-0.002,3.433-0.303
   c5.326-1.427,8.498-6.921,7.071-12.248c-0.301-1.125-0.794-2.178-1.453-3.123c4.155,0.353,7.707,3.282,8.802,7.365C26.337,16.01,25.981,18.705,24.646,21.018z"/></svg>`,
    ],
    [
      `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve"><path class="linesandangles_een" d="M28.099,19.043l-3.297,0.883l-1.873-1.082l0.002-5.692l1.872-1.081l3.297,0.883l0.518-1.932
   l-2.732-0.732l0.732-2.732l-1.932-0.518l-0.883,3.297l-1.873,1.082L17,8.576V6.414L19.414,4L18,2.586l-2,2l-2-2L12.586,4L15,6.414v2.162l-4.928,2.846l-1.873-1.082L7.315,7.043L5.383,7.561l0.732,2.732l-2.732,0.732l0.518,1.932l3.297-0.883l1.874,1.082v5.69l-1.874,1.082l-3.297-0.883l-0.518,1.932l2.732,0.732l-0.732,2.732l1.932,0.518l0.883-3.297l1.873-1.082L15,23.424v2.162L12.586,28
   L14,29.414l2-2l2,2L19.414,28L17,25.586v-2.162l4.928-2.846l1.873,1.082l0.883,3.297l1.932-0.518l-0.732-2.732l2.732-0.732L28.099,19.043z M20.929,17.691L18,16l2.93-1.691L20.929,17.691z M19.928,12.577L17,14.268v-3.382L19.928,12.577z M15,10.886v3.382l-2.928-1.691L15,10.886z M11.072,14.31L14,16l-2.928,1.69V14.31z M12.072,19.423L15,17.732v3.382L12.072,19.423z M17,21.114v-3.382
   l2.928,1.691L17,21.114z"/></svg>`,
    ],
    [
      `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve"><path class="linesandangles_een" d="M4,11v10h5l10,6V5L9,11H4z M17,8.532v14.935L9.554,19H6v-6h3.554L17,8.532z M21.657,21.657
   l-1.414-1.414c2.339-2.34,2.339-6.146,0-8.486l1.414-1.414C24.775,13.462,24.775,18.538,21.657,21.657z M24.485,24.485l-1.414-1.414c3.899-3.899,3.899-10.243,0-14.143l1.414-1.414C29.164,12.193,29.164,19.807,24.485,24.485z"/></svg>`,
    ],
    [
      `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve"> <path class="linesandangles_een" d="M16,4v2C10.486,6,6,10.486,6,16s4.486,10,10,10s10-4.486,10-10c0-3.594-1.937-6.866-5-8.64V11h-2V4h7v2h-3.375C25.941,8.199,28,11.933,28,16c0,6.617-5.383,12-12,12S4,22.617,4,16S9.383,4,16,4z"/> </svg>`,
    ],
  ];

  const randomNumber = random(0, arrayWithSvg.length - 1);

  return arrayWithSvg[randomNumber];
};
