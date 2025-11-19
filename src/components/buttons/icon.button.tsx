"use client";

import { Button, ButtonProps } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { ReactNode } from "react";

type Props = {
  tooltipContent: string;
  children: ReactNode;
};
export default function IconButton({
  tooltipContent,
  children,
  ...props
}: Props & ButtonProps) {
  return (
    <Tooltip color="default" content={tooltipContent} placement={"bottom"}>
      <Button {...props} isIconOnly>
        {children}
      </Button>
    </Tooltip>
  );
}
