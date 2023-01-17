import { ButtonProps, Button } from "@mui/material";
import { FC } from "react";

interface UserPositionRowActionProps extends ButtonProps {
  children: React.ReactNode;
}

const UserPositionRowAction: FC<UserPositionRowActionProps> = ({
  children,
  ...otherProps
}) => {
  return (
    <Button
      className="bg-white text-black normal-case text-xs mx-2 sm:mx-0 w-28 sm:w-30 h-10 max-w-1 rounded-[100px]"
      style={{
        // @todo why the fuck is tailwind broken
        backgroundColor: otherProps.disabled ? "gray" : "#fff",
        color: "black",
      }}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

export { UserPositionRowAction };