import { useState, useContext } from "react";
import { useRouter } from "next/router";
import cookies from "next-cookies";

import { UserDispatchContext } from "../context/UserContext";
import Input from "../components/input";
import Notice from "../components/notice";

const form = {
  id: "signup",
  inputs: [
    {
      id: "name",
      type: "text",
      label: "Nom",
      required: true,
      value: "",
    },
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
    label: "Créer maintenant!",
  },
};

const SignupPage = () => {
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
        `${process.env.NEXT_PUBLIC_API}/users/signup`,
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
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
        setNotice({
          type: "SUCCESS",
          message:
            "Succès! Vérifiez votre boîte de réception pour confirmer votre e-mail. Vous allez maintenant être redirigé.",
        });
        setTimeout(() => {
          router.push("/");
        }, 4000);
      }
    } catch (err) {
      console.log(err);
      setNotice({ type: "ERROR", message: "Quelque chose d'inattendu s'est produit." });
      dispatch({ type: "LOGOUT" });
    }
  };

  return (
    <>
    <section class="section-content padding-y">
     <div className="container mb-4">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
  <div class="card card-content-login mx-auto">
      <article class="card-body">
        <header class="mb-4"><h4 class="card-title">Créer un compte</h4></header>
     <form id={form.id} method="post" onSubmit={handleSubmit}>
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
        <button className="btn btn-primary btn-block mt-2" type={form.submitButton.type}>{form.submitButton.label}</button>
      </form>
    </article>
    </div> 
    <p class="text-center mt-4">Vous avez déja un compte ? <a href="/login"><strong> Se connecter</strong></a></p>
    <br/><br/>
     

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

export default SignupPage;
