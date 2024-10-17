import React from "react";
import { TiAttachment } from "react-icons/ti";

const ProjectCard = ({ project }) => {
  return (
    <div className="p-6 bg-white rounded-xl space-y-5">
      <div>
        <h1 className="text-xl font-semibold text-gray-700">{project.name}</h1>
        <p className="text-sm text-gray-500">{project.type}</p>
      </div>
      <p>
        <span className="text-xs p-2 rounded bg-gray-100">{project.date}</span>
      </p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="w-[40%] bg-indigo-500  rounded-full h-2"></div>
      </div>

      <div className="flex justify-between items-center">
        <p className="flex space-x-1 items-center text-gray-400">
          <TiAttachment />
          <span>{project.files} files</span>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
