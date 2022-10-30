import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
}

const FooterCol: React.FC<Props> = (props: Props) => {
  const { title } = props;

  return (
    <>
      <h5 className="title">{title}</h5>
      <ul className="footer-ul">{props.children}</ul>
    </>
  );
};

export default FooterCol;
