import FeedbackTitle from "./components/FeedbackTitle";
import FeedbackDesc from "./components/FeedbackDesc";
import FeedbackUpvotes from "./components/FeedbackUpvotes";
import FeedbackComments from "./components/FeedbackComments";
import Chip from "./components/Chip";
import fetchProducts from "./lib/fetchProducts";
import EmptyFeedback from "./components/EmptyFeedback";
import Sort from "./components/Sort";
import NavBar from "./navigationbar/Navbar";

export default async function Home({ searchParams }) {
  const { sort, filter } = await searchParams;
  const rows = await fetchProducts(sort);
  const products = filter ? rows.filter((x) => x.category === filter) : rows;
  console.log(rows);
  return (
    <>
      <NavBar data={rows} />

      <span className="lg:col-span-3">
        <Sort data={products} />

        <div className="p-5 space-y-5">
          {products.map((elements) => (
            <>
              <div
                key={elements.id}
                className="p-5 bg-white rounded-md grid grid-cols-2 gap-y-5 md:flex md:items-center md:gap-5"
              >
                <div className="col-span-2 md:order-2 md:grow">
                  <FeedbackTitle href={`/${elements.id}`}>
                    {elements.title}
                  </FeedbackTitle>
                  <FeedbackDesc>{elements.description}</FeedbackDesc>
                  <Chip>{elements.category}</Chip>
                </div>

                <span className="justify-self-start md:order-1">
                  <FeedbackUpvotes
                    id={elements.id}
                    upvotes={elements.upvotes}
                    flex={"md:flex-col"}
                  />
                </span>

                <span className="justify-self-end md:order-3">
                  <FeedbackComments id={elements.id} />
                </span>
              </div>
            </>
          ))}
          {products.length === 0 && (
            <>
              <div>
                <EmptyFeedback />
              </div>
            </>
          )}
        </div>
      </span>
    </>
  );
}
