import "./Image.scss";
const Image = ({ i }) => {
  return (
    <figure className="image">
      <figcaption className="image__date">
        {i.date.split("-").reverse().join("-")}
      </figcaption>
      <figcaption className="image__location">{i.locationText}</figcaption>
      {i.url && <img className="image__img" src={i.url} alt={i.description} />}
      <figcaption>{i.description}</figcaption>
    </figure>
  );
};
export default Image;
