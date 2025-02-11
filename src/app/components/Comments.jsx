import fetchComments from "../lib/fetchComments";

export default async function Comments({ id }) {
  const comments = await fetchComments(id);

  console.log(comments);
  return (
    <div className="bg-white p-8 rounded-md space-y-5">
      <h1 className="font-bold text-xl">
        {comments ? comments.length : 0} Comments
      </h1>
      {comments
        ? comments.map((comment) => (
            <>
              <div key={comment.id} className="border-b-2 space-y-3 pb-5">
                <div>
                  <p className="font-bold">{comment.full_name}</p>
                  <p className="text-gray-500">@{comment.username}</p>
                </div>
                <div>
                  <p className="text-gray-500">{comment.content}</p>
                </div>
              </div>
            </>
          ))
        : null}
    </div>
  );
}
