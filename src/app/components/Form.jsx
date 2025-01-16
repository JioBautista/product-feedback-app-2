import deleteFeedback from "../lib/deleteFeedback";
import Label from "./Label";
import Select from "./Select";
import Button from "./Button";

export default function Form({ data, fn }) {
  const pStyles = "text-gray-500 font-normal mb-3";
  const deleteFeedbackWithID = deleteFeedback.bind(
    null,
    data ? data[0].productid : null
  );
  const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"];
  const status = ["Suggestion", "Planned", "In-Progress", "Live"];
  return (
    <div className="bg-white p-5 rounded-md space-y-5">
      {data ? (
        <h1 className="font-bold mb-5 text-lg">Editing '{data[0].title}'</h1>
      ) : (
        <h1 className="font-bold mb-5 text-lg">Create New Feedback</h1>
      )}

      <form action={fn}>
        {/* FEEDBACK TITLE */}
        <Label>
          Feedback Title
          <p className={pStyles}>Add a short, descriptive headline</p>
          <input
            type="text"
            className="px-5 py-3 bg-[#F7F8FD] rounded-md w-full mb-5 font-normal"
            name="title"
            defaultValue={data ? data[0].title : null}
          />
        </Label>

        {/* CATEGORY */}
        <Label>
          Category
          <p className={pStyles}>Choose a category for your feedback</p>
          <Select name={"category"} data={data} option={categories} />
        </Label>

        {/* UPDATE STATUS only display Block when defaultValue is true */}
        {data ? (
          <Label>
            Update Status
            <p className={pStyles}>Change feature state</p>
            <Select name={"status"} option={status} data={data} />
          </Label>
        ) : null}

        {/* FEEDBACK DETAILS */}
        <Label>
          Feedback Detail
          <p className={pStyles}>
            Include any specific comments on what should be inproved, added,
            etc.
          </p>
          <textarea
            rows={5}
            className="bg-[#F7F8FD] p-3 rounded-md w-full mb-5 font-normal"
            name="description"
            defaultValue={data ? data[0].description : null}
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
          <Button bg={"bg-[#AD1FEA]"}>
            {data ? "Save Changes" : "Add Feedback"}
          </Button>
          <Button bg={"bg-[#3A4374]"}>Cancel</Button>
        </div>
      </form>

      {/* SEPARATE FORM FOR DELETE BUTTON ON EDIT */}
      <form action={deleteFeedbackWithID}>
        {data && <Button bg={"bg-[#D73737]"}>Delete</Button>}
      </form>
    </div>
  );
}
