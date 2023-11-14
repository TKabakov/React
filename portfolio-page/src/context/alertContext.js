import {createContext, useContext, useState} from "react";
import useSubmit from "../hooks/useSubmit";

export const AlertContext = createContext(undefined);

//2. useContext