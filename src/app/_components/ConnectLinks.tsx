import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaBluesky } from "react-icons/fa6";

interface ConnectLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const ConnectLinks: ConnectLink[] = [
  {
    label: "Email",
    href: "mailto:kaveeshkhattar@gmail.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/kaveeshkhattar/",
    icon: <FaInstagram />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/KaveeshKhattar/",
    icon: <FaLinkedin />,
  },
  {
    label: "BlueSky",
    href: "https://bsky.app/profile/kaveeshkhattar.bsky.social",
    icon: <FaBluesky />
  },
  {
    label: "GitHub",
    href: "https://github.com/KaveeshKhattar",
    icon: <FaGithub />,
  },
  {
    label: "Resume",
    href: "/files/Resume.pdf",
    icon: <IoPersonCircleOutline />,
  },
];

export default ConnectLinks;
