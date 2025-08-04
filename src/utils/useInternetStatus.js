import { useEffect, useState } from "react";

const useInternetStatus = () => {
    const [internetStatus, setInternetStatus] = useState(true);
    useEffect(() => {
        addEventListener("offline", () => {
            if (internetStatus == false) {
                setInternetStatus(true);
            }
            if (internetStatus == true) {
                setInternetStatus(false);
            }
        })
    }, []);
    return internetStatus;
}
export default useInternetStatus;