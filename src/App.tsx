import { useState } from 'react';

const elements = [
  {
    title:
      'The Oppression Machine Data, Doom, and Discipline in the Age of AI and Climate Collapse',
    speaker: 'Marta Periano',
    description:
      '<p>Once hailed as tools of liberation, digital platforms promised to amplify the voice of the people, spark revolutions, and democratize the world. Today, those same platforms have become the silent enablers of surveillance states, authoritarian regimes, and algorithmic control. This talk traces how the tools that promised liberation became instruments of control — and the elements that suggest it might have been the intention all along.</p>',
    resume: [
      'Nos estamos cargando el planeta con tanto centro de datos, tanta nube y tanta historia tecnológica.',
      'Nuestros "líderes" se están cargando el planeta má todavía.',
      'Un evento de desarrollo puede no ser el mejor sitio para plantear charlas políticas.',
    ],
  },
  {
    title: 'Potencia el desarrollo de su interfaz con componentes web',
    speaker: 'Jorge del Casar',
    description:
      '<p>En esta charla haremos una breve introducción a los web components y cómo estos pueden mejorar la Experiencia de Usuario y unificar la Interfaz de Usuario. Iremos desde ejemplos simples de composición hasta ejemplos complejos con inyección de dependencias para integrarlos en arquitecturas hexagonales o modificar su funcionamiento según dónde los incorporemos. En resumen, un recorrido completo sobre las bases de los web components hasta cómo implementar i18n, signals, context. Todo lo que necesitas saber para empezar a incorporar web components en tus interfaces de usuario.</p>',
    resume: [
      'Los web components pueden tener sentido en determinados contextos.',
      'Siguen suponiendo un desarrollo complejo, código muy enrevesado.',
    ],
  },
  {
    title: 'React Beyond the DOM',
    speaker: 'Erik Rasmussen',
    description:
      "<p>It's easy to forget what the creators of React knew from the start: that React is not only for building web pages. Most of us have heard of React Native, that renders to native mobile components, but React doesn't have to render to \"components\" at all. There's React PDF to generate PDFs and Ink for building UI in the terminal.</p><p>At my company, we've built a way for developers to use React to build plugins for our webapp that render to our custom components, giving us full control over the UI design (the \"how\"), whilst giving the plugin developer full control UX (the \"what\").</p><p>In my talk, I'll explain what it's like to build a React renderer and reconciler, what they are and how to use them.</p><p>I'd like to do a live demo showing how React can be used to convert html to markdown. And then I'd like to demonstrate how React can render to the Real World, by controlling IOT devices.</p>",
    resume: [
      'React es mucho más de aquello para lo que lo usamos.',
      'El límite es tu imaginación. Mañana me pongo a hacer algo chulo. O pasado si eso.',
      'Mola todo pero si me lo hace otro, mola mucho más.',
    ],
  },
  {
    title: "Modern cibercriminals don't hack in, they log in",
    speaker: 'Yaiza Rubio & Javier Espinosa',
    description:
      '<p>Identity management is important for all companies, managing both authentication and authorisation mechanisms to harden identity theft as any cibercriminal can steal a Session Cookie, an OAuth Token or your employee giving away the password on that phishing website or in a fake contact centre phone call. In this session we will show you how to take your Identity Policy to the next level by using the second authorisation factors also adapted to web3 developers. We will also look at how to adapt these mechanisms to a post-quantum world. </p>',
    resume: [
      'Habla con tus mayores y que cambien 123456789, por favor.',
      'Ojo con los foros de funkos.',
      'Hasta los que conocemos el mundo online podemos caer en tonterías.',
      'Si te escribe un príncipe nigeriano, ¡estás de enhorabuena! Vas a forrarte fijo fijo fijo.',
    ],
  },
  {
    title:
      'WWWAI: Constructing a truly open GenAI app with WebAssembly, WebGPU, and WebAI',
    speaker: 'Susanna Wong',
    description:
      '<p>Building AI for the web feels out of reach for many developers due to limited control over LLM APIs and high costs. What if we could democratize AI development for the web? Enter Wasm, WebGPU, and WebNN, and performance optimization techniques for integrating open models into robust, high-performance applications. Discover how these tools can revolutionize AI-powered web development, giving developers full control of their GenAI applications!</p>',
    resume: [
      'Seamos sinceros. Una charla de este nivel, en inglés, justo después de comer, y con una persona que lee más rápido que cortocircuito, no.',
      'Simplemente, de verdad, no. Ya con el vídeo, tranquilamente, analizamos.',
      'Joseba no vuelve a elegir charla.',
    ],
  },
  {
    title: 'React Reinvented',
    speaker: 'Javi Velasco',
    description:
      "<p>This session explores the evolution of the React ecosystem, culminating in the revolutionary React Server Components and their impact on modern application architecture.</p><p>We'll journey through the progression of rendering models, starting with early client-side frameworks like Backbone.js and arriving at today's sophisticated applications. We'll highlight the critical role of Suspense and Streaming in delivering exceptional user experiences.</p><p>Time permitting, we'll get into how UI streaming enables strategic caching via Partial Pre-rendering (PPR), effectively merging the benefits of static and dynamic content delivery.</p><p>To solidify understanding, we'll conclude with practical examples and live coding demonstrations of emerging patterns from this new rendering approach. We'll also explore how these patterns address the challenges of integrating slow-streaming AI APIs to build enhanced applications.</p>",
    resume: [
      'React Server Components ¿Molan? Sí.',
      '¿Mola mezclar código de back en el desarrollo frontal? No.',
      '¿Depende del proyecto? Básicamente.',
    ],
  },
  {
    title:
      'Hexagonal Architecture in Practice, Live Coding That Will Make Your Applications More Sustainable',
    speaker: 'Julien Topçu',
    description:
      '<p>There always comes a point where software becomes so complex and old that it becomes unmaintainable. Updating the technical stack without breaking everything becomes impossible, implementing new features takes longer, and the technical debt is so overwhelming that refactoring becomes exorbitant.</p><p>What if we told you that all of this is more of a practice problem than a software aging problem?</p><p>Come and discover through hands-on experience in this 100% live coding session how Hexagonal Architecture can tackle software complexity, making it possible for you to be adaptable and sustainable while helping you manage your technical debt more effectively.</p>',
    resume: [
      'Edu tampoco vuelve a elegir charla.',
      'En una pelea a puños, ganamos a los 200 javeros que había si la ocasión lo requiere.',
    ],
  },
  {
    title:
      'Más allá del prompt: cómo MCP conecta modelos de lenguaje con herramientas reales',
    speaker: 'Andres Leon',
    description:
      '<p>Model Context Protocol (MCP) es un nuevo estándar abierto que permite conectar agentes de IA con herramientas, datos y aplicaciones reales de forma modular y segura. En esta charla exploraremos cómo MCP está transformando el desarrollo de agentes inteligentes al resolver el caos de las integraciones personalizadas. Mostraremos código real, ejemplos prácticos (IDE Zed, Claude Desktop, WindSurf, Goose) y cómo crear un servidor MCP en minutos usando TypeScript o Python. Veremos cómo integrar MCP con frameworks de agentes como LangGraph y aprovechar sus conceptos clave (prompts, tools, resources, sampling y composability) para construir arquitecturas distribuidas y autónomas. Ideal para desarrolladores, arquitectos de IA y tecnólogos interesados en interoperabilidad y agentes inteligentes. Esta charla proporciona herramientas prácticas y visión de futuro para quienes quieren construir sistemas más potentes, conectados y sostenibles en el ecosistema LLM.</p>',
    resume: [
      'Que se acabe este evento, quiero ir a casa a mirar esta movida.',
      'Los MCP huelen a mucha movida molona. Y posiblemente a una nueva forma de trabajar.',
      'Sigue siendo algo nuevo, ojito con lo que hacemos con los MCP.',
    ],
  },
  {
    title: 'Agentes de IA: la nueva era del software inteligente',
    speaker: 'David Mangas & David Sancho Ruiz',
    description:
      '<p>Los agentes de inteligencia artificial están marcando el comienzo de una nueva era, en la que las máquinas no solo responden, sino que actúan de forma autónoma para ayudarnos a lograr objetivos complejos. En esta sesión exploraremos qué son realmente los agentes de IA, por qué están ganando tanta relevancia, y cómo están cambiando la manera en que diseñamos software, interfaces y flujos de trabajo. Hablaremos de los componentes clave que hacen posible su funcionamiento (memoria, planificación, acción, razonamiento) y de cómo se están utilizando ya en aplicaciones reales, desde asistentes inteligentes hasta herramientas que automatizan tareas completas.</p><p>Además, profundizaremos en cómo implementar agentes con Semantic Kernel, cómo orquestarlos y los nuevos protocolos como MCP y A2A que forman parte de esta evolución. Si quieres entender cómo pasar del uso pasivo de modelos de lenguaje a soluciones inteligentes y proactivas, esta charla es tu punto de partida.</p>',
    resume: [
      'MCP para todos los gustos: Python y TS.',
      'Hemos venido a hablar de nuestro libro de Microsoft y venderos nuestro producto, para qué engañarnos.',
    ],
  },
  {
    title:
      'Surfing the Generative AI Wave: A New Era in Building Banking Systems',
    speaker: 'Pablo Delgado Romero',
    description:
      '<p>La IA generativa no es una moda. Es una tecnología en rápida evolución que ya está transformando cómo concebimos, desarrollamos y operamos software. También en la banca. En esta charla compartimos cómo estamos transformando el ciclo de vida del desarrollo con una mentalidad IA-native. De copilotos pasamos a agentes autónomos y AI workers, en arquitecturas adaptativas donde código, contexto y modelos trabajan juntos desde el primer minuto. Como en el surf, no basta con flotar. Hay que leer el mar, remar a tiempo y aprovechar la ola correcta. Veremos cómo diferenciamos hype de valor real, redibujamos procesos en un entorno regulado y construimos nuestra propia escuela de surf. Equipos que aprenden, practican y evolucionan con habilidades como prompt engineering, MLOps, arquitectura IA-native, observabilidad semántica y AI Product Thinking. Una charla para quienes quieren construir donde la tecnología transforma de verdad.</p>',
    resume: [
      'Está claro que se viene una revolución, o más bien estamos en ella.',
      'El ritmo es vertiginoso, si te quedas atrás, golpe de remo.',
      'Currar en su empresa mola mucho. Hacen cosas chachi pistachis. Están contratando, por si no había quedado claro.',
    ],
  },
];

const imageClasses = {
  visible:
    'absolute top-0 left-0 h-full flex items-start justify-center w-full pt-4 transition-opacity duration-500 opacity-100',
  hidden:
    'absolute top-0 left-0 h-full flex items-start justify-center w-full pt-4 transition-opacity duration-500 opacity-0',
};
const resumeClasses = {
  visible:
    'absolute bottom-0 top-0 bg-gray-300 flex center transition-opacity duration-500 opacity-100',
  hidden:
    'absolute bottom-0 top-0 bg-gray-300 flex center transition-opacity duration-500 opacity-0 pointer-events-none',
};

function App() {
  const [states, setStates] = useState<boolean[]>(
    Array(elements.length).fill(false)
  );

  const handleClick = (index: number) => {
    setStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className='flex flex-col items-center justify-center font-roboto'>
      <div className='h-screen flex flex-col gap-6 items-center justify-center text-white bg-dark w-full relative z-1'>
        <h1 className='text-6xl font-bold text-vodafone font-golos'>
          #codemotion2025
        </h1>
        <p>Lo que pasa en el Codemotion, se queda en... el Web Guild!</p>
        <img
          src='./team.png'
          alt='Equipazo!'
          className='w-[420px] h-[420px] rounded-full mt-8'
        />
      </div>
      <div className='py-40 px-12 box-content relative min-h-screen max-w-[1280px] mx-auto'>
        <span className='w-[1px] bg-dark absolute left-[50%] top-0 bottom-0 h-inherit' />
        <ul className='w-[50%] left-[50%] flex flex-col gap-16'>
          {elements.map((element, index) => (
            <li
              key={element.title}
              className="relative transform odd:translate-x-[100%] pr-12 odd:pr-0 odd:pl-12 before:content-[''] before:absolute before:w-[11px] before:h-[11px] before:bg-dark before:top-4 before:rounded-full before:transform before:-translate-[50%] before:left-[100%] odd:before:-translate-[50%] odd:before:left-[0] odd:[&>div:first-child]:-translate-x-[100%] even:[&>div:first-child]:translate-x-[100%] h-[70dvh] odd:[&>div:last-child]:left-12 odd:[&>div:last-child]:right-0 even:[&>div:last-child]:left-0 even:[&>div:last-child]:right-12 [&:marker]:opacity-0"
            >
              <div
                className={
                  states[index] ? imageClasses.visible : imageClasses.hidden
                }
              >
                <img
                  className='max-h-60 h-full rounded-2xl'
                  src={`./img-${index + 1}.gif`}
                  alt=''
                />
              </div>
              <button
                className='text-left w-full cursor-pointer transform duration-500 hover:text-vodafone hover:translate-x-4 transition-all'
                onClick={() => handleClick(index)}
              >
                <h2 className='font-bold font-golos text-2xl'>
                  {element.title}
                </h2>
              </button>
              <span className='font-bold text-gray-600 text-sm mt-1 mb-3 block'>
                {element.speaker}
              </span>
              <div dangerouslySetInnerHTML={{ __html: element.description }} />
              <div
                className={
                  states[index] ? resumeClasses.visible : resumeClasses.hidden
                }
              >
                <div className='max-h-60 flex items-center'>
                  <ul className='flex flex-col gap-4 pt-4 pl-6'>
                    {element.resume?.map((item) => (
                      <li key={item} className='text-lg text-gray-700'>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="fixed left-[50%] top-0 bottom-0 w-[50%] bg-black z-10" />
    </div>
  );
}

export default App;
