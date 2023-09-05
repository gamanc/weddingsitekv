export const hexToCssFilters = (hexColor: string): string => {
  const hex = hexColor.replace(/^#/, "");
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  //   const invert = (100 - (r / 255) * 100).toFixed(2);
  const invert = "10";
  const sepia = ((r / 255) * 100).toFixed(2);
  const saturate = ((Math.max(r, g, b) / 255) * 3308).toFixed(2);
  const hueRotate = (
    (Math.atan2(Math.sqrt(3) * (g - b), 2 * r - g - b) * 180) / Math.PI +
    360
  ).toFixed(2);
  const brightness = ((r / 255) * 100 + 100).toFixed(2);
  const contrast = ((Math.max(r, g, b) / 255) * 100).toFixed(2);

  const cssFilter = `invert(${invert}%) sepia(${sepia}%) saturate(${saturate}%) hue-rotate(${hueRotate}deg) brightness(${brightness}%) contrast(${contrast}%)`;

  return cssFilter;
};
