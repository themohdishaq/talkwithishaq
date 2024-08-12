import Image from 'next/image';

interface EducationEntryProps {
  logoUrl: string;
  instituteName: string;
  degree: string;
  duration: string;
  points: string[];
}

const EducationEntry: React.FC<EducationEntryProps> = ({
  logoUrl,
  instituteName,
  degree,
  duration,
  points
}) => {
  return (
    <div className="flex border border-gray-300 p-4 rounded-lg shadow-md w-3/4 mx-auto my-4"> {/* Centered and styled */}
      <div className="w-24 mr-4"> 
        <Image src={logoUrl} alt={`${instituteName} Logo`} width={100} height={100} /> {/* Using Next.js Image */}
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{instituteName}</h3>
        <p className="font-medium">{degree}</p>
        <p className="text-gray-600">{duration}</p>
        <ul className="list-disc list-inside ml-5 mt-2">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <a href="#" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Visit Website 
        </a>
      </div>
    </div>
  );
}

export default EducationEntry;
