import createFeedback from "../lib/createFeedback";

export default function Form({ data }) {
  const labelStyles = "font-bold";
  const pStyles = "text-gray-500 font-normal mb-3";

  console.log(data);
  return (
    <div className="bg-white p-5 rounded-md">
      {data ? (
        <h1 className="font-bold mb-5 text-lg">Editing '{data[0].title}'</h1>
      ) : (
        <h1>Create New Feedback</h1>
      )}

      <form action={createFeedback}>
        {/* FEEDBACK TITLE */}
        <label className={labelStyles}>
          Feedback Title
          <p className={pStyles}>Add a short, descriptive headline</p>
          <input
            type="text"
            className="px-5 py-3 bg-gray-100 rounded-md w-full mb-5"
            name="title"
            defaultValue={data && data[0].title}
          />
        </label>

        {/* CATEGORY */}
        <label className={labelStyles}>
          Category
          <p className={pStyles}>Choose a category for your feedback</p>
          <select
            className="w-full bg-gray-100 px-5 py-3 font-normal rounded-md mb-5"
            name="category"
            defaultValue={data && data[0].category}
          >
            <option value={"Feature"}>Feature</option>
            <option value={"UI"}>UI</option>
            <option value={"UX"}>UX</option>
            <option value={"Enhancement"}>Enhancement</option>
            <option value={"Bug"}>Bug</option>
          </select>
        </label>

        {/* UPDATE STATUS only display Block when defaultValue is true */}
        <label className={labelStyles}>
          Update Status
          <p className={pStyles}>Change feature state</p>
          <select
            className="w-full bg-gray-100 px-5 py-3 font-normal rounded-md mb-5"
            defaultValue={"suggestion"}
            name="status"
          >
            <option value={"Suggestion"}>Suggestion</option>
            <option value={"Planned"}>Planned</option>
            <option value={"In-Progress"}>In-Progress</option>
            <option value={"Live"}>Live</option>
          </select>
        </label>

        {/* FEEDBACK DETAILS */}
        <label className={labelStyles}>
          Feedback Detail
          <p className={pStyles}>
            Include any specific comments on what should be inproved, added,
            etc.
          </p>
          <textarea
            rows={5}
            className="bg-gray-100 p-3 rounded-md w-full mb-5"
            name="description"
          ></textarea>
        </label>

        {/* UPVOTES INPUT HIDDEN BY DEFAULT */}
        <input
          className="hidden"
          name="upvotes"
          type="number"
          defaultValue={0}
        />

        <div className="flex flex-col gap-5">
          <button
            type="submit"
            className="bg-[#AD1FEA] text-white p-3 rounded-xl font-bold"
          >
            Add Feedback
          </button>

          <button className="bg-[#3A4374] text-white p-3 rounded-xl font-bold">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
