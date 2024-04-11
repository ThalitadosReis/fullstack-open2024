import Course from "./components/Course";

const App = () => {
  const course = [
    {
      id: 1,
      name: "Half Stack Application Development",
      parts: [
        {
          id: 1,
          name: "Fundamentals of React",
          exercises: 10,
        },
        {
          id: 2,
          name: "Using props to pass data",
          exercises: 7,
        },
        {
          id: 3,
          name: "State of a component",
          exercises: 14,
        },
        {
          id: 4,
          name: "Redux",
          exercises: 11,
        },
      ],
    },

    {
      id: 2,
      name: "Node.js",
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  const allCourses = course.map((courses) => {
    return <Course key={courses.id} course={courses} />;
  });

  return (
    <div>
      <h1>Web Development Curriculum</h1>
      {allCourses}
    </div>
  );
};

export default App;
