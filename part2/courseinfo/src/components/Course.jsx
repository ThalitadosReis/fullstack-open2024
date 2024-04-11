const Header = ({ name }) => {
  return <h3>{name}</h3>;
};

const Part = ({ parts }) => {
  return (
    <p>
      {parts.name} {parts.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  const differentParts = parts.map((e) => {
    return <Part key={e.id} parts={e} />;
  });

  return <div>{differentParts}</div>;
};

const Total = ({ parts }) => {
  const totalAmount = parts.reduce((sum, order) => sum + order.exercises, 0);
  //   console.log(totalAmount);

  return <strong>Total of {totalAmount} exercises</strong>;
};

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
