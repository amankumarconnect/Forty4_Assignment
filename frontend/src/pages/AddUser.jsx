import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const AddUser = () => {
  const { createUser } = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: {
      street: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(formData);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch">
      <div className="flex items-center justify-center bg-prussian-blue-900 rounded">
        <h1 className="text-3xl font-bold text-twilight-indigo-300 p-6 lg:p-10 hover:text-smart-blue-600">
          Add New User
        </h1>
      </div>
      <div>
        <form
          action="/add-user"
          method="post"
          className="bg-twilight-indigo-600 p-6 text-prussian-blue-900 rounded"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-medium">
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Forty Four"
                required
                className="bg-twilight-indigo-800 p-2 rounded text-twilight-indigo-300 focus:outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium">
                Email*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="intern@forty4.tech"
                required
                className="bg-twilight-indigo-800 p-2 rounded text-twilight-indigo-300 focus:outline-0"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex flex-col">
              <label htmlFor="phone" className="font-medium">
                Phone*
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="+91"
                required
                className="bg-twilight-indigo-800 p-2 rounded text-twilight-indigo-300 focus:outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="company" className="font-medium">
                Company*
              </label>
              <input
                type="text"
                name="company"
                id="company"
                placeholder="Forty4"
                required
                className="bg-twilight-indigo-800 p-2 rounded text-twilight-indigo-300 focus:outline-0"
              />
            </div>
          </div>
          <fieldset className="border-twilight-indigo-800 border-2 p-4 rounded">
            <legend className="font-medium">Address</legend>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex flex-col">
                <label htmlFor="street" className="font-medium">
                  Street*
                </label>
                <input
                  type="text"
                  name="street"
                  id="street"
                  placeholder="72 Great Suffolk St"
                  required
                  className="bg-twilight-indigo-800 p-2 rounded text-twilight-indigo-300 focus:outline-0"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="city" className="font-medium">
                  City*
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="London"
                  required
                  className="bg-twilight-indigo-800 p-2 rounded text-twilight-indigo-300 focus:outline-0"
                />
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="zipcode" className="font-medium">
                Zipcode*
              </label>
              <input
                type="text"
                name="zipcode"
                id="zipcode"
                placeholder="SE1 0BL"
                required
                className="bg-twilight-indigo-800 p-2 rounded text-twilight-indigo-300 focus:outline-0"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex flex-col">
                <label htmlFor="lat" className="font-medium">
                  Latitude*
                </label>
                <input
                  type="text"
                  name="lat"
                  id="lat"
                  placeholder="51.5074"
                  required
                  className="bg-twilight-indigo-800 p-2 rounded text-twilight-indigo-300 focus:outline-0"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lng" className="font-medium">
                  Longitude*
                </label>
                <input
                  type="text"
                  name="lng"
                  id="lng"
                  placeholder="-0.1278"
                  required
                  className="bg-twilight-indigo-800 p-2 rounded text-twilight-indigo-300 focus:outline-0"
                />
              </div>
            </div>
          </fieldset>
          <button
            type="submit"
            className="mt-4 px-4 py-2 font-medium bg-smart-blue-600 text-prussian-blue-900 focus:outline-0 rounded cursor-pointer hover:bg-prussian-blue-900 hover:text-smart-blue-600"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
