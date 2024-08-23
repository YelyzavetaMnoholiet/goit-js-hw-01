function getElementWidth(content, padding, border) {
  const normalizeContent = parseFloat(content);
  const normalizePadding = parseFloat(padding);
  const normalizeBorder = parseFloat(border);

  const totalWidth =
    normalizeContent + normalizePadding * 2 + normalizeBorder * 2;
  return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
