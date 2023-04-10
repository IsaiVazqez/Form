import emailjs from 'emailjs-com';

const serviceId = 'service_nuieqny';
const templateId = 'template_csgs8d9';
const userId = '7EVZUvF_ikhYjmd3v';

const MAX_ATTACHMENT_SIZE = 40 * 1024; // 40 KB

async function readAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function compressFile(file) {
  const maxSize = MAX_ATTACHMENT_SIZE;
  let quality = 0.7; // Starting image quality
  let compressedDataUrl;

  do {
    // Reduce image quality and check size
    quality -= 0.1;
    const compressedFile = await new Promise((resolve) => {
      new Compressor(file, {
        quality,
        maxWidth: 800,
        maxHeight: 800,
        mimeType: 'image/jpeg',
        convertSize: maxSize,
        success: (result) => resolve(result),
      });
    });

    compressedDataUrl = await readAsDataURL(compressedFile);
  } while (compressedDataUrl.length > maxSize && quality > 0);

  return {
    dataUrl: compressedDataUrl,
    name: compressedFile.name,
  };
}

export const sendEmail = async (
  name, artisticName, email, nacionality, postalCode, address, airport,
  weight, height, dateBirth, eng, gender, film, physic, files, number, whats, face, ig, twitter, refer
) => {
  const templateParams = {
    name, artisticName, email, nacionality, postalCode, address, airport,
    weight, height, dateBirth, eng, gender, film, physic, number, whats, face, ig, twitter, refer, files
  };

  const attachmentParams = [];

  for (let i = 0; i < 6; i++) {
    const file = files[i];
    if (file && file.files && file.files[0]) {
      const compressedFile = await compressFile(file.files[0]);
      console.log(`Compressed size of ${compressedFile.name}: ${compressedFile.dataUrl.length}`);
      attachmentParams.push({ fileName: compressedFile.name, data: compressedFile.dataUrl });
    }
  }

  emailjs.send(serviceId, templateId, templateParams, userId, null, attachmentParams)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
      console.log('FAILED...', err);
    });
};

export default sendEmail;
