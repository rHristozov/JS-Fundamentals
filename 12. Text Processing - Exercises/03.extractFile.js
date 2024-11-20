function extractFile(str) {
  let lastIndexOfExtension = str.lastIndexOf('.');
  let lastIndexOfName = str.lastIndexOf('\\');

  let extension = str.substring(lastIndexOfExtension + 1);
  let name = str.substring(lastIndexOfName + 1, lastIndexOfExtension);

  console.log(`File name: ${name}`);
  console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
