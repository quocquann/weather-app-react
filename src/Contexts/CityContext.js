import { createContext, useState } from "react";


const CityContext = createContext();

function CityProvider({ children }) {


    const [cityName, setCityName] = useState('ha noi');

    return (
        <CityContext.Provider value={[cityName, setCityName]}>
            {children}
        </CityContext.Provider>
    )
}

export { CityContext, CityProvider }