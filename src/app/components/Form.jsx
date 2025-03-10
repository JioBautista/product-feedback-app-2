import deleteFeedback from "../lib/deleteFeedback";
import Label from "./Label";
import Button from "./Button";
import SelectCategory from "./SelectCategory";
import SelectStatus from "./SelectStatus";
import Image from "next/image";

export default function Form({ data, fn }) {
  const pStyles = "text-gray-500 font-normal mb-3";
  const deleteFeedbackWithID = deleteFeedback.bind(
    null,
    data ? data[0].id : null
  );
  return (
    <div className="bg-white px-8 py-10 rounded-md space-y-5 relative">
      {data ? (
        <Image
          className="absolute -top-4 left-5"
          src={"/icon-edit-feedback.svg"}
          width={40}
          height={40}
          alt="Add feedback icon"
        />
      ) : (
        <Image
          className="absolute -top-4 left-5"
          src={"/icon-new-feedback.svg"}
          width={40}
          height={40}
          alt="Edit feedback icon"
        />
      )}
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
            required
          />
        </Label>

        {/* CATEGORY */}
        <Label>
          Category
          <p className={pStyles}>Choose a category for your feedback</p>
          <SelectCategory data={data} />
        </Label>

        {/* UPDATE STATUS only display Block when defaultValue is true */}
        {data ? (
          <Label>
            Update Status
            <p className={pStyles}>Change feature state</p>
            <SelectStatus data={data} />
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
            required
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
        <div className="flex flex-col gap-5 md:flex-row-reverse">
          <Button bg={"bg-[#AD1FEA]"}>
            {data ? "Save Changes" : "Add Feedback"}
          </Button>
          <Button bg={"bg-[#3A4374]"}>Cancel</Button>
          {data ? (
            <Button bg={"bg-[#D73737]"} formAction={deleteFeedbackWithID}>
              Delete
            </Button>
          ) : null}
        </div>
      </form>
    </div>
  );
}
