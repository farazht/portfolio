import Project from "./components/Project";
import Fade from "./components/Fade";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const projectItems = [
  {
    year: "2026",
    name: "Witness",
    description: (
      <>
        Mobile app to create study groups focused on social accountability.
        Ranked <span className="font-semibold text-white">1st Place</span> out of 15+ teams at a project demo showcase.
      </>
    ),
    tags: ["mobile", "native-app"],
    image: "/projects/witness.png",
    link: "https://github.com/faraz-t/witness",
  },
  {
    year: "2026",
    name: "SpeedStats",
    description: (
      <>
        Web app that displays extensive real-time stats from a Minecraft
        speedrunning API. Currently used by{" "}
        <span className="font-semibold text-white">1500+ monthly users</span>.
      </>
    ),
    tags: ["api", "data-viz", "web-app"],
    image: "/projects/speedstats.png",
    link: "https://speedstats.vercel.app/",
  },
  {
    year: "2026",
    name: "Z4 Finance",
    description: (
      <>
        Stock research & analytics project combining yfinance data with sentiments from investing subreddits to generate insights on market trends. (WIP)
      </>
    ),
    tags: ["finance", "quant", "nlp", "api"],
    image: "/projects/z4finance.png",
    link: "https://github.com/faraz-t/z4"
  },
  {
    year: "2026",
    name: "Portfolio",
    description: (
      <>
        Personal portfolio website built with
        Next.js, Tailwind CSS, and Vercel for deployment.
      </>
    ),
    tags: ["web", "graphic-design", "ui-ux"],
    image: "/projects/portfolio.png",
    link: "https://github.com/faraz-t/portfolio",
  },
  {
    year: "2025",
    name: "Custom Neural Network",
    description: (
      <>
        Artificial neural network library implemented from scratch in{" "}
        <span className="font-semibold text-white">C++</span> to achieve{" "}
        <span className="font-semibold text-white">97% accuracy</span> on image
        classification.
      </>
    ),
    tags: ["machine-learning", "linear-algebra", "math"],
    image: "/projects/neuralnetwork.png",
    link: "https://github.com/faraz-t/neural-network",
  },
  {
    year: "2025",
    name: "BillBoard",
    description: (
      <>
        Full-stack government policy discussion platform with forums, petitions, polls,
        interactive maps, LLM integration, and more. Placed{" "}
        <span className="font-semibold text-white">Top 10</span> @ HackTheChange.
      </>
    ),
    tags: ["full-stack", "relational-database", "llm"],
    image: "/projects/billboard.png",
    link: "https://github.com/faraz-t/BillBoard",
  },
  {
    year: "2024",
    name: "InsightUBC",
    description: (
      <>
        Full-stack application using a{" "}
        <span className="font-semibold text-white">RESTful API</span> to query
        class section datasets and display comprehensive insights.
      </>
    ),
    tags: ["full-stack", "rest-api", "data-viz"],
    image: "/projects/insightubc.png",
  },
  {
    year: "2024",
    name: "ImmuneIT",
    description: (
      <>
        Cybersecurity system designed for growing canadian businesses in
        healthcare. Placed{" "}
        <span className="font-semibold text-white">Top 15</span> @ ProduHacks.
      </>
    ),
    tags: ["web-app", "cybersecurity", "llm"],
    image: "/projects/immuneit.png",
    link: "https://github.com/Jacob-Guglielmin/ImmuneIT",
  },
  {
    year: "2023",
    name: "Identifying Heart Disease",
    description: (
      <>
        Comparing the efficacy of{" "}
        <span className="font-semibold text-white">4 classification models</span>{" "}
        in predicting coronary heart disease. Built @ CPL hackathon.
      </>
    ),
    tags: ["statistics", "data-viz", "machine-learning"],
    image: "/projects/heartdisease.png",
    link: "https://github.com/faraz-t/heart-disease",
  },
  {
    year: "2023",
    name: "ElegantChaos",
    description: (
      <>
        Tool for visualizing{" "}
        <span className="font-semibold text-white">
          chaotic mathematical systems
        </span>{" "}
        based on x-y-time equations.
      </>
    ),
    tags: ["mathematics", "algorithms"],
    image: "/projects/elegantchaos.png",
    link: "https://github.com/faraz-t/elegantchaos",
  },
];

export default function HomePage() {
  return (
    <main>
      <div className="mx-auto max-w-4xl px-6 md:px-8 py-16 leading-[1.8]">
        {/* Intro */}
        <Fade>
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight">
            Hey, I'm <span className="gradient-text">Faraz</span>.
          </h1>
          <p className="flex items-center gap-1 text-pretty text-xs sm:text-sm text-[var(--foreground)]/75 mb-12">
            <MapPin className="inline-block" size={10} />
            AB, Canada
          </p>
        </Fade>

        <Fade>
          <section aria-labelledby="about-me" className="mb-6">
            <h2 id="about-me" className="highlight text-base sm:text-lg md:text-xl text-white mb-2">
              Mission:
            </h2>
            <ul className="list-disc pl-6 text-base sm:text-lg md:text-xl text-[var(--foreground)]/75 leading-6 sm:leading-7 space-y-1">
              <li>
                I am passionate about building software that is{" "}
                <span className="text-white">simple</span>,{" "}
                <span className="text-white">powerful</span>, and{" "}
                <span className="text-white">elegant</span>.
              </li>
              <li>
                I mainly specialize in{" "}
                <span className="text-white">full-stack development</span>,{" "}
                <span className="text-white">data science</span>, and{" "}
                <span className="text-white">machine learning</span>.
              </li>
            </ul>
          </section>
        </Fade>

        <Fade>
          <section aria-labelledby="about-me" className="mb-6">
            <h2 id="about-me" className="highlight text-base sm:text-lg md:text-xl text-white mb-2">
              History:
            </h2>
            <ul className="list-disc pl-6 text-base sm:text-lg md:text-xl text-[var(--foreground)]/75 leading-6 sm:leading-7 space-y-1">
              <li>
                I currently work at <span className="text-white">Health Canada</span> as a <span className="text-white">Junior Data Scientist</span>, where I focus on data analysis, machine learning, and developing internal tools.
              </li>
              <li>
                I have a degree in Computer Science + Data Science from <span className="text-white">UBC</span>.
              </li>
              <li>
                I was previously part of <span className="text-white">UBC Bionics</span>, where I built & maintained <span className="text-white">two full-stack sites</span> while also leading a team of developers, finance officers, and sponsorship coordinators.
              </li>
              <li>
                I previously worked as a <span className="text-white">freelance developer</span> for a review-aggregator company, where my contributions led to a 87% increase in user satisfaction.
              </li>
            </ul>
          </section>
        </Fade>
        <Fade>
          <p className="text-base sm:text-lg md:text-xl text-[var(--foreground)]/75 leading-6 sm:leading-7 mb-6">
            Below is a collection of some of my recent projects and
            experiments. I hope you find something interesting!
          </p>
        </Fade>

        {/* Projects */}
        <section className="py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {projectItems.map((p) => (
              <Fade key={p.name}>
                <Project
                  imageSrc={p.image}
                  title={p.name}
                  description={p.description}
                  date={p.year}
                  tags={p.tags}
                  github={p.link}
                  slug={p.name.toLowerCase().replace(/\s/g, "-")}
                />
              </Fade>
            ))}
          </div>

          <Fade>
            <Showcase title="Feel free to reach out!">
              <div className="flex items-center justify-center gap-6 mt-2">
                <a
                  href="https://github.com/faraz-t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 text-white transition-opacity"
                >
                  <Github size={22} />
                </a>

                <a
                  href="https://linkedin.com/in/farazht"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 text-white transition-opacity"
                >
                  <Linkedin size={22} />
                </a>

                <a
                  href="mailto:youremail@example.com"
                  className="hover:opacity-70 text-white transition-opacity"
                >
                  <Mail size={22} />
                </a>
              </div>
            </Showcase>
          </Fade>
        </section>
      </div>
      <Fade>
        <Footer />
      </Fade>
    </main>
  );
}