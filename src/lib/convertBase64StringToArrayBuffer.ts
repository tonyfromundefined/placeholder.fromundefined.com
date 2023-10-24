/**
 * https://stackoverflow.com/questions/21797299/convert-base64-string-to-arraybuffer
 */
export function convertBase64StringToArrayBuffer(str: string) {
  const binaryString = atob(str);
  const bytes = new Uint8Array(binaryString.length);

  for (let i = 0; i < binaryString.length; i += 1) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return bytes.buffer;
}
