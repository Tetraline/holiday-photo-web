import { useEffect, useState } from "react";
import Holiday from "../../components/Holiday/Holiday";
const View = () => {
  const [holidays, setHolidays] = useState([]);
  const getHolidays = async () => {
    const response = await fetch("http://localhost:8080/holidays");
    const holidays = await response.json();
    setHolidays(holidays);
  };
  useEffect(() => {
    getHolidays();
  }, []);
  const holidaysJSX = holidays.map((holiday) => (
    <Holiday key={holiday.id} holiday={holiday} />
  ));
  return (
    <>
      {holidaysJSX}
      <button
        onClick={() =>
          window.open("../add-holiday", "name", "width=200px", "height=200px")
        }
      >
        New Holiday
      </button>
      <button
        onClick={() =>
          window.open("../add-image", "name", "width=200", "height=200")
        }
      >
        New Image
      </button>
    </>
  );
};

export default View;
