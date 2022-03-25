import { useRef } from "react";

const ContactComponent = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3pz7abp",
        "template_jzk50dh",
        form.current,
        "ZWdlX-m5Px-VM3K3U"
      )
      .then(
        (result) => {
          alert("votre message a été envoyé avec succès");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  const form = useRef();
  return (
    <div className={"container"}>
      <div className={"row"}>
        <div className="contact">
          <div className="contact__info">abc@gmail.com</div>
          <form
            className="contact__form"
            autoComplete="off"
            onSubmit={sendEmail}
            ref={form}
          >
            <p className="para">
              Ecrivez nous, et On vous repondra aussi vite que possible
            </p>
            <input
              type={"text"}
              placeholder="Suject"
              className="fields"
              name="user_subject"
              required
            />
            <input
              type={"text"}
              placeholder="Ton nom"
              className="fields"
              name="user_name"
              required
            />
            <input
              type={"email"}
              placeholder="Ton email"
              className="fields"
              autoComplete="new password"
              name="user_email"
              required
            />
            <textarea
              placeholder="Ton message"
              className="fields"
              name="message"
              required
            />
            <button>Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
