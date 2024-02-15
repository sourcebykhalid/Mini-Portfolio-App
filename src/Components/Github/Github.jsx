/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/sourcebykhalid")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="text-center m-4 py-5 font-bold bg-gray-300 text-3xl text-slate-800  shadow-inner shadow-slate-500 ">
      Github Repositories : {data.public_repos}
      <img
        src={data.avatar_url}
        width={250}
        style={{ borderRadius: "50%", marginLeft: "4rem" }}
        alt=""
      />
    </div>
  );
}

export default Github;
export const githubLoader = async () => {
  const response = await fetch("https://api.github.com/users/sourcebykhalid");
  return response.json();
};
