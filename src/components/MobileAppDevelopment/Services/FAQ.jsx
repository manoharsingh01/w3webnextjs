import React, { useState } from "react";

const accordionData = [
  {
    id: 1,
    question: "What factors influence the cost of building a mobile app?",
    answer: "The overall cost depends on several elements such as app complexity, number of features, design requirements, integrations, and the platforms you choose. Custom functionality, advanced security, and scalability planning can also impact pricing, as they require more development time and expertise.",
    delay: ".1s"
  },
  {
    id: 2,
    question: "How do you plan a mobile app before development starts?",
    answer: "The process begins with understanding business objectives, target users, and market demand. This is followed by defining core features, creating user flows, and building a structured roadmap that ensures the app solves real problems effectively.",
    delay: ".2s"
  },
  {
    id: 3,
    question: "What makes an app successful in today’s competitive market?",
    answer: "A successful app focuses on usability, speed, and real value for users. Clean design, smooth performance, and meaningful features that address user needs play a major role in achieving long-term engagement and retention.",
    delay: ".3s"
  },
  {
    id: 4,
    question: "How do you ensure a smooth user experience in mobile apps?",
    answer: "User experience is improved through research, wireframing, and testing. Every interaction is designed to be simple and intuitive, reducing friction and helping users complete actions quickly and efficiently.",
    delay: ".4s"
  },
  {
    id: 5,
    question: "What is the importance of scalability in mobile apps?",
    answer: "Scalability ensures that the app can handle increasing users, data, and features without affecting performance. A scalable app supports business growth and avoids the need for major structural changes in the future.",
    delay: ".5s"
  },
  {
    id: 6,
    question: "How do mobile apps integrate with other systems or platforms?",
    answer: "Integration is achieved through APIs that connect the app with external services like payment gateways, CRMs, or cloud platforms. This allows smooth data exchange and enhances overall functionality.",
    delay: ".6s"
  },
  {
    id: 7,
    question: "What role does testing play in mobile app development?",
    answer: "Testing helps identify bugs, performance issues, and usability problems before launch. It ensures the app runs smoothly across devices and provides a consistent experience to all users.",
    delay: ".7s"
  },
  {
    id: 8,
    question: "How can mobile apps improve customer engagement?",
    answer: "Mobile apps offer direct interaction through features like notifications, personalized content, and easy access to services. This helps businesses stay connected with users and build stronger relationships.",
    delay: ".8s"
  },
  {
    id: 9,
    question: "What are the key stages of mobile app development?",
    answer: "The main stages include planning, design, development, testing, deployment, and maintenance. Each phase plays a crucial role in ensuring the app is functional, reliable, and aligned with business goals.",
    delay: ".9s"
  },
  {
    id: 10,
    question: "How do you maintain app performance after launch?",
    answer: "Performance is maintained through regular updates, monitoring, and optimization. Fixing bugs, improving speed, and adding new features help keep the app relevant and efficient.",
    delay: "1s"
  },
  {
    id: 11,
    question: "What technologies are commonly used in modern app development?",
    answer: "Modern development uses a combination of frameworks, programming languages, and cloud-based tools to build secure, fast, and scalable applications tailored to different business needs.",
    delay: "1.1s"
  },
  {
    id: 12,
    question: "How do you ensure data security in mobile applications?",
    answer: "Security is handled through encryption, secure authentication, and regular vulnerability testing. Following best practices helps protect user data and maintain trust.",
    delay: "1.2s"
  },
  {
    id: 13,
    question: "Can a mobile app evolve as business needs change?",
    answer: "Yes, apps are designed to be flexible, allowing new features, updates, and improvements to be added over time without disrupting the existing system.",
    delay: "1.3s"
  },
  {
    id: 14,
    question: "How do mobile apps support business growth?",
    answer: "Mobile apps improve accessibility, streamline operations, and enhance customer experience, helping businesses reach a wider audience and increase overall efficiency.",
    delay: "1.4s"
  },
  {
    id: 15,
    question: "What should businesses consider before starting app development?",
    answer: "Businesses should clearly define their goals, audience, and key features. Having a well-planned strategy ensures better execution and long-term success.",
    delay: "1.5s"
  }
];

function FAQ() {
  const [activeId, setActiveId] = useState(null);

  const openAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="intro-corp section-padding pt-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec-head mb-40">
              <h6 className="sub-title">FAQ.</h6>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="cont">
              <div className="text">
                <h2 className="d-slideup wow">
                  <span className="sideup-text">
                    <span className="up-text">
                      Frequently Asked Questions (FAQs)
                    </span>
                  </span>
                </h2>
              </div>

              <div className="accordion bord mt-40">
                {accordionData.map((item) => (
                  <div
                    key={item.id}
                    className={`item mb-15 wow fadeInUp ${
                      activeId === item.id ? "active" : ""
                    }`}
                    data-wow-delay={item.delay}
                  >
                    <div
                      className="title"
                      onClick={() => openAccordion(item.id)}
                    >
                      <h6 className="fz-18">{item.question}</h6>
                      <span className="ico"></span>
                    </div>

                    {/* ✅ Toggle content */}
                    <div
                      className="accordion-info"
                      style={{
                        maxHeight:
                          activeId === item.id ? "200px" : "0px",
                        overflow: "hidden",
                        transition: "0.3s ease",
                      }}
                    >
                      <p className="fz-14">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;