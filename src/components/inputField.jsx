// import myImage from './public/image.jpg';
function InputField({ type, userState, user }) {
  // console.log(typeof type);
  let t = `${type}`[0].toLocaleUpperCase() + `${type}`.slice(1);
  // console.log(`${type}`.toLocaleUpperCase());
  return (
    <div className="form-group">
      <input
        onChange={(e) => userState(e.target.value)}
        value={user}
        type={`${type}`}
        placeholder={t}
        className="form-input"
      />
    </div>
  );
}

export default InputField;
