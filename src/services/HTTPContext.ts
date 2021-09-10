import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "./AppContext";

export const addUser = async (
  username: string,
  password: string,
  email: string,
  token: string,
  verified: boolean
) => {
  const id = uuidv4();
  const body = {
    id: id,
    username: username,
    password: password,
    email: email,
    token: token,
    verified: verified,
  };
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  return await fetch("http://localhost:8000/users/", requestOptions).then(
    (response) => response.json()
  );
};

export const addTemplate = async (
  userID: string,
  templateIndex: string,
  templateName: string
) => {
  const id = uuidv4();
  const body = {
    id: id,
    userID: userID,
    templateIndex: templateIndex,
    templateName: templateName,
  };
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  await addTemplateSettings(id);
  return await fetch("http://localhost:8000/templates/", requestOptions).then(
    (response) => JSON.stringify(body)
  );
};

export const updateUser = async (
  id: string,
  username: string,
  password: string,
  email: string,
  token: string,
  verified: boolean
) => {
  const body = {
    id: id,
    username: username,
    password: password,
    email: email,
    token: token,
    verified: verified,
  };
  const requestOptions = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  return await fetch("http://localhost:8000/users/" + id, requestOptions).then(
    (response) => response.json()
  );
};

export const updateTemplate = async (body: any) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  return await fetch(
    "http://localhost:8000/templates/" + body.id,
    requestOptions
  ).then((response) => response.json());
};

export const deleteTemplate = async (id: any) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  await deleteSettings(id);

  return await fetch(
    "http://localhost:8000/templates/" + id,
    requestOptions
  ).then((response) => response.json());
};

export const deleteSettings = async (templateId: any) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  return await fetch(
    "http://localhost:8000/templates/templateId=" + templateId,
    requestOptions
  ).then((response) => response.json());
};

export const updateSettings = async (data: any) => {
  const settings = data.settings;

  const requestOptions = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(settings),
  };
  return await fetch(
    "http://localhost:8000/settings/" + data.settings.id,
    requestOptions
  ).then((response) => console.log(response.json()));
};

export const addTemplateSettings = async (templateId: string) => {
  const id = uuidv4();

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      templateId: templateId,
      personal_details: {
        text: "",
        settings: {
          fontSize: "text-lg",
          textPosition: "justify-start",
          textColor: "#000000",
        },
      },
      education: {
        sections: [],
        settings: {
          fontSize: "text-lg",
          textPosition: "justify-start",
          textColor: "#000000",
        },
      },
      experience: {
        sections: [],
        settings: {
          fontSize: "text-lg",
          textPosition: "justify-start",
          textColor: "#000000",
        },
      },
      skills: {
        sections: [],
        settings: {
          fontSize: "text-lg",
          textPosition: "justify-start",
          textColor: "#000000",
        },
      },
      projects: {
        text: "",
        sections: [],
        settings: {
          fontSize: "text-lg",
          textPosition: "justify-start",
          textColor: "#000000",
        },
      },
      languages: {
        sections: [],
        settings: {
          fontSize: "text-lg",
          textPosition: "justify-start",
          textColor: "#000000",
        },
      },
      personal_info: {
        info: {
          phoneNumber: "",
          email: "",
          name: "",
        },
        sections: [],
        settings: {
          fontSize: "text-lg",
          textPosition: "justify-start",
          textColor: "#000000",
        },
      },
    }),
  };
  return await fetch("http://localhost:8000/settings/", requestOptions).then(
    (response) => response.json()
  );
};

export const getUsers = async () => {
  return await fetch("http://localhost:8000/users").then((response) =>
    response.json()
  );
};

export const getUserDetails = async (userId: string) => {
  return await fetch("http://localhost:8000/users/" + userId).then((response) =>
    response.json()
  );
};

export const getUserTemplates = async (userId: string) => {
  return await fetch("http://localhost:8000/templates?userID=" + userId).then(
    (response) => response.json()
  );
};

export const getTemplateSettings = async (templateId: string) => {
  return await fetch(
    "http://localhost:8000/settings?templateId=" + templateId
  ).then((response) => response.json());
};

export const getUserSettings = async (userId: string) => {
  return await fetch("http://localhost:8000/settings/" + userId).then(
    (response) => response.json()
  );
};

export const getUserInfo = async (userId: string) => {
  let user = {
    userDetails: {},
    userTemplates: [],
  };

  await getUserDetails(userId).then((response) => {
    user.userDetails = response;
  });

  await getUserTemplates(userId).then((response) => {
    user.userTemplates = response;
  });
  return user;
};
