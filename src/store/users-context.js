import { createContext, useContext } from "react";

const UsersContext = createContext(null);
export const useUsersContext = () => useContext(UsersContext);

export default UsersContext;
