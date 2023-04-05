import emailjs from 'emailjs-com';

const serviceId = 'service_nuieqny';
const templateId = 'template_csgs8d9';
const userId = '7EVZUvF_ikhYjmd3v';


const readFileAsBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result.replace(/^data:.+;base64,/, ''));
    };
    reader.onerror = reject;
  });



export const sendEmail = async (
  name, artisticName, email, nacionality, postalCode, address, airport,
  weight, height, dateBirth, eng, gender, film, physic, files, number, whats, face, ig, twitter, refer
) => {
  const templateParams = {
    name, artisticName, email, nacionality, postalCode, address, airport, files,
    weight, height, dateBirth, eng, gender, film, physic, number, whats, face, ig, twitter, refer
  };

  const attachmentParams = [];


  for (let i = 0; i < 6; i++) {
    const file = files[i];
    if (file && file.files && file.files[0]) {
      const fileData = await readFileAsBase64(file.files[0]);
      attachmentParams.push({ fileName: file.files[0].name, data: fileData });
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
