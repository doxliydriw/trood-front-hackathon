
const SideBar = () => {
  return (
    <div className="bg-background">
      <nav className="flex flex-col" >
          <a className="w-[200px] h-[50px] px-[19px] py-[12px] rounded-[12px] font-aeroport text-[14px] font-normal leading-[19.14px] text-left no-underline focus:bg-[hsla(220,8%,78%,1)]">Main page</a>
          <a href="/projects" className="w-[200px] h-[50px] px-[19px] py-[12px] rounded-[12px] font-aeroport text-[14px] font-normal leading-[19.14px] text-left no-underline focus:bg-[hsla(220,8%,78%,1)]">Projects</a>
          <a className="w-[200px] h-[50px] px-[19px] py-[12px] rounded-[12px] font-aeroport text-[14px] font-normal leading-[19.14px] text-left no-underline focus:bg-[hsla(220,8%,78%,1)]">Vacancies</a>
          <a className="w-[200px] h-[50px] px-[19px] py-[12px] rounded-[12px] font-aeroport text-[14px] font-normal leading-[19.14px] text-left no-underline focus:bg-[hsla(220,8%,78%,1)]">People</a>
          <a className="w-[200px] h-[50px] px-[19px] py-[12px] rounded-[12px] font-aeroport text-[14px] font-normal leading-[19.14px] text-left no-underline focus:bg-[hsla(220,8%,78%,1)]">Tests</a>
          <a className="w-[200px] h-[50px] px-[19px] py-[12px] rounded-[12px] font-aeroport text-[14px] font-normal leading-[19.14px] text-left no-underline focus:bg-[hsla(220,8%,78%,1)]">Settings</a>
      </nav>
    </div>
  );
};

export default SideBar;
