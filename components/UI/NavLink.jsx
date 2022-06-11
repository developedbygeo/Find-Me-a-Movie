import Link from 'next/link';
import React, { Children } from 'react';
import { useRouter } from 'next/router';

const NavLink = ({ children, href, ...props }) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const isActive = asPath === href || asPath === props.as;
  const childClass = child.props.className || '';
  const className = isActive ? `${childClass} active` : childClass;

  return (
    <Link href={href} {...props}>
      {React.cloneElement(child, { className: className || null })}
    </Link>
  );
};

export default NavLink;
