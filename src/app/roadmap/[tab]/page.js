import Container from "@/app/components/Container";

// THIS IS A STATIC PAGE THAT RENDERS DATA BASED ON URL
export default async function Tab({ params }) {
  const tab = (await params).tab;
  return (
    <div>
      <Container>
        <h1>This is the tab data: {tab}</h1>
      </Container>
    </div>
  );
}
