import React from "react";
import { v4 as uuidv4 } from "uuid";

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

export const updateSettings = async () => {
  let settings = {};
  let id = "";
  const userInfoStorage = sessionStorage.getItem("info");
  if (userInfoStorage !== null) {
    settings = JSON.parse(userInfoStorage).userSettings;
    id = JSON.parse(userInfoStorage).userDetails.id;
  }
  const requestOptions = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(settings),
  };
  return await fetch(
    "http://localhost:8000/settings/" + id,
    requestOptions
  ).then((response) => console.log(response.json()));
};

export const addUserSettings = async (id: string) => {
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      templateIndex: 1,
      published: false,
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
      contact: {
        info: {
          phoneNumber: "",
          email: "",
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

export const getUserSettings = async (userId: string) => {
  return await fetch("http://localhost:8000/settings/" + userId).then(
    (response) => response.json()
  );
};

export const getUserInfo = async (userId: string) => {
  let user = {
    userDetails: {},
    userSettings: { templateIndex: 0 },
  };

  await getUserDetails(userId).then((response) => {
    user.userDetails = response;
  });
  await getUserSettings(userId).then((response) => {
    user.userSettings = response;
  });
  return user;
};
