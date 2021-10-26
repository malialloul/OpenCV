import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GlobalContext } from "../../services/AppContext";
import { SketchPicker } from "react-color";

const Settings = ({ ...props }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(props.visible);
  }, [props.visible]);
  const fontSizeArray = [
    "text-sm",
    "text-lg",
    "text-2xl",
    "text-3xl",
    "text-4xl",
  ];
  const [visibleColor, isVisibleColor] = useState(false);
  const { data, updateData } = useContext(GlobalContext);
  const tempSettings = {
    fontSize: "text-lg",
    textPosition: "justify-start",
    textColor: "#FFFFFF",
  };
  const [settings, setSettings] = useState(tempSettings);
  useEffect(() => {
    if (data.settingsSectionIndex !== "") {
      if(data.settings[data.settingsSectionIndex]){
        setSettings(data.settings[data.settingsSectionIndex].settings);
      }
      else{

      }
    }
  }, [data.settingsSectionIndex, data]);

  const increaseFontSize = () => {
    data.settings[data.settingsSectionIndex].settings.fontSize =
      fontSizeArray[fontSizeArray.indexOf(settings.fontSize) + 1];
    updateData(data);
  };
  const decreaseFontSize = () => {
    data.settings[data.settingsSectionIndex].settings.fontSize =
      fontSizeArray[fontSizeArray.indexOf(settings.fontSize) - 1];
    updateData(data);
  };
  const modifyTextPosition = (event: any) => {
    data.settings[data.settingsSectionIndex].settings.textPosition =
      event.target.value;
    updateData(data);
  };
  const changeTextColor = (event: any) => {
    data.settings[data.settingsSectionIndex].settings.textColor = event.hex;
    updateData(data);
  };

  const SettingsBody = (
    <div className={"flex flex-col gap-x-10"}>
      <div className="flex flex-col h-14 justify-center items-center p-4">
        <span>Font Size</span>
        <div className="flex w-full gap-x-3 justify-center items-center text-center">
          <input
            className={
              "cursor-pointer w-10 text-center " +
              (fontSizeArray.indexOf(settings.fontSize) ===
              fontSizeArray.length - 1
                ? "bg-gray-50"
                : "bg-gray-400")
            }
            value="+"
            onClick={() => increaseFontSize()}
            disabled={
              fontSizeArray.indexOf(settings.fontSize) ===
              fontSizeArray.length - 1
            }
            readOnly={true}
          />

          <div>
            <input
              className={"w-full text-center " + settings.fontSize}
              value="Font Size"
              readOnly={true}
            />
          </div>
          <input
            className={
              "cursor-pointer w-10 text-center " +
              (fontSizeArray.indexOf(settings.fontSize) === 0
                ? "bg-gray-50"
                : "bg-gray-400")
            }
            value="-"
            onClick={() => decreaseFontSize()}
            disabled={fontSizeArray.indexOf(settings.fontSize) === 0}
            readOnly={true}
          />
        </div>
      </div>
      <br />
      <div className="flex w-full flex-col h-14 justify-center items-center p-4">
        <span>Position</span>
        <select
          value={settings.textPosition}
          onChange={(e) => modifyTextPosition(e)}
        >
          <option value="justify-start">Left</option>
          <option value="justify-end">Right</option>
          <option value="justify-center">Center</option>
        </select>
      </div>
      <br />
      <div className="flex relative w-full flex-col h-14 justify-center items-center p-4">
        <span
          className="cursor-pointer"
          onClick={() => isVisibleColor(!visibleColor)}
        >
          Choose Color
        </span>
        {visibleColor && (
          <div className="absolute z-1 bottom-full top-10">
            <SketchPicker
              color={settings.textColor}
              onChange={(e: any) => changeTextColor(e)}
            />
            ColorPicker : {settings.textColor}
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
  return SettingsBody;
};

export default Settings;
