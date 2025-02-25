import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/anubhav-singh-90b02828a/", // Updated URL for LinkedIn
  },
  {
    title: "Github",
    href: "https://github.com/Anubhav2923", // Updated URL for Github
  },
  {
    title: "LeetCode",
    href: "https://leetcode.com/u/Anubhav2923/", // Updated URL for LeetCode
  },
  {
    title: "CV",
    href: "https://drive.google.com/drive/folders/1VH24-HtYNP6PszYgRTRmor6PujQk_koV?usp=drive_link", // Updated URL for CV
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-x-clip ">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30  [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] z-[-10]" ></div>
      <div className="container ">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center md:flex-row md:justify-between gap-8">
          <div className="text-white/40 ">&copy; 2025. All rights reserved.</div>

          <nav className="flex flex-col items-center gap-8 md:flex-row ">
            {footerLinks.map((link) => (
              <a href={link.href} key={link.title} className="inline-flex items-center gap-1.5 cursor-pointer" target="_blank" rel="noopener noreferrer">
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className='size-4' />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
