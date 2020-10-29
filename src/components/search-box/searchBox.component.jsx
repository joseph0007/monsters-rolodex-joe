import "./searchBox.styles.css";

export const SearchBox = ({ placeholder, fn }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={fn}
    />
  );
};
