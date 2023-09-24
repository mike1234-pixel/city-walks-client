import { Link } from "react-router-dom";

interface FooterLinkProps {
  path: string;
  title: string;
}

const FooterLink = (props: FooterLinkProps) => {
  const { path, title } = props;

  return (
    <li className="list-unstyled">
      <Link to={path}>{title}</Link>
    </li>
  );
};

export default FooterLink;
