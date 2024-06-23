import { useLocation } from "@tanstack/react-router";
import { Link, LinkProps } from "react-aria-components";

function _Link({ href, children, style, className, ...props }: LinkProps) {
  const location = useLocation();
  const isCurrent = location.pathname === href;

  return (
    <Link
      href={href}
      {...(isCurrent && { "data-active": true })}
      className={({
        isHovered,
        isPressed,
        isFocused,
        isFocusVisible,
        isDisabled,
        defaultClassName,
      }) => {
        const ret =
          typeof className === "function"
            ? className({
                isCurrent,
                isHovered,
                isPressed,
                isFocused,
                isFocusVisible,
                isDisabled,
                defaultClassName,
              })
            : className;
        return ret || "";
      }}
      {...props}
      style={({
        isHovered,
        isPressed,
        isFocused,
        isFocusVisible,
        isDisabled,
        defaultStyle,
      }) => {
        const ret =
          typeof style === "function"
            ? style({
                isCurrent,
                isHovered,
                isPressed,
                isFocused,
                isFocusVisible,
                isDisabled,
                defaultStyle,
              })
            : style;
        return ret || {};
      }}
    >
      {({
        isHovered,
        isPressed,
        isFocused,
        isFocusVisible,
        isDisabled,
        defaultChildren,
      }) => {
        const ret =
          typeof children === "function"
            ? children({
                isCurrent,
                isHovered,
                isPressed,
                isFocused,
                isFocusVisible,
                isDisabled,
                defaultChildren,
              })
            : children;

        return <>{ret}</>;
      }}
    </Link>
  );
}

export { _Link as Link };
