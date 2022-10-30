import React from "react";
import { Link } from "react-router-dom";

interface Props {
  path: string;
  title: string;
}

const FooterLink: React.FC<Props> = (props: Props) => {
  const { path, title } = props;

  return (
    <li className="list-unstyled">
      <Link to={path}>{title}</Link>
    </li>
  );
};

export default FooterLink;
