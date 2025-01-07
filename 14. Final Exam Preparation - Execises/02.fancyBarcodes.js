function fancyBarcodes(arr) {
  let count = +arr.shift();
  let barcodePattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/;
  let numberPattern = /[0-9]+/g;

  for (let i = 0; i < count; i++) {
    let barcode = arr[i];
    let isValidBarcode = barcode.match(barcodePattern);
    if (isValidBarcode) {
      let hasNumber = barcode.match(numberPattern);
      if (hasNumber) {
        console.log(`Product group: ${hasNumber.join('')}`);
      } else {
        console.log(`Product group: 00`);
      }
    } else {
      console.log('Invalid barcode');
    }
  }
}

fancyBarcodes([
  '6',
  '@###Val1d1teM@###',
  '@#ValidIteM@#',
  '##InvaliDiteM##',
  '@InvalidIteM@',
  '@#Invalid_IteM@#',
  '@#ValiditeM@#',
]);
