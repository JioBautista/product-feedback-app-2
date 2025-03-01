import Link from "next/link";
import Container from "../components/Container";
import Button from "../components/Button";
import Tabs from "../components/Tabs";
import GoBackButton from "../components/GoBackButton";

export default function Layout({ children }) {
  return (
    <div>
      <div className="bg-[#373F68] text-white py-5">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <GoBackButton />
              {/* <Link href={"/"} className="text-sm font-bold">
                Go Back
              </Link> */}
              <h1 className="text-xl font-bold">Roadmap</h1>
            </div>

            <Link href={"/new"}>
              <Button bg={"bg-[#AD1FEA]"}>+ Add Feedback</Button>
            </Link>
          </div>
        </Container>
      </div>

      <div className="md:hidden">
        <Container>
          <Tabs />
        </Container>
      </div>
      {children}
    </div>
  );
}
