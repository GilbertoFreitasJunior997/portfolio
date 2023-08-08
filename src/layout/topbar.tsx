export const Topbar = () => {
  return (
    <aside className="w-full text-sm bg-gray-50 border-b border-b-gray-100 h-12 flex items-center justify-between px-20">
      <div>Gilberto</div>
      <nav>
        <ul className="flex gap-8">
          <li>Introduction</li>
          <li>About Me</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </aside>
  );
};
