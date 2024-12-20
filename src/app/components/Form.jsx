export default function Form() {
  const labelStyles = "font-bold";
  const pStyles = "text-gray-500 font-normal mb-3";
  return (
    <div className="bg-white p-5 rounded-md">
      <h1 className="text-xl font-bold mb-5">Create New Feedback</h1>
      <form>
        <label className={labelStyles}>
          Feedback Title
          <p className={pStyles}>Add a short, descriptive headline</p>
          <input
            type="text"
            className="px-5 py-3 bg-gray-200 rounded-md w-full mb-5"
            name="title"
          />
        </label>

        <label className={labelStyles}>
          Category
          <p className={pStyles}>Choose a category for your feedback</p>
          <select className="w-full bg-gray-200 px-5 py-3 font-normal rounded-md mb-5">
            <option>Feature</option>
            <option>UI</option>
            <option>UX</option>
            <option>Enhancement</option>
            <option>Bug</option>
          </select>
        </label>

        <label className={labelStyles}>
          Feedback Detail
          <p className={pStyles}>
            Include any specific comments on what should be inproved, added,
            etc.
          </p>
          <textarea
            rows={5}
            className="bg-gray-200 p-3 rounded-md w-full mb-5"
          ></textarea>
        </label>

        <div className="flex flex-col gap-5">
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-xl"
          >
            Add Feedback
          </button>

          <button className="bg-gray-500 text-white p-3 rounded-xl ">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
