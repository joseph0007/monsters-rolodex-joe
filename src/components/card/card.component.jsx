import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card">
      <img
        alt={props.monster.name}
        src={`https://robohash.org/${props.monster.id}?set=set2&size=200x200`}
      />
      <h2 className="heading-2">{props.monster.name}</h2>
      <p className="paragraph">{props.monster.email}</p>
    </div>
  );
};
