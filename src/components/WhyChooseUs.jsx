import { CheckCircle, Award, BookOpen, Calendar } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Badge and Certification",
      description:
        "Incident pallemtesque model trialique senectus et neius et molteuodio formes",
    },
    {
      icon: BookOpen,
      title: "Online Library Services",
      description:
        "Incident pallemtesque model trialique senectus et neius et molteuodio formes",
    },
    {
      icon: Calendar,
      title: "Organized Planner",
      description:
        "Turple egestos vivamus thoidunt. Pallemtesque hoiduant motel vivamus trialique.",
    },
  ];

  return (
    <section className="pb-10 custom-container">
      <div className="">
        {/* Header Section */}

        <h1 className="text-4xl md:text-5xl font-medium text-black mb-14 max-w-[700px] leading-12">
          Why Choosing Us Is The Best Option For Your Education
        </h1>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-100 rounded-2xl shadow hover:shadow transition-all duration-300 p-8 group hover:transform hover:-translate-y-2"
              >
                {/* Icon Container */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center group-hover:bg-violet-600 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-violet-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
