import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Children } from 'react';

const NavLink = ({ children, href, ...props }) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const isActive = asPath === href || asPath === props.as;
  const childClass = child.props.className || '';
  const className = `${childClass} ${isActive ? 'active' : ''}`;

  return (
    <Link href={href} {...props}>
      {React.cloneElement(child, { className: className || null })};
    </Link>
  );
};

export default NavLink;
