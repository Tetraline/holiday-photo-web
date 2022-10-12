import { useParams } from "react-router-dom";
const AddImage = () => {
  const id = useParams().id;
  return (
    <form
      method="POST"
      encType="multipart/form-data"
      action="http://localhost:8080/image"
    >
      <label htmlFor="file">Image</label>
      <input type="file" id="data" name="data" />
      <br />
      <label htmlFor="holidayId">Holiday ID</label>
      <input
        type="text"
        id="holidayId"
        name="holidayId"
        value={id && id}
        readOnly={id}
      />
      <br />
      <label htmlFor="locationText">Location</label>
      <input type="text" id="locationText" name="locationText" />
      <br />
      <label htmlFor="description">Description</label>
      <input type="text" id="description" name="description" />
      <br />
      <label htmlFor="date">Date</label>
      <input type="date" id="date" name="date" />
      <br />
      <input type="submit" />
    </form>
  );
};

export default AddImage;
