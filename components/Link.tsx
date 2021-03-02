import { FC } from "react";

export const Link: FC<{
  href: string;
  as: string;
  passHref: boolean;
  prefetch: boolean;
  replace: boolean;
  scroll: boolean;
  shallow: boolean;
  locale: string;
}> = ({
  href,
  as,
  passHref,
  prefetch,
  replace,
  scroll,
  shallow,
  locale,
  ...props
}) => (
  <Link
    href={href}
    as={as}
    passHref={passHref}
    prefetch={prefetch}
    replace={replace}
    scroll={scroll}
    shallow={shallow}
    locale={locale}
  >
    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
    <a {...props} />
  </Link>
);
