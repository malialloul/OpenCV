import { useContext } from "react";
import { GlobalContext } from "./AppContext";
import { APIKEY } from "../services/ApiKey";
import emailjs from "emailjs-com";
import { v4 as uuidv4 } from "uuid";
import { getUserInfo } from "./HTTPContext";

const CommonFuntions = () => {
  let {
    data,
    updateData,
    updateUserDetails,
    updateTemplates,
  } = useContext(GlobalContext);
  const AddExperience = () => {
    let list = {
      from: "",
      to: "",
      text: "",
    };
    data.settings[data.sectionIndex].sections.push(list);
    updateData(data);
  };

  const AddLanguage = () => {
    data.settings[data.sectionIndex].sections.push("");
    updateData(data);
  };

  const AddContact = () => {
    let list = {
      title: "",
      details: "",
    };
    data.settings[data.sectionIndex].sections.push(list);
    updateData(data);
  };

  const UpdateContactPhoneNumber = (phoneNumber: string) => {
    data.settings[data.sectionIndex].info.phoneNumber = phoneNumber;
    updateData(data);
  };

  const UpdateContactEmail = (email: string) => {
    data.settings[data.sectionIndex].info.email = email;
    updateData(data);
  };

  const AddSkill = () => {
    let list = {
      title: "",
      details: "",
    };
    data.settings[data.sectionIndex].sections.push(list);
    updateData(data);
  };

  const AddEducation = () => {
    console.log(data);
    let list = {
      from: "",
      to: "",
      text: "",
    };
    data.settings[data.sectionIndex].sections.push(list);
    updateData(data);
  };
  const AddProject = () => {
    let list = {
      projectName: "",
      projectDescription: "",
    };
    data.settings[data.sectionIndex].sections.push(list);
    updateData(data);
  };

  const UpdateLanguage = (e: any, index: number) => {
    data.settings[data.sectionIndex].sections[index] = e.target.value;
    updateData(data);
  };

  const UpdateProjectName = (e: any, index: number) => {
    data.settings[data.sectionIndex].sections[index].projectName =
      e.target.value;
    updateData(data);
  };

  const UpdateProjectDescription = (e: any, index: number) => {
    data.settings[data.sectionIndex].sections[index].projectDescription =
      e.target.value;
    updateData(data);
  };

  const ModifyText = (event: any) => {
    data.settings[data.sectionIndex].text = event.target.value;
    updateData(data);
  };
  const UpdateFromSection = (e: any, index: number) => {
    data.settings[data.sectionIndex].sections[index].from = e.target.value;
    updateData(data);
    console.log(data);
  };
  const UpdateToSection = (e: any, index: number) => {
    data.settings[data.sectionIndex].sections[index].to = e.target.value;
    updateData(data);
  };
  const UpdateTextSection = (e: any, index: number) => {
    data.settings[data.sectionIndex].sections[index].text = e.target.value;
    updateData(data);
  };
  const DeleteSection = (index: number) => {
    data.settings[data.sectionIndex].sections.splice(index, 1);
    updateData(data);
  };
  const UpdateTitleSection = (e: any, index: number) => {
    data.settings[data.sectionIndex].sections[index].title = e.target.value;
    updateData(data);
  };
  const UpdateDetailsSection = (e: any, index: number) => {
    data.settings[data.sectionIndex].sections[index].details =
      e.target.value;
    updateData(data);
  };

  const CheckSections = (sectionName: string) => {
    let enable: boolean = false;
    data.settings[sectionName].sections.map((section: any, index: any) => {
      if (!enable) {
        if (section.to !== "" && section.from !== "" && section.text !== "") {
          enable = true;
        }
      }
    });
    return enable;
  };

  const UpdateSettings = (settings: any) => {
    data["settings"] = settings;
    updateData(data);
  };

  const UpdateUser = (userDetails: any) => {
    data["userDetails"] = userDetails;
    updateData(data);
  };

  const CheckProjectsStatus = () => {
    let enable: boolean = false;
    data.settings["projects"].sections.map((section: any, index: any) => {
      if (!enable) {
        if (section.projectName !== "" && section.projectDescription !== "") {
          enable = true;
        }
      }
    });
    return enable;
  };

  const CheckContactStatus = () => {
    return (
      data.settings.contact.info.phoneNumber !== "" ||
      data.settings.contact.info.email !== "" ||
      CheckSectionTextStatus("contact")
    );
  };

  const CheckSectionTextStatus = (sectionName: string) => {
    let enable: boolean = false;
    data.settings[sectionName].sections.map((text: any, index: any) => {
      if (!enable && text !== "") {
        enable = true;
      }
    });
    return enable;
  };

  const Logout = () => {
    sessionStorage.removeItem("OpenCVId");
  };

  const PublishTemplate = () => {
    data.settings.published = true;
    updateData(data);
  };

  const UnpublishTemplate = () => {
    data.settings.published = false;
    updateData(data);
  };

  const UpdateTemplateVersion = (index: number) => {
    data.settings.templateIndex = index;
    updateData(data);
  };

  const AutoFill = () => {
    ClearCV();
    data.settings.personal_details.text =
      "I recently graduated with a bachelor’s degree in mathematics, majoring in statistics and analytics. I have experience working in the financial sector by way of an internship with a major multinational firm, which has helped me develop technical capabilities in data engineering and science. I have consistently proven my ability to meet deadlines and achieve project objectives, solve mission-critical problems and prioritize crucial tasks while maintaining the high standards expected of my role. I am currently seeking a position in an established data science firm to further my career goals";
    data.settings.experience.sections.push({
      from: "2020-01-01",
      to: "2021-01-01",
      text: "Experience 1",
    });

    data.settings.education.sections.push({
      from: "2020-01-01",
      to: "2021-01-01",
      text: "Education 1",
    });
    data.settings.projects.text =
      "This is a description for all my projects";
    data.settings.projects.sections.push({
      projectName: "Project1",
      projectDescription: "Project Description 1",
    });
    data.settings.languages.sections.push("Arabic");
    data.settings.languages.sections.push("English");
    data.settings.contact.sections.push({
      title: "Facebook",
      details: "www.facebook.com",
    });
    data.settings.contact.info.phoneNumber = "+96170888548";
    data.settings.contact.info.email = "xyz@xyz.com";

    data.settings.skills.sections.push({
      title: "Front End Development",
      details: "HTML, CSS ...",
    });

    data.settings.skills.sections.push({
      title: "Back End Development",
      details: "JAVA, Python ...",
    });

    updateData(data);
  };

  const GenerateToken = () => {
    let token = uuidv4();
    data.userDetails.token = token;
    updateData(data);
  };

  const ClearCV = () => {
    data.settings.personal_details.text = "";
    data.settings.experience.sections = [];
    data.settings.education.sections = [];
    data.settings.languages.sections = [];
    data.settings.projects.sections = [];
    data.settings.contact.sections = [];
    data.settings.skills.sections = [];
    data.settings.contact.info.phoneNumber = "";
    data.settings.contact.info.email = "";

    updateData(data);
  };

  const SendEmail = (toSend: any) => {
    emailjs
      .send(APIKEY.SERVICE_ID, APIKEY.TEMPLATE_ID, toSend, APIKEY.USER_ID)
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };
  const InitializeUser = () => {
    let userID: any = "";
    if (
      sessionStorage.getItem("OpenCVId") !== "" &&
      sessionStorage.getItem("OpenCVId") !== null &&
      data.userDetails.id === ""
    ) {
      userID = sessionStorage.getItem("OpenCVId")?.toString();
      getUserInfo(userID).then((response) => {
        updateUserDetails(response.userDetails);
        let list: string[] = [];
        response.userTemplates.map((t: any, index) => {
          list.push(t.id);
        });
        updateTemplates(list);
      });
    }
  };
  return {
    UpdateContactPhoneNumber,
    UpdateContactEmail,
    InitializeUser,
    AddExperience,
    AddLanguage,
    AddProject,
    AddEducation,
    UpdateLanguage,
    UpdateProjectName,
    UpdateProjectDescription,
    ModifyText,
    UpdateFromSection,
    UpdateToSection,
    UpdateTextSection,
    DeleteSection,
    AddContact,
    UpdateTitleSection,
    UpdateDetailsSection,
    CheckSections,
    CheckProjectsStatus,
    CheckSectionTextStatus,
    UpdateSettings,
    UpdateUser,
    Logout,
    PublishTemplate,
    AutoFill,
    ClearCV,
    UpdateTemplateVersion,
    UnpublishTemplate,
    SendEmail,
    GenerateToken,
    AddSkill,
    CheckContactStatus,
  } as const;
};

export default CommonFuntions;
