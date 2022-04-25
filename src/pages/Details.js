import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();
    console.log(params.id);

//   useEffect(() => {
//     fetch(".../id");
//   }, []);

  return <div>
    <h2>DETAILLSS</h2>
  </div>;
};

export default Details;
