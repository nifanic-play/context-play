import React from "react";
import { NavLink } from "react-router-dom";

export enum LABEL {
  ABOUT = "About",
  HOME = "Home",
  SERVICES = "Services",
  TEAM = "Team",
}

export interface ViewShape {
  to: string;
  label: LABEL | string;
  elements?: ViewShape[];
}

export const Navigation: React.FC = () => hierarchy(views);

const { ABOUT, HOME, SERVICES, TEAM } = LABEL;

export const views: ViewShape[] = [
  { to: "/", label: HOME },
  { to: "/services", label: SERVICES },
  {
    to: "/about",
    label: ABOUT,
    elements: [
      {
        to: "/team",
        label: TEAM,
        elements: [
          { to: "/amir", label: "Amir" },
          { to: "/nick", label: "Nick" },
        ],
      },
    ],
  },
];

export const getElementsByLabel = (label: LABEL, elements: ViewShape[] = views): ViewShape[] => {
  if (!label) throw new Error("`label` param is required");

  return elements.reduce<ViewShape[]>((acc, curr) => {
    const { elements } = curr;
    const isLabel = curr.label === label;

    if (elements && !isLabel) getElementsByLabel(label, elements);

    const { elements: extractedElements } = elements ? elements[0] : { elements: [] };

    return extractedElements || [];
  }, []);
};

/**
 * Array of parent `to` params.
 */
const historyTo: string[] = [];

const hierarchy = (items: ViewShape[], parentTo: string | undefined = "") => {
  if (!items || !items.length) return <div>Items are required to build hierarchy</div>;

  return (
    <ol>
      {items.reduce<JSX.Element[]>((acc, { to, label, elements }, i) => {
        if (elements?.length) {
          historyTo.push(to);
        }

        const item = (
          <li key={`${label}-${i}`}>
            <NavLink to={`${parentTo}${to}`}>{label}</NavLink>
            {elements?.length && hierarchy(elements, historyTo.join(""))}
          </li>
        );

        acc.push(item);

        return acc;
      }, [])}
    </ol>
  );
};
