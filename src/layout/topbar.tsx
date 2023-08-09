import { ROUTES } from "../routes";

export const Topbar = () => {
  return (
    <aside className="sticky top-0 flex items-center justify-between w-full h-12 px-20 text-sm border-b bg-gray-50 border-b-gray-100">
      <div>Gilberto</div>
      <nav>
        <ul className="flex gap-8">
          {ROUTES.map((route) => {
            return (
              <li>
                <a href={`#${route.id}`}>{route.label}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
