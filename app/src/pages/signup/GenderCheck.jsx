/* eslint-disable react/prop-types */
const GenderCheck = ({ handleCheckBox, selectedGender }) => {
  return (
    <div className="mt-2 flex">
      <div className="form-control">
        <label
          className={`label cursor-pointer gap-2 ${selectedGender === "male" ? "selected" : ""}`}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="border-white-500 checkbox"
            checked={selectedGender === "male"}
            onChange={() => handleCheckBox("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className={`border-white-500 checkbox ${selectedGender === "female" ? "selected" : ""}`}
            checked={selectedGender === "female"}
            onChange={() => handleCheckBox("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheck;
