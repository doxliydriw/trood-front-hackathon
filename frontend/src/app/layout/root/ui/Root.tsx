import { Outlet } from 'react-router-dom';
import { Header } from '../../../../widgets/header';
import { SideBar } from '../../../../widgets/sidebar';

export default function Root() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[auto_1fr] bg-background">
      {/* Full-width Header */}
      <header className="col-span-2 flex items-center">
        <Header />
      </header>

      {/* Sidebar (Left) */}
      <aside className="row-start-2 pl-[40px] pr-[34px] py-0">
        <SideBar />
      </aside>

      {/* Main Content (Right) */}
      <main className="row-start-2 col-start-2 bg-main rounded-tl-[16px]">
        <Outlet />
      </main>
    </div>
  );
}
