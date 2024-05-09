import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mb-16 mt-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/vercel/next.js"
          >
            <FaGithub className="h-5 w-5" />
            <p className="ml-2 h-7 pt-1 font-semibold">Github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/vercel/next.js"
          >
            <FaLinkedin className="h-5 w-5" />
            <p className="ml-2 h-7 pt-1 font-semibold">Linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SiGmail   className="h-5 w-5"/>
            <p className="ml-2 h-7 pt-1 font-semibold">christian.misael.fr@gmail.com</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BsFillTelephoneFill className="h-5 w-5 "/>
            <p className="ml-2 h-7 pt-1 font-semibold">3318634402</p>
          </a>
        </li>
      </ul>
    </footer>
  )
}
