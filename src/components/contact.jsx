let Contact = () => {
  let handleform = (formdata) => {
    let data = Object.fromEntries(formdata.entries());
    data;
  };
  return (
    <>
      <div className="h-full w-full flex justify-center items-center">
        <div className="w-[25%] h-[50%] rounded-4xl p-[3%] bg-amber-600">
          <form action={handleform}>
            <p>
              <label for="user">Name:</label>
            </p>
            <input
              type="text"
              className="bg-white"
              id="user"
              name="user"
            ></input>
            <p>
              <label for="contact">Contact</label>
            </p>
            <input
              type="number"
              className="bg-white text-black mb-3"
              id="contact"
              name="contact"
            ></input>
            <br></br>
            <button type="submit" className="border-2 border-b-blue-50">
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
