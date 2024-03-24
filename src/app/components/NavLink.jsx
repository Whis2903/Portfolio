import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {/* Added margin-right for spacing between links */}
      {title}
      <span className="ml-4">{/* Adjust spacing as needed (optional) */}</span>
    </Link>
  );
};

export default NavLink;
