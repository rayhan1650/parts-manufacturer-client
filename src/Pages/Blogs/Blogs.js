import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2>Blogs</h2>
      <ol className="text-lg">
        <li>1. We should keep component state local where necessary.</li>
        <li>
          2. By using pagination we can improve the performance of react
          application.
        </li>
        <li>
          3. By caching function because, if the functions get expensive, it
          takes long to execute it will hang the rest of the re-render code to
          finish thereby hampering the user's experience.
        </li>
        <li>
          4. By avoiding Inline Function Definition in the Render Function.
        </li>
        <li>
          5. Sometimes we use index as key for map. But it shouldn't be used for
          batter performance. Rather we should use unique id as key.
        </li>
      </ol>

      <h2 className="font-bold text-2xl">
        Q2: What are the different ways to manage a state in a React
        application?
      </h2>
      <h4 className="font-bold text-xl underline ">
        Answer: Different ways to manage a state in a React application
      </h4>
      <p className="text-lg">
        <strong>Local state:</strong> Local state is data we manage in one or
        another component. Local state is most often managed in React using the
        useState hook. For example, local state would be needed to show or hide
        a modal component or to track values for a form component, such as form
        submission, when the form is disabled and the values of a form's inputs.
        <br />
        <strong>Global state:</strong> Global state is data we manage across
        multiple components. Global state is necessary when we want to get and
        update data anywhere in our app, or in multiple components at least.
        <br />
        <strong>Server state:</strong> Data that comes from an external server
        that must be integrated with our UI state. Server state is a simple
        concept, but can be hard to manage alongside all of our local and global
        UI state.
        <br />
        <strong>URL state:</strong> Data that exists on our URLs, including the
        pathname and query parameters. URL state is often missing as a category
        of state, but it is an important one. In many cases, a lot of major
        parts of our application rely upon accessing URL state. Try to imagine
        building a blog without being able to fetch a post based off of its slug
        or id that is located in the URL!
      </p>
    </div>
  );
};

export default Blogs;
