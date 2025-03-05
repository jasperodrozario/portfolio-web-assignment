interface CardProp {
  projectName: string;
  projectDescription: string;
  imgSrc: string;
}
const Card = ({ projectName, projectDescription, imgSrc }: CardProp) => {
  return (
    <div className="max-w-100 my-6 border-4 border-[#ff3f85] rounded-xl overflow-hidden transition-all duration-200 bg-blue/20 backdrop-blur-sm shadow-lg hover:scale-105">
      <img
        src={imgSrc}
        alt="image not found"
        className="w-full h-35 object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg mb-1">{projectName}</h3>
        <p className="font-thin">{projectDescription}</p>
      </div>
    </div>
  );
};

export default Card;
