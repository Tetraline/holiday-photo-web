const Add = () => {
  // TODO Make this work!
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);
    await fetch("http://localhost:8080/upload", {
      body: new FormData(e.target),
      method: "post",
    });
  };
  return (
    <form
      method="POST"
      encType="multipart/form-data"
      action="http://localhost:8080/image"
    >
      <input type="file" id="data" name="data" />
      <input type="number" id="holidayId" name="holidayId" />
      <input type="text" id="locationText" name="locationText" />
      <input type="text" id="description" name="description" />
      <input type="submit" />
    </form>
  );
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="file" id="data" name="data" />
      <input type="number" id="holidayId" name="holidayId" />
      <input type="text" id="locationText" name="locationText" />
      <input type="text" id="description" name="description" />
      <input type="submit" />
    </form>
  );
};

export default Add;
