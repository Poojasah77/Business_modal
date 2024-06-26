import { FaMapMarkerAlt } from "react-icons/fa";
import { RxDragHandleDots1 } from "react-icons/rx";
import IconButton from "./common/IconButton";
import { FaRegTrashCan } from "react-icons/fa6";

const BusinessListItem = ({ business, deleteHandler, viewBusinessHandler }) => {

    const handleDeleteBusiness = () => {
        deleteHandler(business.id);
    }

    const handleViewBusiness = () => {
        viewBusinessHandler(business);
    }
    
    return (
        <div className="flex flex-row justify-between w-full shadow-md p-3 rounded-lg">
            <div className="flex flex-row items-center gap-3">
                <RxDragHandleDots1 size={35} color="gray"/>
                <div className="flex flex-col">
                    <span className="font-extrabold">{ business.name }</span>
                    <span className="font-bold text-gray-500">{ business.createdOn }</span>
                </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <span className="font-bold text-gray-500">
                    ({business.location.lat}, {business.location.lng})
                </span>
                <IconButton clickHandler={handleViewBusiness} color="sky-500" icon={FaMapMarkerAlt} />
                <IconButton clickHandler={handleDeleteBusiness} color="rose-500" icon={FaRegTrashCan} />
            </div>
        </div>
    ) 
}

export default BusinessListItem;