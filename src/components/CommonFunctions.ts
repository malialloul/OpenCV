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
  };
  const UpdateToSection = (e: any, index: number) => {
    data[sectionIndex].sections[index].to = e.target.value;
    updateData(data);
  };
  const UpdateTextSection = (e: any, index: number) => {
    data[sectionIndex].sections[index].text = e.target.value;
    updateData(data);
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
  } as const;
};

export default CommonFuntions;
