import git_logo from "../../assets/logos/github-mark-white.png";
import facebook_logo from "../../assets/logos/communication.png";
import linkedin_logo from "../../assets/logos/linkedin.png";
import instagram_logo from "../../assets/logos/instagram.png";
import x_logo from "../../assets/logos/twitter.png";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center text-white mt-[4rem]">
      <h2 className="font-semibold text-3xl">Contact Me</h2>
      <div className="w-25 m-4 h-[0.3rem] bg-[#ff3f85] rounded-full"></div>
      <p className="my-[1rem]">800‑555‑0100 </p>
      <p className="mb-[1rem]">john.doe@gmail.com</p>
      <p className="">47 W 13th St, New York, NY 10011, USA</p>
      <div className="flex gap-4 mt-[3rem]">
        <img src={git_logo} className="w-8 h-8" />
        <img src={linkedin_logo} className="w-8 h-8" />
        <img src={facebook_logo} className="w-8 h-8" />
        <img src={instagram_logo} className="w-8 h-8" />
        <img src={x_logo} className="w-8 h-8" />
      </div>
    </footer>
  );
};

export default Footer;
