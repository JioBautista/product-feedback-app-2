import createFeedback from "../lib/createFeedback";
import deleteFeedback from "../lib/deleteFeedback";
import Label from "./Label";
import Select from "./Select";

export default function Form({ data }) {
  const pStyles = "text-gray-500 font-normal mb-3";
  const deleteFeedbackWithID = deleteFeedback.bind(null, data[0].productid);
  return (
    <div className="bg-white p-5 rounded-md space-y-5">
      {data ? (
        <h1 className="font-bold mb-5 text-lg">
          Editing '{data && data[0].title}'
        </h1>
      ) : (
        <h1>Create New Feedback</h1>
      )}

      <form action={createFeedback}>
        {/* FEEDBACK TITLE */}
        <Label>
          Feedback Title
          <p className={pStyles}>Add a short, descriptive headline</p>
          <input
            type="text"
            className="px-5 py-3 bg-gray-100 rounded-md w-full mb-5"
            name="title"
            defaultValue={data && data[0].title}
          />
        </Label>

        {/* CATEGORY */}
        <Label>
          Category
          <p className={pStyles}>Choose a category for your feedback</p>
          <Select
            name={"category"}
            defaultValue={data && data[0].category}
            value={data && data[0].category}
          >
            <option
              value={"Feature"}
              selected={data[0].category === "Feature" ? "selected" : null}
            >
              Feature
            </option>
            <option
              value={"UI"}
              selected={data[0].category === "UI" ? "selected" : null}
            >
              UI
            </option>
            <option
              value={"UX"}
              selected={data[0].category === "UX" ? "selected" : null}
            >
              UX
            </option>
            <option
              value={"Enhancement"}
              selected={data[0].category === "Enhancement" ? "selected" : null}
            >
              Enhancement
            </option>
            <option
              value={"Bug"}
              selected={data[0].category === "Bug" ? "selected" : null}
            >
              Bug
            </option>
          </Select>
        </Label>

        {/* UPDATE STATUS only display Block when defaultValue is true */}
        <Label>
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
        </Label>

        {/* FEEDBACK DETAILS */}
        <Label>
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
        </Label>

        {/* UPVOTES INPUT HIDDEN BY DEFAULT */}
        <input
          className="hidden"
          name="upvotes"
          type="number"
          defaultValue={0}
        />

        {/* FORM BUTTONS */}
        <div className="flex flex-col gap-5">
          <button
            type="submit"
            className="bg-[#AD1FEA] text-white p-3 rounded-xl font-bold"
          >
            {data ? "Save Changes" : "Add Feedback"}
          </button>

          <button className="bg-[#3A4374] text-white p-3 rounded-xl font-bold">
            Cancel
          </button>
        </div>
      </form>

      {/* SEPARATE FORM FOR DELETE BUTTON ON EDIT */}
      <form action={deleteFeedbackWithID}>
        {data && (
          <button
            className="bg-[#D73737] text-white p-3 rounded-xl font-bold w-full"
            type="submit"
          >
            Delete
          </button>
        )}
      </form>
    </div>
  );
}
