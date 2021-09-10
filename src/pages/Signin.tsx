import React, { useContext } from "react";
import { useState } from "react";
import { GlobalContext } from "../services/AppContext";
import { getUsers, getUserInfo } from "../services/HTTPContext";
import CommonFuntions from "../services/CommonFunctions";

const SignIn = ({ ...props }) => {
  let { data, updateUserDetails, updateTemplates } = useContext(GlobalContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageError, setMessageError] = useState("");
  const signIn = () => {
    if (email === "" || password === "") {
      setMessageError("Please fill all fields");
    } else {
      getUsers().then((response) => {
        let list = response.filter(
          (user: any) => user.email === email && user.password === password
        );
        if (list.length !== 0) {
          getUserInfo(list[0].id)
            .then((info) => {
              console.log(info);
              let list: any = [];
              info.userTemplates.map((t: any, index) => {
                let templateInfo = {
                  id: t.id,
                  name: t.templateName,
                };
                list.push(templateInfo);
              });
              updateTemplates(list);
              updateUserDetails(info.userDetails);
            })
            .then((final) => {
              sessionStorage.setItem("OpenCVId", list[0].id);
              props.history.push("/dashboard");
            });
        } else {
          setMessageError("User Not Found");
        }
      });
    }
  };

  return (
    <div>
      <div className=" rounded flex justify-center items-center">
        <div className="flex-col">
         
          <div>
            <div className="text-red-500">{messageError}</div>
            <input
              className="rounded p-3 bg-white border-b-2"
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              className="rounded p-3 bg-white border-b-2"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="p-3">
            <button
              onClick={() => signIn()}
              className="rounded-full text-white p-3 w-full  bg-indigo-500"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
