const Course = ({ course }) => {
  // console.log(course);
  // const total = course.parts.reduce((sum, part) => {
  //   return sum + part.exercises;
  // }, 0);

  // console.log(total);

  return (
    <>
      <h1>Web development curriculum</h1>
      {course.map((c) => {
        const total = c.parts.reduce((sum, part) => {
          return sum + part.exercises;
        }, 0);
        return (
          <div key={c.id}>
            <h2>{c.name}</h2>

            {c.parts.map((part) => (
              <p key={part.id}>
                {part.name} {part.exercises}
              </p>
            ))}
            <p>total of {total} exercises</p>
          </div>
        );
      })}
      {/* {course.parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))} */}
    </>
  );
};

export default Course;
