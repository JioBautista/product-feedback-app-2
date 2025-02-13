import Button from "./Button";
export default async function ReplyTo() {
  return (
    <div className="flex flex-col gap-2">
      <form>
        <textarea
          name="content"
          cols={20}
          rows={2}
          className="border-2 w-full bg-[#F7F8FD] p-3"
        />
        <Button bg={"bg-[#AD1FEA]"}>Post Reply</Button>
      </form>
    </div>
  );
}
