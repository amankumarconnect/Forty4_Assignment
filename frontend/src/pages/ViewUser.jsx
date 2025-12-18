import { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router";
import { FaUserTie, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdWork } from "react-icons/md";

const ViewUser = () => {
  const { id } = useParams();
  const { updateUser, getUserById } = useContext(AppContext);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUserById(id);
      if (data) {
        setUserData(data);
      }
    };
    fetchUser();
  }, [id, getUserById]);

  if (!userData) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center items-stretch w-fit rounded-xl overflow-hidden">
      <div className="flex flex-col items-center justify-center bg-prussian-blue-900 text-twilight-indigo-300 p-4">
        <FaUserTie size={80} className="text-twilight-indigo-600" />
        <h1 className="text-2xl font-bold text-smart-blue-600">
          {userData.name}
        </h1>
        <div className="flex items-center justify-center gap-1">
          <IoMdMail />
          {userData.email}
        </div>
        <div className="flex items-center justify-center gap-1">
          <FaPhoneAlt />
          {userData.phone}
        </div>
        <div className="flex items-center justify-center gap-1">
          <MdWork />
          {userData.company}
        </div>
      </div>
      <div className="bg-twilight-indigo-600 p-4 text-prussian-blue-900">
        <h3>
          <span className="font-medium ">Street: </span>
          {userData.address.street}
        </h3>
        <h3>
          <span className="font-medium">City: </span>
          {userData.address.city}
        </h3>
        <h3>
          <span className="font-medium">Zipcode: </span>
          {userData.address.zipcode}
        </h3>
        <h3>
          <span className="font-medium">Latitude: </span>
          {userData.address.geo.lat}
        </h3>
        <h3>
          <span className="font-medium">Longitude: </span>
          {userData.address.geo.lng}
        </h3>
      </div>
    </div>
  );
};

export default ViewUser;
