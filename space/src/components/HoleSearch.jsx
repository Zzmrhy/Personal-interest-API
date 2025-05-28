import data from "../../data.json";
function BlackHoleSearch() {
  return (
    <div>
      <form className="search-form" action={data.data}>
        <input
          name="index"
          type="text"
          placeholder={`Enter a number from 1 to 97`}
          className="search-input"
        />
      </form>
    </div>
  );
}

export default BlackHoleSearch;
