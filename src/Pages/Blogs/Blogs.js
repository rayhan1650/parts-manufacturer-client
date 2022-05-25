import React from "react";

const Blogs = () => {
  return (
    <div className="px-14">
      <h2 className="font-bold text-2xl mt-10">
        Q1: How will you improve the performance of a React Application?
      </h2>
      <h4 className="font-bold text-xl underline ">Answer:</h4>
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

      <h2 className="font-bold text-2xl mt-10">
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

      <h2 className="font-bold text-2xl mt-10">
        Q3: How does prototypical inheritance work?
      </h2>
      <h4 className="font-bold text-xl underline ">Answer:</h4>
      <p className="text-lg">
        JavaScript is the most common of the prototype-capable languages, and
        its capabilities are relatively unique. When used appropriately,
        prototypical inheritance in JavaScript is a powerful tool that can save
        hours of coding. The Prototypal Inheritance is a feature in javascript
        used to add methods and properties in objects. It is a method by which
        an object can inherit the properties and methods of another object.
        Traditionally, in order to get and set the Prototype of an object, we
        use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern
        language, it is being set using __proto__. Suppose we have an object
        named person and another object named teacher that can access the name
        property and greet() method from the person object via the prototype
        chain. When you call the greet() method on the teacher object, the
        JavaScript engine finds it in the teacher object first. Since the
        JavaScript engine cannot find the method in the teacher object, it
        follows the prototype chain and searches for the method in the person
        object. Because the JavaScript can engine can find the greet() method in
        the person object, it executes the method. In JavaScript, we say that
        the teacher object inherits the methods and properties of the person
        object. And this kind of inheritance is called prototypal inheritance.
      </p>

      <h2 className="font-bold text-2xl mt-10">
        Q6: What is a unit test? Why should write unit tests?
      </h2>
      <h4 className="font-bold text-xl underline ">Answer:</h4>
      <p className="text-lg">
        <strong>Unit testing:</strong> Unit testing is a component of
        test-driven development (TDD), a pragmatic methodology that takes a
        meticulous approach to building a product by means of continual testing
        and revision. This testing method is also the first level of software
        testing, which is performed before other testing methods such as
        integration testing. Unit tests are typically isolated to ensure a unit
        does not rely on any external code or functions. Testing can be done
        manually but is often automated.
        <br />
        <strong>Why should write unit tests: </strong>Unit tests save time and
        money. Well-written unit tests act as documentation for your code. Any
        developer can quickly look at your tests and know the purpose of your
        functions. It simplifies the debugging process. Unit tests make code
        reuse easier. If you want to reuse existing code in a new project, you
        can simply migrate both the code and tests to your new project, then run
        your tests to make sure you have the desired results. In the testing
        pyramid, unit tests are faster than integration and end-to-end. They are
        more assertive and return quick feedback. That is why we should write
        unit testing.
      </p>
    </div>
  );
};

export default Blogs;
