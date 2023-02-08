import { memo, FC, useEffect, useCallback } from "react";

import { UserCard } from "../organism/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import {
  Wrap,
  WrapItem,
  Spinner,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure
} from "@chakra-ui/react";

export const UserManagement: FC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onClickUser = useCallback(() => onOpen(), [onOpen]);

  useEffect(() => getUsers, [getUsers]);
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} mx="auto">
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
