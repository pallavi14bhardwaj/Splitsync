// Stats section shown below hero

function Stats() {
  const stats = [
    {
      number: "10,000+",
      title: "Active Users",
    },
    {
      number: "50,000+",
      title: "Expenses Managed",
    },
    {
      number: "₹2Cr+",
      title: "Settled Payments",
    },
    {
      number: "4.9★",
      title: "App Rating",
    },
  ];

  return (
    <section className="bg-emerald-500 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

        {stats.map((item, index) => (
          <div key={index}>
            <h1 className="text-4xl font-bold text-white">
              {item.number}
            </h1>

            <p className="text-emerald-100 mt-2 text-lg">
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Stats;