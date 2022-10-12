const AddHoliday = () => {
  return (
    <form
      method="POST"
      encType="multipart/form-data"
      action="http://localhost:8080/holiday"
    >
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      <br />
      <label htmlFor="startDate">Start Date</label>
      <input type="date" id="startDate" name="startDate" />
      <br />
      <label htmlFor="endDate">End Date</label>
      <input type="date" id="endDate" name="endDate" />
      <br />
      <input type="submit" />
    </form>
  );
};

export default AddHoliday;
