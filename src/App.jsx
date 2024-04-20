import { useState } from "react"
import BusinessAddModal from "./components/BusinessAddModal";
import { FiPlus } from "react-icons/fi";


function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
const [business, setBusiness] = useState([
  {
    name: "PKS Pvt.Ltd.",
    createdOn: "2024/04/12",
    Location: {
    lat:51.505 ,
    lng:-0.09
  }
}
])

const handleAddBusiness = (newBusiness) => {
  setBusiness([
    ...business,
    newBusiness
  ])
}
  
  // const handleLocationChange = (e) => {

  //   setBusinessLocation(e.target.value)
  // }
  
  return (
    <>

      <div className="w-screen h-screen">
        <div className="
          h-screen w-screen
          flex justify-center items-center
          bg-[url('./images/bg_pattern.png')] bg-center bg-contain

        ">
          <div className="h-4/5 w-2/3 bg-white shadow-lg rounded-xl flex flex-col p-10">
            <span className="text-4xl font-bold">Dashboard</span>
            <div className="border-2 border-rose-500 my-3 rounded-lg"></div>
            <div className="flex justify-end">
              <button 
                onClick={() => setModalIsOpen(true)}
                className="
                  bg-rose-500
                  px-4 py-2
                  font-bold text-white
                  rounded-lg
                  flex gap-2 items-center
              ">
                Add Business
                <FiPlus size={30} />
              </button>
            </div>
            {
              business.map(bs => bs.name)
            }
          </div>
        </div>
        
        <BusinessAddModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} handleAddBusiness={handleAddBusiness} />
      
      </div>
      
    </>
  )
}

export default App;