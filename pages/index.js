import { React, useState, useEffect } from "react";
import { sendEmail } from "./emailjs";
import FileImage from "./Fileimage";
import axios from "axios";

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

  const [whats, setWhats] = useState("");
  const [face, setFace] = useState("");
  const [ig, setIg] = useState("");
  const [twitter, setTwitter] = useState("");
  const [refer, setRefer] = useState("");

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

  function checkPic1(event) {
    setPic1(event.target.value);
  }

  function checkPic2(event) {
    setPic2(event.target.value);
  }

  function checkPic3(event) {
    setPic3(event.target.value);
  }

  function checkPic4(event) {
    setPic4(event.target.value);
  }

  function checkPic5(event) {
    setPic5(event.target.value);

  }

  function checkPic6(event) {
    setPic6(event.target.value);
  }

  function validateImages() {
    if (checkPic1() ) {
      setShowButton(true);
    }
    else setShowButton(false);
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
    if (name.length > 3 && validatePhone(number) && validateEmail(email) && validateImages(pic1) 
    ) {
      setShowButton(true);
      console.log(setShowButton);
    } else {
      setShowButton(false);
    }
  }

  const submitForm = (event) => {
    event.preventDefault();
    setSubmitAttempted(true);
    if (showButton) {
      sendEmail(name, number, email, message);
      console.log("formulario enviado");
    }
  };

   return (
    <div className="form">
      
      <FileImage/>
      
{/*       <form onSubmit={submitForm}>
        <h1 className="form__title-1">Become a Star</h1>

        <div className="form__card">
          <h3 className="form__card__title-3">Full Name / Nombre Completo</h3>
          <input
            type="text"
            value={name}
            onChange={checkName}
            placeholder="Full Name / Nombre Completo"
            className="form__card__input"
          />

          <h3 className="form__card__title-3">Stage name / Nombre artístico</h3>

          <input
            type="text"
            value={artisticName}
            onChange={checkSecondName}
            placeholder="Stage name / Nombre artístico"
            className="form__card__input"
          />

          <h3 className="form__card__title-3">Email / Correo Electronico</h3>

          <input
            type="text"
            value={email}
            onChange={checkEmail}
            placeholder="Email / Correo Electronico"
            className="form__card__input"
          />

          <h3 className="form__card__title-3">Nacionality / Nacionalidad</h3>
          <input
            type="text"
            value={nacionality}
            onChange={checkNacionality}
            placeholder="Nacionality / Nacionalidad"
            className="form__card__input"
          />

          <h3 className="form__card__title-3">Postal Code</h3>

          <input
            type="text"
            value={postalCode}
            onChange={checkPostal}
            placeholder="Postal Code"
            className="form__card__input"
          />

          <h3 className="form__card__title-3">Address / Dirección</h3>

          <input
            type="text"
            value={address}
            onChange={checkAdress}
            placeholder="Address / Dirección "
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
            placeholder="Airport or Main Train station closest to you / Aeropuerto o estación de tren principal cerca de ti "
            className="form__card__input"
          />

          <h3 className="form__card__title-3">Weight (lb) / Peso (Kilos)</h3>

          <input
            type="text"
            value={weight}
            onChange={checkWeight}
            placeholder="Weight (lb) / Peso (Kilos)"
            className="form__card__input"
          />

          <h3 className="form__card__title-3">
            Height (In ft) / Altura ( En cm)
          </h3>

          <input
            type="text"
            value={height}
            onChange={checkHeight}
            placeholder="Height (In ft) / Altura ( En cm) "
            className="form__card__input"
          />

          <h3 className="form__card__title-3">
            Date of Birth / Fecha de Nacimiento
          </h3>

          <input
            type="date"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Date of Birth / Fecha de Nacimiento"
            className="form__card__input"
          />

          <h3 className="form__card__title-3">
            English Level / Nivel de Inglés
          </h3>

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
            placeholder="Please mention projects you are interested participating in / Favor de indicar en que proyectos le interesa participar actualmente. Ej: Gay, Bisexual or Heterosexual. "
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
            placeholder="Physical complexion. Ej: twink, slim, toned, average, muscular, stocky or chubby / Complexión Física. Ejemplo: esbelto, tonificado, promedio, musculoso, fornido"
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

          <h3 className="form__card__title-3">Phone</h3>

          <input
            type="text"
            value={number}
            onChange={checkPhone}
            placeholder="Phone"
            className="form__card__input"
          />

          <h3 className="form__card__title-3">Whatsapp (Optional)</h3>

          <input
            type="text"
            value={whats}
            placeholder="Whats"
            className="form__card__input"
          />

          <h3 className="form__card__title-3">Facebook (Optional)</h3>

          <input
            type="text"
            value={face}
            placeholder="Face"
            className="form__card__input"
          />

          <h3 className="form__card__title-3">Instagram (Optional)</h3>

          <input
            type="text"
            value={ig}
            placeholder="Whats"
            className="form__card__input"
          />

          <h3 className="form__card__title-3">Twitter (Optional)</h3>

          <input
            type="text"
            value={twitter}
            placeholder="twitter"
            className="form__card__input"
          />

          <h3 className="form__card__title-3">Referido (Optional)</h3>

          <input
            type="text"
            value={refer}
            placeholder="Refer"
            className="form__card__input"
          />

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Describe your proyect in details"
            className="form__card__text-area"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
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
      </form> */}
    </div>
  );
}; 

export default Form;
