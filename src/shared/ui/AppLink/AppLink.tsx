import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";

interface AppLinkProps extends LinkProps {
  className?: string;
}
export const AppLink: FC<AppLinkProps> = (props) => {
  const { to, children, className, ...otherProps } = props;
  return (
    <Link 
        to={to}
        className={classNames(cls.AppLink, {}, [className])}
        {...otherProps}
     >
      {children}
    </Link>
  );
};
