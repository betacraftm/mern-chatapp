const GenderCheck = () => {
  return (
    <div className="mt-2 flex">
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">Male</span>
          <input type="checkbox" className="border-white-500 checkbox" />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">Female</span>
          <input type="checkbox" className="border-white-500 checkbox" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheck;
