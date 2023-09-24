import { ReactNode } from "react";

interface FooterColProps {
  children: ReactNode;
  title: string;
}

const FooterCol = (props: FooterColProps) => {
  const { title } = props;

  return (
    <>
      <h5 className="title">{title}</h5>
      <ul className="footer-ul">{props.children}</ul>
    </>
  );
};

export default FooterCol;
