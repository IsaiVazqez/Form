/* eslint-disable react/no-unescaped-entities */
import { React, useState, useEffect } from "react";
import { sendEmail } from "./emailjs";
import axios from "axios";
import Link from "next/link";

const Form = () => {
  const [name, setName] = useState("");
  const [artisticName, setrtisticName] = useState("");
  const [nacionality, setNacionality] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [airport, setAirtport] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setheight] = useState("");
  const [film, setFilm] = useState("");
  const [physic, setPhysic] = useState("");
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const [file3, setFile3] = useState("");
  const [file4, setFile4] = useState("");
  const [file5, setFile5] = useState("");
  const [file6, setFile6] = useState("");
  const [files, setFiles] = useState("");

  const [eng, setEng] = useState("");
  const [phone, setPhone] = useState("");
  const [whats, setWhats] = useState("");
  const [face, setFace] = useState("");
  const [ig, setIg] = useState("");
  const [twitter, setTwitter] = useState("");
  const [refer, setRefer] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [gender, setGender] = useState("");
  const [comfortable, setComfortable] = useState(true);

  function checkName(event) {
    setName(event.target.value);
    console.log(checkName);
    toggleButton();
    console.log(toggleButton);
  }

  function checkSecondName(event) {
    setrtisticName(event.target.value);
    toggleButton();
  }

  function checkNacionality(event) {
    setNacionality(event.target.value);
    toggleButton();
  }

  function checkAdress(event) {
    setAddress(event.target.value);
    toggleButton();
  }

  function checkPostal(event) {
    setPostalCode(event.target.value);
    toggleButton();
  }

  function checkAirport(event) {
    setAirtport(event.target.value);
    toggleButton();
  }

  function checkWeight(event) {
    setWeight(event.target.value);
    toggleButton();
  }

  function checkHeight(event) {
    setheight(event.target.value);
    toggleButton();
  }

  function checkFilm(event) {
    setFilm(event.target.value);
    toggleButton();
  }

  function checkPhysic(event) {
    setPhysic(event.target.value);
    toggleButton();
  }

  const checkFile1 = (event) => {
    setFile1(event.target.value);

    // Pass file to sendEmail function
  }

  function checkFile2(event) {
    setFile2(event.target.value);
  }

  function checkFile3(event) {
    setFile3(event.target.value);
  }

  function checkFile4(event) {
    setFile4(event.target.value);
  }

  function checkFile5(event) {
    setFile5(event.target.value);
  }

  function checkFile6(event) {
    setFile6(event.target.value);
  }

  function checkWhats(event) {
    setWhats(event.target.value);
  }

  function checkFile6(event) {
    setFile6(event.target.value);
  }

  function checkFace(event) {
    setFace(event.target.value);
  }

  function checkIg(event) {
    setIg(event.target.value);
  }

  function checkTwitter(event) {
    setTwitter(event.target.value);
  }

  function checkRefer(event) {
    setRefer(event.target.value);
  }

  function checkEng(event) {
    setEng(event.target.value);
    toggleButton();
  }

  function checkPhone(event) {
    setPhone(event.target.value);
    toggleButton();
  }

  

  function checkPhone(event) {
    let phone = event.target.value;
    phone = phone.replace(/\D/g, "");
    phone = phone.substring(0, 12);
    let formattedPhone = phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    setNumber(formattedPhone);
    console.log(toggleButton);

    toggleButton();
  }

  function validatePhone(phone) {
    let re = /^[\+]?[(][0-9]{3}[)][-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    console.log(validatePhone);
    return re.test(phone);
  }

  function checkEmail(event) {
    setEmail(event.target.value);
    toggleButton();
  }
  function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function toggleButton(isValidPhone) {
    if (name.length > 3 && validatePhone(number) && validateEmail(email)) {
      setShowButton(true);
      console.log(setShowButton);
    } else {
      setShowButton(false);
    }
  }
  const handleFileSelect = (event, index) => {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = () => {
      setFiles(prevState => {
        const newFiles = [...prevState];
        newFiles[index] = { file, data: reader.result.split(',')[1] };
        return newFiles;
      });
    };
  
    reader.readAsDataURL(file);
  };
  
 

  const submitForm = (event) => {
    event.preventDefault();
    
    setSubmitAttempted(true);
    if (showButton) {
      sendEmail(
        name,
        artisticName,
        email,
        nacionality,
        postalCode,
        address,
        airport,
        weight,
        height,
        dateBirth,
        eng,
        gender,
        film,
        physic,
        files,
        number,
        whats,
        face,
        ig,
        twitter,
        refer
      );
      console.log("formulario enviado");
    }
  };


  return (
    <div className="form">
      <form onSubmit={submitForm}>
        <h1 className="form__title-1">Become a Star</h1>

        <div className="form__card">
          <h3 className="form__card__title-3">Full Name / Nombre Completo</h3>
          <input
            type="text"
            value={name}
            onChange={checkName}
            placeholder="Robert Patterson"
            className="form__card__input"
          />

          <h3 className="form__card__title-3">Stage name / Nombre artístico</h3>

          <input
            type="text"
            value={artisticName}
            onChange={checkSecondName}
            placeholder="Jonhy jr."
            className="form__card__input"
          />

          <h3 className="form__card__title-3">Email / Correo Electronico</h3>

          <input
            type="text"
            value={email}
            onChange={checkEmail}
            placeholder="Luis@gmail.com"
            className="form__card__input"
          />

          <h3 className="form__card__title-3">Nacionality / Nacionalidad</h3>
          <input
            type="text"
            value={nacionality}
            onChange={checkNacionality}
            placeholder="Mexican / Mexicano"
            className="form__card__input"
          />

          <h3 className="form__card__title-3">Postal Code</h3>

          <input
            type="text"
            value={postalCode}
            onChange={checkPostal}
            placeholder="982030"
            className="form__card__input"
          />

          <h3 className="form__card__title-3">Address / Dirección</h3>

          <input
            type="text"
            value={address}
            onChange={checkAdress}
            placeholder="Street 5"
            className="form__card__input"
          />

          <h3 className="form__card__title-3">
            Airport or Main Train station closest to you / Aeropuerto o estación
            de tren principal cerca de ti
          </h3>

          <input
            type="text"
            value={airport}
            onChange={checkAirport}
            placeholder="Airport City"
            className="form__card__input"
          />

          <h3 className="form__card__title-3">Weight (lb) / Peso (Kilos)</h3>

          <input
            type="text"
            value={weight}
            onChange={checkWeight}
            placeholder="120lb/ 75kg"
            className="form__card__input"
          />

          <h3 className="form__card__title-3">
            Height (In ft) / Altura ( En cm)
          </h3>

          <input
            type="text"
            value={height}
            onChange={checkHeight}
            placeholder="180CM "
            className="form__card__input"
          />

          <h3 className="form__card__title-3">
            Date of Birth / Fecha de Nacimiento
          </h3>

          <input
            type="date"
            value={dateBirth}
            onChange={(e) => setDateBirth(e.target.value)}
            className="form__card__input"
          />

          <h3 className="form__card__title-3">
            English Level / Nivel de Inglés
          </h3>

          <input
            type="text"
            value={eng}
            onChange={checkEng}
            placeholder="B2+ / Native "
            className="form__card__input"
          />

          <h3 className="form__card__title-3">
            Sexual Orientation / Orientación Sexual
          </h3>
          <div className="gender-form">
            <p>Gay</p>
            <input
              className="gender-button"
              type="checkbox"
              placeholder="Gay"
              checked={gender === "Gay"}
              onChange={() => setGender("Gay")}
            />
            <p>Bisexual</p>
            <input
              className="gender-button"
              type="checkbox"
              placeholder="Bisexual"
              checked={gender === "Bisexual"}
              onChange={() => setGender("Bisexual")}
            />
            <p>Straight</p>
            <input
              className="gender-button"
              type="checkbox"
              placeholder=""
              checked={gender === "Straight"}
              onChange={() => setGender("Straight")}
            />
          </div>

          <h3 className="form__card__title-3">
            Please mention projects you are interested participating in / Favor
            de indicar en que proyectos le interesa participar actualmente. Ej:
            Gay, Bisexual or Heterosexual.
          </h3>

          <input
            type="text"
            value={film}
            onChange={checkFilm}
            placeholder="Bisexual "
            className="form__card__input"
          />

          <h3 className="form__card__title-3">
            Physical complexion. Ej: twink, slim, toned, average, muscular,
            stocky or chubby / Complexión Física. Ejemplo: esbelto, tonificado,
            promedio, musculoso, fornido
          </h3>

          <input
            type="text"
            value={physic}
            onChange={checkPhysic}
            placeholder="Toned / Esbelto"
            className="form__card__input"
          />

          <h3 className="form__card__title-3">
            What is your dick size? / ¿Cuál es el tamaño de tu pene?
          </h3>

          <select name="dick-range" className="form__card__select">
            <option value="value1">5'</option>
            <option value="value2">6'</option>
            <option value="value3">7'</option>
            <option value="value4">8'</option>
            <option value="value5">9'</option>
            <option value="value6">10'</option>
            <option value="value7">11'</option>
            <option value="value8">12+'</option>
            <option value="value9">14CM'</option>
            <option value="value10">16CM'</option>
            <option value="value11">18CM'</option>
            <option value="value12">20CM'</option>
            <option value="value13">22CM'</option>
            <option value="value14">24CM'</option>
            <option value="value15">26CM'</option>
            <option value="value16">28CM'</option>
            <option value="value17">30CM+'</option>
          </select>

          <h3 className="form__card__title-3">Foreskin? / ¿Prepucio?</h3>

          <select name="foreskin" className="form__card__select">
            <option value="value1">cut</option>
            <option value="value12">uncut</option>
          </select>

          <h3 className="form__card__title-3">
            Alternate photo of your face, if it has a different style or "look"
            that you consider to look better than the first photo / Foto
            alternada de su cara, si tiene un estilo diferente o "look" que
            considere que se vea mejor que la primera foto.
          </h3>

          <input
            type="file"
            onChange={(e) => handleFileSelect(e, 0)}
            className="form__card__input"
          />

          <h3 className="form__card__title-3">
            Photo of your face, make sure the photo is CLOSE and CLEAR. (No
            caps, no glasses, or other distractions) / Foto de su cara,
            asegurarse de que las fotos sea CERCA y CLARA. (Sin gorras, lentes u
            otras distracciones)
          </h3>

          <input
            type="file"
            onChange={(e) => handleFileSelect(e, 1)}
            className="form__card__input"
          />

          <h3 className="form__card__title-3">
            Clear photo of your torso (head to waist). The photo must be recent
            and accurately represent your current appearance / Foto con claridad
            de su torso (cabeza a cintura) sin interrupciones. La foto debe ser
            reciente y representar exactamente su apariencia actual.
          </h3>

          <input
            type="file"
            onChange={(e) => handleFileSelect(e, 2)}
            className="form__card__input"
          />

          <h3 className="form__card__title-3">
            Front Full Body Photo (nude) / Foto de frente de cuerpo completo
            (desnudo)
          </h3>

          <input
            type="file"
            onChange={(e) => handleFileSelect(e, 3)}
            className="form__card__input"
          />

          <h3 className="form__card__title-3">
            Side Full Body Photo (nude) / Foto de lado de cuerpo completo
            (desnudo)
          </h3>

          <input
            type="file"
            onChange={(e) => handleFileSelect(e, 4)}
            className="form__card__input"
          />

          <h3 className="form__card__title-3">
            Any other photo that you think will help us evaluate you as a model
            / Cualquier otra foto que considere que nos sea de ayuda a
            evaluarlo(a) como modelo.
          </h3>

          <input
            type="file"
            onChange={(e) => handleFileSelect(e, 5)}
            className="form__card__input"
          />

          <h3 className="form__card__title-3">Phone</h3>

          <input
            type="text"
            value={number}
            onChange={checkPhone}
            placeholder="9992350123"
            className="form__card__input"
          />

          <h3 className="form__card__title-3">Whatsapp (Optional)</h3>

          <input
            type="text"
            value={whats}
            onChange={checkWhats}
            placeholder="9999345842"
            className="form__card__input"
          />

          <h3 className="form__card__title-3">Facebook (Optional)</h3>

          <input
            type="text"
            value={face}
            onChange={checkFace}
            placeholder="facebook.com/luis12345"
            className="form__card__input"
          />

          <h3 className="form__card__title-3">Instagram (Optional)</h3>

          <input
            type="text"
            value={ig}
            onChange={checkIg}
            placeholder="instagram.com/luis12345"
            className="form__card__input"
          />

          <h3 className="form__card__title-3">Twitter (Optional)</h3>

          <input
            type="text"
            value={twitter}
            onChange={checkTwitter}
            placeholder="@LuisVallarta"
            className="form__card__input"
          />

          <h3 className="form__card__title-3">Referido (Optional)</h3>

          <input
            type="text"
            value={refer}
            onChange={checkRefer}
            placeholder="Luis Gonzalez"
            className="form__card__input"
          />

          <div className="form__card__btn-container">
            <p className="form__card__btn-container__alert">
              {showButton
                ? "Todos los campos están completos"
                : "Completa todos los campos requeridos"}
            </p>
            <button
              className={`form__card__btn-container__btn ${
                !showButton && "form__card__btn-container__btn--disabled"
              }`}
              disabled={!showButton}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
