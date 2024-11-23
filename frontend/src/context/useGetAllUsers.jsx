import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const useGetAllUsers = () => {
  const [allUsers, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/user/getUserprofile", {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
          credentials: "include",
        });
        setUsers(response.data.allUsers);
        setLoading(false);
      } catch (error) {
        console.error("Error in get all users: ", error);
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return [allUsers, loading];
};

export default useGetAllUsers;
