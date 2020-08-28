import React from "react";
import { NavLink } from "react-router-dom";

interface ViewShape {
  to: string;
  label: string;
  elements?: ViewShape[];
}

export const Navigation: React.FC = () => {
  const views: ViewShape[] = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About", elements: [{ to: "/team", label: "Team" }] },
  ];

  return hierarchy(views);
};

const hierarchy = (items: ViewShape[], parentTo: string | undefined = "") => {
  if (!items || !items.length) return <div>Items are required to build hierarchy</div>;

  return (
    <ol>
      {items.reduce<JSX.Element[]>((acc, { to, label, elements }, i) => {
        const item = (
          <li>
            <NavLink to={`${parentTo}${to}`} key={`${label}-${i}`}>
              {label}
            </NavLink>
            {elements?.length && hierarchy(elements, to)}
          </li>
        );

        acc.push(item);

        return acc;
      }, [])}
    </ol>
  );
};
