import Department_Notification from "./Department_Notification.jsx";
import School_Notification from "./School_Notification.jsx";

export default function Body() {
    return (
        <>
            {<School_Notification />}
            {<Department_Notification />}
        </>
    );
}