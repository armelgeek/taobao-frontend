import { useState, useContext } from "react";
import { useRouter } from "next/router";
import cookies from "next-cookies";

import { UserDispatchContext } from "../context/UserContext";
import Notice from "../components/notice";
import Input from "../components/input";

const form = {
  id: "login",
  inputs: [
    {
      id: "email",
      type: "email",
      label: "Adresse e-mail",
      required: true,
      value: "",
    },
    {
      id: "password",
      type: "password",
      label: "Mot de passe",
      required: true,
      value: "",
    },
  ],
  submitButton: {
    type: "submit",
    label: "Connexion",
  },
  button: {
    type: "button",
    label: "Mot de pass oublié ?",
  },
};

const LoginPage = () => {
  const RESET_NOTICE = { type: "", message: "" };
  const [notice, setNotice] = useState(RESET_NOTICE);
  const dispatch = useContext(UserDispatchContext);
  const router = useRouter();

  const values = {};
  form.inputs.forEach((input) => (values[input.id] = input.value));
  const [formData, setFormData] = useState(values);

  const handleInputChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNotice(RESET_NOTICE);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/users/login`,
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );
      const data = await response.json();
      if (data.errCode) {
        setNotice({ type: "ERROR", message: data.message });
      } else {
        dispatch({ type: "LOGIN" });
        router.push("/pages");
      }
    } catch (err) {
      console.log(err);
      setNotice({ type: "ERROR", message: "Quelque chose d'inattendu s'est produit." });
      dispatch({ type: "LOGOUT" });
    }
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    router.push("/forgotPassword");
  };

  return (
    <>
    <section className="section-content content-login padding-y" >
    <div className="container mb-4">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
           <div className="card card-content-login mx-auto" >
      <div className="card-body">
      <h4 className="card-title mb-4">Se connecter</h4>
      <hr/>
      <form id={form.id} onSubmit={handleSubmit}>
        {form.inputs.map((input, key) => {
          return (
            <Input
              key={key}
              formId={form.id}
              id={input.id}
              type={input.type}
              label={input.label}
              required={input.required}
              value={formData[input.id]}
              setValue={(value) => handleInputChange(input.id, value)}
            />
          );
        })}
        {notice.message && (
          <Notice status={notice.type} mini>
            {notice.message}
          </Notice>
        )}
        <button class=" mt-2 btn btn-primary btn-block mr-3" type={form.submitButton.type}>{form.submitButton.label}</button>
      </form>
     
      </div>
    </div>
     <p className="text-center mt-4">vous n'avez pas de compte ? <a href="#"> <strong>Créer un compte</strong></a></p>


        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
 
</section>
    </>
  );
};

export const getServerSideProps = (context) => {
  const { token } = cookies(context);
  const res = context.res;
  if (token) {
    res.writeHead(302, { Location: `/account` });
    res.end();
  }
  return { props: {} };
};

export default LoginPage;
