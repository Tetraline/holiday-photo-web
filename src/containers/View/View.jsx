const View = () => {
  const getImageList = async () => {
    const response = await fetch("http://localhost:8080/image");
    const data = await response.json();
    console.log(data);
    const sorted = data.sort((a, b) => a.holidayId - b.holidayId);
    console.log(sorted);
  };
  getImageList();
  return <p>hi</p>;
};

export default View;
