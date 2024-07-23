import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((Experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
            {/* experience.year put the year on the left side of the page */}
              <p className="mb-2 text-sm text-neutral-400">{Experience.year}</p>
            </div>
            {/* experience.role puts the job role in the center under experience */}
              <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {Experience.role} -{''} 
                <span className="text-sm text-purple-100">
                    {/* experience.company puts the company next to the role */}
                    {Experience.company}
                    </span> 
                </h6>
                <p className='MB-4 text-neutral-400'>{Experience.description}</p>
                {/* experience/technologies.map are the tags used below the descriptions */}
                {Experience.technologies.map ((tech, index) => (
                    <span key={index}>{tech}</span>
                

                ))}
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
