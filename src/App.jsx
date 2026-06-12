import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Users from "./components/Users"; 

const App = () => {

  const jobOpenings = [
  {
    id: 1,
    companyName: "Amazon",
    jobTitle: "Frontend Developer",
    type: "Full Time",
  },
  {
    id: 2,
    companyName: "Google",
    jobTitle: "Backend Engineer",
    type: "Part Time",
  },
  {
    id: 3,
    companyName: "Microsoft",
    jobTitle: "UI/UX Designer",
    type: "Contract",
  },
  {
    id: 4,
    companyName: "Netflix",
    jobTitle: "DevOps Engineer",
    type: "Remote",
  },
  {
    id: 5,
    companyName: "Meta",
    jobTitle: "Product Manager",
    type: "Full Time",
  },
];

  const test = [1,2,3,4,5,6];

  return (
    <>
      <Navbar />
        {/* <Card  /> */}
        <div className="card-wrapper">
          {jobOpenings.map((e) => {
            return (<Card />);
          })}
        </div>

        {/* <Users /> */}
    </>
  );
}

export default App;