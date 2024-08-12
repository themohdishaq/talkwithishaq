import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[]; 
  visitWebsiteLink?: string; 
  sourceCodeLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies,
  visitWebsiteLink,
  sourceCodeLink
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-5 w-full"> {/* Adjust width as needed */}
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span 
            key={tech}
            className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex justify-end space-x-4">
        {visitWebsiteLink && (
          <a 
            href={visitWebsiteLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Visit Website
          </a>
        )}
        {sourceCodeLink && (
          <a 
            href={sourceCodeLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
