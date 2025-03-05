import Card from "../../components/Card";

// image source
import project1Img from "../../assets/images/pexels-goumbik-574071.jpg";
import project2Img from "../../assets/images/pexels-markusspiske-1089440.jpg";
import project3Img from "../../assets/images/pexels-pixabay-276452.jpg";

const Projects = () => {
  return (
    <section className="flex flex-col items-center justify-center my-[2rem]">
      <h2 className="font-semibold text-3xl">My Projects</h2>
      <div className="w-25 my-4 h-[0.3rem] bg-[#ff3f85] rounded-full"></div>
      <div className="lg:grid grid-cols-3 gap-10">
        {/* project1 */}
        <Card
          projectName="Project 1"
          projectDescription="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          imgSrc={project1Img}
        />

        {/* project2 */}
        <Card
          projectName="Project 2"
          projectDescription="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          imgSrc={project2Img}
        />

        {/* project3 */}
        <Card
          projectName="Project 3"
          projectDescription="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          imgSrc={project3Img}
        />
      </div>
    </section>
  );
};

export default Projects;
