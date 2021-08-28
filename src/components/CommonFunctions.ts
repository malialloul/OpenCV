import { useContext } from "react";
import { GlobalContext } from "../services/AppContext";

const CommonFuntions = () => {
  const { data, updateData, updateIndex, sectionIndex } =
    useContext(GlobalContext);

  const AddExperience = () => {
    let list = {
      from: "",
      to: "",
      text: "",
    };
    data[sectionIndex].sections.push(list);
    updateData(data);
  };

  const AddLanguage = () => {
    data[sectionIndex].sections.push("");
    updateData(data);
  };

  const AddContact = () => {
    let list = {
      title: "",
      details: "",
    };
    data[sectionIndex].sections.push(list);
    updateData(data);
  };

  const AddEducation = () => {
    let list = {
      from: "",
      to: "",
      text: "",
    };
    data[sectionIndex].sections.push(list);
    updateData(data);
  };
  const AddProject = () => {
    let list = {
      projectName: "",
      projectDescription: "",
    };
    data[sectionIndex].sections.push(list);
    updateData(data);
  };

  const UpdateLanguage = (e: any, index: number) => {
    data[sectionIndex].sections[index] = e.target.value;
    updateData(data);
  };

  const UpdateProjectName = (e: any, index: number) => {
    data[sectionIndex].sections[index].projectName = e.target.value;
    updateData(data);
  };

  const UpdateProjectDescription = (e: any, index: number) => {
    data[sectionIndex].sections[index].projectDescription = e.target.value;
    updateData(data);
  };

  const ModifyText = (event: any) => {
    data[sectionIndex].text = event.target.value;
    updateData(data);
  };
  const UpdateFromSection = (e: any, index: number) => {
    data[sectionIndex].sections[index].from = e.target.value;
    updateData(data);
    console.log(data);
  };
  const UpdateToSection = (e: any, index: number) => {
    data[sectionIndex].sections[index].to = e.target.value;
    updateData(data);
  };
  const UpdateTextSection = (e: any, index: number) => {
    data[sectionIndex].sections[index].text = e.target.value;
    updateData(data);
  };
  const DeleteSection = (index: number) => {
    console.log(index);
    data[sectionIndex].sections.splice(index, 1);
    updateData(data);
  };
  const UpdateContactTitleSection = (e: any, index: number) => {
    data[sectionIndex].sections[index].title = e.target.value;
    updateData(data);
  };
  const UpdateContactDetailsSection = (e: any, index: number) => {
    data[sectionIndex].sections[index].details = e.target.value;
    updateData(data);
  };
  const CheckSections = (sectionName: string) => {
    let enable: boolean = false;
    data[sectionName].sections.map((section: any, index: any) => {
      if (!enable) {
        if (section.to !== "" && section.from !== "" && section.text !== "") {
          enable = true;
        }
      }
    });
    return enable;
  };

  const CheckProjectsStatus = () => {
    let enable: boolean = false;
    data["projects"].sections.map((section: any, index: any) => {
      if (!enable) {
        if (section.projectName !== "" && section.projectDescription !== "") {
          enable = true;
        }
      }
    });
    return enable;
  };

  const CheckSectionTextStatus = (sectionName: string) => {
    let enable: boolean = false;
    data[sectionName].sections.map((text: any, index: any) => {
      if (!enable && text !== "") {
        enable = true;
      }
    });
    return enable;
  };

  

  return {
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
    UpdateContactTitleSection,
    UpdateContactDetailsSection,
    CheckSections,
    CheckProjectsStatus,
    CheckSectionTextStatus,
  } as const;
};

export default CommonFuntions;
