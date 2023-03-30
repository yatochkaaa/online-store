import { createContext } from "react";
import { DeviceStore } from "./DeviceStore";
import { UserStore } from "./UserStore";

export const rootStoreContext = createContext({
  userStore: new UserStore(),
  deviceStore: new DeviceStore(),
});
