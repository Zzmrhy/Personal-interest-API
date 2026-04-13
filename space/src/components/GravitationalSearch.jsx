import { Gravitational } from "../services/api";
function GravitationalSearch() {
  return (
    <div>
      <form className="search-form" action={Gravitational.data}>
        <input
          name="index"
          type="text"
          placeholder={`Enter a number from 1 to 19`}
          className="search-input"
        />
      </form>
    </div>
  );
}

export default GravitationalSearch;
