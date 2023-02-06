import { memo, FC } from "react";

import { UserCard } from "../organism/user/UserCard";

export const UserManagement: FC = memo(() => {
  return (
    <UserCard
      imageUrl="https://source.unsplash.com/random"
      userName="Kyo18"
      fullName="Kyosuke Kishi"
    />
  );
});
