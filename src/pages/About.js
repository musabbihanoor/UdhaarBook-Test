import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-3xl mb-5">About Task Implementation</h1>
      <div className="bg-white drop-shadow rounded-lg p-5 mb-5 border-[1px] border-[#eee]">
        <h1>What I had implemented</h1>
        <ul className="list-disc pl-5 font-light text-sm mt-3">
          <li>A "menu" page that contains list of all the meals categories.</li>
          <li>
            A "meals" page where user will be redirected after selecting a
            category. This page will have all the meals of selected category.
          </li>
          <li>
            A "random meal" page that will generate random meals for user.
          </li>
          <li>
            The UI is implemented according to the inspiration in the pdf file
            for task.
          </li>
        </ul>
      </div>

      <div className="bg-white drop-shadow rounded-lg p-5 mb-5 border-[1px] border-[#eee]">
        <h1>Tools/Libraries I have used</h1>
        <ul className="list-disc pl-5 font-light text-sm mt-3">
          <li>I have used "material UI" to create the layout of the UI.</li>
          <li>I have used "tailwind CSS" as well for smaller CSS work.</li>
          <li>
            For state management I have used redux (There wasn't a need of store
            for this task but the job requires redux so this was a good chance
            for demonstration.)
          </li>
        </ul>
      </div>

      <div className="bg-white drop-shadow rounded-lg p-5 mb-5 border-[1px] border-[#eee]">
        <h1>What can be added (but couldn't due to time limitation)</h1>
        <ul className="list-disc pl-5 font-light text-sm mt-3">
          <li>Pagination or infinite scroll for categories and meals list.</li>
          <li>
            Error handling for apis call with Alert messages or snackbars.
          </li>
          <li>
            A loader component and its context for when api call is in process.
          </li>
          <li>
            An extensive display of the rest of the data return by the apis.
            (e.g. recipe page)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
