import profile from "../../assets/images/john-doe.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Header = () => {
  const [text] = useTypewriter({
    words: ["MERN Stack Developer", "Web Designer", "Photographer"],
    loop: true,
  });
  return (
    <section className={`flex justify-center items-center gap-20 p-4 mb-10`}>
      <div>
        <span className="flex gap-3 font-bold text-5xl pb-6 ">
          <h1 className="text-[#ff3f85]">John</h1>
          <h1>Doe</h1>
        </span>

        <span>{text}</span>
        <span>
          <Cursor />
        </span>
      </div>
      <div className="m-4 border-6 border-[#ff3f85] rounded-full overflow-hidden">
        <img src={profile} alt="profile picture" className="w-60" />
      </div>
    </section>
  );
};

export default Header;
