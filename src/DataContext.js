import { createContext, useContext, useState } from "react";
import { arts } from "./Data";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [details, setDetails] = useState([]);
    const [detailsTwo, setDetailsTwo] = useState([]);
    const [detailsThree, setDetailsThree] = useState([]);
    return <DataContext.Provider value={{ arts, details, setDetails, detailsTwo, setDetailsTwo, detailsThree, setDetailsThree }}>
        {children}
    </DataContext.Provider>
}

export const DataState = () => {
    return useContext(DataContext);
}

export default DataProvider;