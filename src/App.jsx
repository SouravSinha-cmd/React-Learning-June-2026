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
    description:
      "Build responsive user interfaces, optimize web performance, and collaborate with designers to enhance user experience.",
  },
  {
    id: 2,
    companyName: "Google",
    jobTitle: "Backend Engineer",
    type: "Part Time",
    description:
      "Develop scalable APIs and backend services, manage databases, and ensure system reliability and performance.",
  },
  {
    id: 3,
    companyName: "Microsoft",
    jobTitle: "UI/UX Designer",
    type: "Contract",
    description:
      "Create intuitive user experiences, design wireframes and prototypes, and conduct user research to improve products.",
  },
  {
    id: 4,
    companyName: "Netflix",
    jobTitle: "DevOps Engineer",
    type: "Remote",
    description:
      "Automate deployment pipelines, monitor cloud infrastructure, and improve system availability and scalability.",
  },
  {
    id: 5,
    companyName: "Meta",
    jobTitle: "Product Manager",
    type: "Full Time",
    description:
      "Define product strategy, gather requirements, coordinate cross-functional teams, and drive product growth.",
  },
];


  return (
    <>
      <Navbar />
        {/* <Card  /> */}
        <div className="card-wrapper">
          {jobOpenings.map((item) => {
            return (<Card item={item} />)
          })}
        </div>

        {/* <Users /> */}
    </>
  );
}

export default App;