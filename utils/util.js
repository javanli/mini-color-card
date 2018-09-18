export function rgbToHex(R, G, B) { return toHex(R) + toHex(G) + toHex(B) }
export function toHex(n) {
  n = parseInt(n, 10);
  if (isNaN(n)) return "00";
  n = Math.max(0, Math.min(n, 255));
  return "0123456789ABCDEF".charAt((n - n % 16) / 16)
    + "0123456789ABCDEF".charAt(n % 16);
}
export function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
export function colorsEqual(colors1,colors2) {
  if(colors1.length !== colors2.length) {
    return false;
  }
  for(let i = 0;i < colors1.length; i++) {
    if(colors1[i] !== colors2[i]){
      return false;
    }
  }
  return true;
}