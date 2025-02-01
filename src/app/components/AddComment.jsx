import Button from "./Button";
export default function AddComment() {
  return (
    <div className="bg-white p-5 rounded-md space-y-5">
      <h1 className="text-2xl font-bold">Add Comment</h1>
      <form>
        <textarea
          cols={50}
          rows={3}
          className="w-full p-5 bg-[#F7F8FD]"
          placeholder="Type your comment here"
        />
        <div className="flex items-center justify-between mt-5">
          <p>250 Characters left</p>
          <div>
            <Button bg={"bg-[#4661E6]"}>Post Comment</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
