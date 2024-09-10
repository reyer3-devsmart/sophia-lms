export const courses = [
  "Fundamentos del manejo de objeciones",
  "Técnicas avanzadas de negociación",
  "Comunicación efectiva y escucha activa",
  "Manejo de objeciones específicas",
  "Psicología del deudor",
  "Resolución de conflictos"
];

export const coursesContent = [
  // Fundamentos del manejo de objeciones
  {
    title: "Fundamentos del manejo de objeciones",
    content: [
      {
        title: "Tema 1: Introducción al manejo de objeciones",
        activities: [
          {
            id: 'video_bienvenida',
            type: 'video',
            title: 'Video: Bienvenida al curso',
            description: 'Introducción al curso por el instructor principal. Duración: 5 minutos.'
          },
          {
            id: 'lectura_objetivos',
            type: 'lectura',
            title: 'Lectura: Objetivos del curso',
            description: 'Descripción detallada de los objetivos de aprendizaje y las competencias a desarrollar.'
          },
          {
            id: 'cuestionario_inicial',
            type: 'cuestionario',
            title: 'Cuestionario: Evaluación inicial',
            description: 'Evaluación de conocimientos previos sobre manejo de objeciones. 10 preguntas.'
          }
        ]
      },
      {
        title: "Tema 2: Tipos comunes de objeciones",
        activities: [
          {
            id: 'lectura_clasificacion',
            type: 'lectura',
            title: 'Lectura: Clasificación de objeciones',
            description: 'Estudio detallado de los diferentes tipos de objeciones en cobranza: \n- Objeciones por capacidad de pago \n- Objeciones por voluntad de pago \n- Objeciones técnicas o de producto \n- Objeciones emocionales'
          },
          {
            id: 'video_desempleo',
            type: 'video',
            title: 'Video: Manejo de objeción por desempleo',
            description: 'Análisis profundo de cómo manejar la objeción "No puedo pagar porque estoy desempleado". \nTemas cubiertos: \n- Empatía y escucha activa \n- Exploración de alternativas de pago \n- Negociación de planes de pago flexibles \n- Recursos para deudores desempleados',
            videoUrl: 'https://youtu.be/0phCfEaz_O4'
          },
          {
            id: 'lectura_liquidez',
            type: 'lectura',
            title: 'Lectura: Objeciones por falta de liquidez',
            description: 'Estudio de caso sobre manejo de objeciones relacionadas con problemas de flujo de caja: \n- Identificación de señales de problemas de liquidez \n- Estrategias para proponer soluciones de pago adaptadas \n- Técnicas de negociación para acuerdos de pago parcial \n- Importancia del seguimiento en casos de falta de liquidez'
          },
          {
            id: 'foro_experiencias',
            type: 'foro',
            title: 'Foro: Compartir experiencias con objeciones comunes',
            description: 'Espacio de discusión para que los participantes compartan sus experiencias y mejores prácticas en el manejo de objeciones frecuentes en cobranza.'
          }
        ]
      },
      {
        title: "Tema 3: Técnicas básicas de manejo de objeciones",
        activities: [
          {
            id: 'lectura_tecnicas_basicas',
            type: 'lectura',
            title: 'Lectura: Técnicas básicas de manejo de objeciones',
            description: 'Introducción a las técnicas fundamentales para abordar objeciones: \n- Escucha activa \n- Empatía \n- Reformulación \n- Preguntas efectivas'
          },
          {
            id: 'video_demostracion',
            type: 'video',
            title: 'Video: Demostración de técnicas básicas',
            description: 'Ejemplos prácticos de cómo aplicar las técnicas básicas en situaciones reales de cobranza.'
          },
          {
            id: 'tarea_practica',
            type: 'tarea',
            title: 'Tarea: Práctica de técnicas',
            description: 'Los participantes practicarán las técnicas básicas en escenarios simulados de cobranza.'
          }
        ]
      }
    ]
  },
  // Técnicas avanzadas de negociación
  {
    title: "Técnicas avanzadas de negociación",
    content: [
      {
        title: "Tema 1: Fundamentos de la negociación avanzada",
        activities: [
          {
            id: 'lectura_principios',
            type: 'lectura',
            title: 'Lectura: Principios de negociación avanzada',
            description: 'Estudio de los principios clave en negociaciones complejas: \n- Creación de valor \n- Manejo de poder \n- Estrategias de influencia'
          },
          {
            id: 'video_casos',
            type: 'video',
            title: 'Video: Análisis de casos de negociación',
            description: 'Examen de casos reales de negociaciones exitosas en el ámbito de la cobranza.'
          }
        ]
      },
      {
        title: "Tema 2: Estrategias de negociación en cobranzas",
        activities: [
          {
            id: 'lectura_estrategias',
            type: 'lectura',
            title: 'Lectura: Estrategias avanzadas de negociación',
            description: 'Exploración de estrategias sofisticadas: \n- Negociación basada en intereses \n- Técnicas de ancla \n- Manejo de deadlocks'
          },
          {
            id: 'taller_simulacion',
            type: 'tarea',
            title: 'Taller: Simulación de negociaciones complejas',
            description: 'Participación en simulaciones de negociaciones desafiantes en escenarios de cobranza.'
          }
        ]
      }
    ]
  },
  // Comunicación efectiva y escucha activa
  {
    title: "Comunicación efectiva y escucha activa",
    content: [
      {
        title: "Tema 1: Principios de la comunicación efectiva",
        activities: [
          {
            id: 'lectura_com_efectiva',
            type: 'lectura',
            title: 'Lectura: Fundamentos de la comunicación efectiva',
            description: 'Estudio de los elementos clave de la comunicación efectiva en el contexto de cobranzas.'
          },
          {
            id: 'video_ejemplos',
            type: 'video',
            title: 'Video: Ejemplos de comunicación efectiva',
            description: 'Análisis de situaciones reales que demuestran comunicación efectiva en cobranzas.'
          }
        ]
      },
      {
        title: "Tema 2: Técnicas de escucha activa",
        activities: [
          {
            id: 'taller_escucha',
            type: 'tarea',
            title: 'Taller: Práctica de escucha activa',
            description: 'Ejercicios prácticos para desarrollar habilidades de escucha activa en conversaciones de cobranza.'
          },
          {
            id: 'cuestionario_com',
            type: 'cuestionario',
            title: 'Cuestionario: Evaluación de habilidades de comunicación',
            description: 'Evaluación para medir la comprensión y aplicación de técnicas de comunicación efectiva.'
          }
        ]
      }
    ]
  },
  // Manejo de objeciones específicas
  {
    title: "Manejo de objeciones específicas",
    content: [
      {
        title: "Tema 1: Objeciones por capacidad de pago",
        activities: [
          {
            id: 'lectura_cap_pago',
            type: 'lectura',
            title: 'Lectura: Manejo de objeciones por capacidad de pago',
            description: 'Estrategias detalladas para abordar situaciones donde el cliente alega incapacidad de pago.'
          },
          {
            id: 'caso_estudio_cap',
            type: 'tarea',
            title: 'Caso de estudio: Análisis de capacidad de pago',
            description: 'Análisis profundo de un caso real de objeción por capacidad de pago y cómo se resolvió.'
          }
        ]
      },
      {
        title: "Tema 2: Objeciones técnicas y de producto",
        activities: [
          {
            id: 'video_obj_tecnicas',
            type: 'video',
            title: 'Video: Manejo de objeciones técnicas',
            description: 'Demostración de cómo manejar objeciones relacionadas con aspectos técnicos o de producto.'
          },
          {
            id: 'practica_roleplay',
            type: 'tarea',
            title: 'Práctica: Role-play de objeciones técnicas',
            description: 'Ejercicio de role-play donde los participantes practican el manejo de objeciones técnicas comunes.'
          }
        ]
      }
    ]
  },
  // Psicología del deudor
  {
    title: "Psicología del deudor",
    content: [
      {
        title: "Tema 1: Perfiles psicológicos de deudores",
        activities: [
          {
            id: 'lectura_perfiles',
            type: 'lectura',
            title: 'Lectura: Tipos de perfiles psicológicos en deudores',
            description: 'Estudio de los diferentes perfiles psicológicos comunes en deudores y cómo abordarlos.'
          },
          {
            id: 'cuestionario_perfiles',
            type: 'cuestionario',
            title: 'Cuestionario: Identificación de perfiles',
            description: 'Evaluación para practicar la identificación de diferentes perfiles psicológicos de deudores.'
          }
        ]
      },
      {
        title: "Tema 2: Estrategias psicológicas en cobranza",
        activities: [
          {
            id: 'video_estrategias_psi',
            type: 'video',
            title: 'Video: Aplicación de estrategias psicológicas',
            description: 'Demostración de cómo aplicar conocimientos psicológicos en situaciones de cobranza.'
          },
          {
            id: 'taller_casos_psi',
            type: 'tarea',
            title: 'Taller: Análisis de casos psicológicos',
            description: 'Análisis grupal de casos complejos desde una perspectiva psicológica.'
          }
        ]
      }
    ]
  },
  // Resolución de conflictos
  {
    title: "Resolución de conflictos",
    content: [
      {
        title: "Tema 1: Fundamentos de la resolución de conflictos",
        activities: [
          {
            id: 'lectura_fund_conflictos',
            type: 'lectura',
            title: 'Lectura: Principios de resolución de conflictos',
            description: 'Introducción a los conceptos básicos y métodos de resolución de conflictos en cobranzas.'
          },
          {
            id: 'video_ejemplos_conflictos',
            type: 'video',
            title: 'Video: Ejemplos de resolución efectiva',
            description: 'Análisis de casos reales de resolución exitosa de conflictos en situaciones de cobranza.'
          }
        ]
      },
      {
        title: "Tema 2: Técnicas avanzadas de mediación",
        activities: [
          {
            id: 'taller_mediacion',
            type: 'tarea',
            title: 'Taller: Práctica de mediación',
            description: 'Ejercicios prácticos de mediación en escenarios de conflicto de cobranza.'
          },
          {
            id: 'caso_estudio_conflicto',
            type: 'tarea',
            title: 'Caso de estudio: Resolución de conflicto complejo',
            description: 'Análisis y resolución de un caso de estudio que involucra un conflicto complejo en cobranzas.'
          }
        ]
      }
    ]
  }
];