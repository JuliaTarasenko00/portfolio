import { useFetchExperience } from './useFetchExperience';

export const Experience = () => {
  const { data } = useFetchExperience();

  return (
    <section className="mt-[50px]">
      <div className="container">
        <h2 className="text-end text-[90px] font-bold">Work</h2>
        <ul>
          {data?.map(
            ({ start_work, end_work, name_organization, position }) => (
              <li
                key={name_organization}
                className="flex items-center justify-between"
              >
                <div>
                  <p>
                    {start_work} - {end_work}
                  </p>
                </div>
                <p>{name_organization}</p>
                <p>{position}</p>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
};
