import { useEffect, useState } from "react";
import Image from "../Image/Image";
import "./Holiday.scss";

const Holiday = ({ holiday }) => {
  const [imageList, setImageList] = useState([]);
  useEffect(() => {
    const fetchImageList = async () => {
      const response = await fetch(
        `http://localhost:8080/holiday-images/${holiday.id}`
      );
      const imageList = await response.json();
      setImageList(imageList);
    };
    fetchImageList();
  }, [holiday]);

  console.log(imageList);
  const imageJSX = imageList.map((i) => {
    return <Image key={i.url} i={i} />;
  });

  const handleAdd = () => {
    window.open(`../add-image/${holiday.id}`, "width=200", "height=200");
  };
  return (
    <div className="holiday">
      <h2>{holiday.name}</h2>
      <p>{`${holiday.startDate.split("-").reverse().join("-")}
        >
        ${holiday.endDate.split("-").reverse().join("-")}`}</p>
      <button onClick={handleAdd}>Add Entry</button>
      <div className="holiday__images">{imageJSX}</div>
    </div>
  );
};

export default Holiday;
