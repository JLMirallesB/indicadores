const STATE_STORAGE_KEY = "indicadores_app_state_v1";
const LOCALE_STORAGE_KEY = "indicadores_locale_v1";
const SUPPORTED_LOCALES = ["es", "val"];
const DEFAULT_LOCALE = "es";

const FALLBACK_CATALOG = {
  locales: {
    es: {
      trafficLight: {
        green: {
          title: "Verde",
          action: "Acción: continuar.",
          description: "El indicador transmite una señal clara y compartida: puedes seguir con normalidad."
        },
        amber: {
          title: "Ámbar",
          action: "Acción: revisar criterio antes de decidir.",
          description: "Sin umbral explícito, el equipo puede reaccionar de forma incoherente ante el mismo dato."
        },
        red: {
          title: "Rojo",
          action: "Acción: detener y activar respuesta.",
          description: "El indicador marca una alerta operativa: hay que intervenir."
        }
      },
      amber: {
        frenar: "Lectura prudente: ante incertidumbre, priorizas reducir riesgo y recopilar más información.",
        acelerar: "Lectura oportunista: asumes que todavía hay margen y priorizas mantener ritmo."
      },
      motives: {
        enfermedad: "El motivo reduce la severidad porque suele ser coyuntural.",
        horario: "La incompatibilidad horaria mantiene la alerta: requiere ajuste organizativo.",
        desmotivacion: "La desmotivación aumenta la severidad: puede anticipar abandono.",
        familia: "El contexto familiar complejo suele exigir intervención coordinada y seguimiento."
      },
      dilemma: {
        entrada: {
          title: "Postura A: centro selectivo",
          text: "Que acceda alumnado con nota alta puede reflejar prestigio y demanda. Pero también puede significar que el resultado final depende, en gran parte, del nivel previo del alumnado."
        },
        valor_anadido: {
          title: "Postura B: centro de valor añadido",
          text: "Si el centro logra progreso claro entre entrada y salida, su aporte educativo es mayor. El reto es medir ese progreso con criterios rigurosos y no solo con notas internas."
        }
      },
      optativaCase: {
        root: "Dato base: cantidad de alumnado matriculado en una asignatura optativa.",
        scenarios: {
          pocos: {
            positive: {
              title: "Rama positiva: grupo pequeño con valor pedagógico",
              text: "Puede favorecer seguimiento individual, más feedback y mayor profundidad de trabajo."
            },
            negative: {
              title: "Rama crítica: baja matrícula por desajuste",
              text: "Puede reflejar falta de interés, baja difusión o incompatibilidad horaria."
            }
          },
          muchos: {
            positive: {
              title: "Rama positiva: alta demanda real",
              text: "Puede indicar que la optativa conecta con intereses del alumnado y responde a una necesidad formativa."
            },
            negative: {
              title: "Rama crítica: masificación",
              text: "Puede deteriorar la atención personalizada y dificultar el logro de objetivos de aprendizaje."
            }
          }
        }
      },
      cards: {
        input: [
          {
            id: "coste-estudiante",
            indicator: "Coste por estudiante",
            positive: "Lectura positiva: a menor coste, mayor eficiencia de la institución.",
            negative: "Lectura negativa: reducir coste puede implicar masificación y pérdida de calidad educativa."
          }
        ],
        output: [
          {
            id: "nota-media-alta",
            indicator: "Nota media alta",
            positive: "Lectura positiva: los alumnos dominan la materia.",
            negative: "Lectura negativa: el profesor es poco exigente."
          },
          {
            id: "abandono",
            indicator: "Tasa de abandono alta",
            positive:
              "Lectura positiva: es un centro exigente y se produce una criba de alumnado; no se cumplen expectativas porque parte del alumnado esperaba algo más fácil y no quería un centro de especialización.",
            negative:
              "Lectura negativa: el centro no es capaz de retener al alumnado (desmotivación, traslado a otro centro o problemas de compatibilidad horaria)."
          }
        ]
      }
    },
    val: {
      trafficLight: {
        green: {
          title: "Verd",
          action: "Acció: continuar.",
          description: "L'indicador transmet un senyal clar i compartit: pots continuar amb normalitat."
        },
        amber: {
          title: "Ambre",
          action: "Acció: revisar el criteri abans de decidir.",
          description: "Sense llindar explícit, l'equip pot reaccionar de manera incoherent davant la mateixa dada."
        },
        red: {
          title: "Roig",
          action: "Acció: aturar i activar resposta.",
          description: "L'indicador marca una alerta operativa: cal intervenir."
        }
      },
      amber: {
        frenar: "Lectura prudent: davant la incertesa, priorititzes reduir el risc i recopilar més informació.",
        acelerar: "Lectura oportunista: assumeixes que encara hi ha marge i priorititzes mantindre el ritme."
      },
      motives: {
        enfermedad: "El motiu redueix la severitat perquè sol ser conjuntural.",
        horario: "La incompatibilitat horària manté l'alerta: requereix ajust organitzatiu.",
        desmotivacion: "La desmotivació augmenta la severitat: pot anticipar abandonament.",
        familia: "El context familiar complex sol exigir intervenció coordinada i seguiment."
      },
      dilemma: {
        entrada: {
          title: "Postura A: centre selectiu",
          text: "Que accedisca alumnat amb nota alta pot reflectir prestigi i demanda. Però també pot significar que el resultat final depén, en gran part, del nivell previ de l'alumnat."
        },
        valor_anadido: {
          title: "Postura B: centre de valor afegit",
          text: "Si el centre aconsegueix un progrés clar entre l'entrada i l'eixida, la seua aportació educativa és major. El repte és mesurar eixe progrés amb criteris rigorosos i no només amb notes internes."
        }
      },
      optativaCase: {
        root: "Dada base: quantitat d'alumnat matriculat en una assignatura optativa.",
        scenarios: {
          pocos: {
            positive: {
              title: "Branca positiva: grup menut amb valor pedagògic",
              text: "Pot afavorir el seguiment individual, més feedback i major profunditat de treball."
            },
            negative: {
              title: "Branca crítica: baixa matrícula per desajust",
              text: "Pot reflectir falta d'interés, poca difusió o incompatibilitat horària."
            }
          },
          muchos: {
            positive: {
              title: "Branca positiva: alta demanda real",
              text: "Pot indicar que l'optativa connecta amb interessos de l'alumnat i respon a una necessitat formativa."
            },
            negative: {
              title: "Branca crítica: massificació",
              text: "Pot deteriorar l'atenció personalitzada i dificultar l'assoliment dels objectius d'aprenentatge."
            }
          }
        }
      },
      cards: {
        input: [
          {
            id: "coste-estudiante",
            indicator: "Cost per estudiant",
            positive: "Lectura positiva: a menor cost, major eficiència de la institució.",
            negative: "Lectura negativa: reduir cost pot implicar massificació i pèrdua de qualitat educativa."
          }
        ],
        output: [
          {
            id: "nota-media-alta",
            indicator: "Nota mitjana alta",
            positive: "Lectura positiva: l'alumnat domina la matèria.",
            negative: "Lectura negativa: el professorat és poc exigent."
          },
          {
            id: "abandono",
            indicator: "Taxa d'abandonament alta",
            positive:
              "Lectura positiva: és un centre exigent i es produeix una criba d'alumnat; no es compleixen expectatives perquè part de l'alumnat esperava una opció més fàcil i no volia un centre d'especialització.",
            negative:
              "Lectura negativa: el centre no és capaç de retindre l'alumnat (desmotivació, trasllat a un altre centre o problemes de compatibilitat horària)."
          }
        ]
      }
    }
  }
};

const UI_TEXTS = {
  es: {
    page: {
      title: "Indicadores | Dato vs Indicador",
      description:
        "Material interactivo para distinguir dato e indicador y analizar interpretaciones en contexto educativo.",
      langAria: "Seleccionar idioma",
      langEs: "Castellano",
      langVal: "Valencià",
      eyebrow: "Módulo interactivo",
      mainTitle: "Indicadores: un dato no decide por sí solo",
      mainLead:
        "Recorre la metáfora del semáforo, entra en el terreno ambiguo y examina cómo el mismo indicador puede tener lecturas opuestas.",
      footerIntro: "App diseñada por",
      footerAuthor: "José Luis Miralles Bono",
      footerMiddle: "con ayuda de Codex.",
      footerRepo: "Enlace al repo de GitHub",
      footerKofi: "Invítame a una horchata"
    },
    blocks: {
      b1: {
        step: "Bloque 1",
        title: "El semáforo como indicador",
        theory:
          "Un indicador útil no solo muestra un dato: orienta una acción. En un semáforo, cada color activa una conducta compartida."
      },
      b2: {
        step: "Bloque 2",
        title: "El caso ámbar: cuando aparece la ambigüedad",
        theory: "El ámbar evidencia que, sin criterio previo, dos personas pueden leer el mismo indicador de forma distinta."
      },
      b3: {
        step: "Bloque 3",
        title: "Del semáforo al absentismo",
        theoryA:
          "Este bloque muestra por qué el mismo porcentaje de faltas puede significar cosas muy distintas. Un 12% de absentismo no tiene el mismo valor si el umbral aceptable es 10% o 18%, ni si el motivo principal es enfermedad puntual o desmotivación sostenida.",
        theoryB:
          "La idea es transformar un dato bruto en un indicador operativo: definir un umbral previo, contextualizar el motivo y vincular el resultado a una decisión concreta (seguir, revisar o intervenir)."
      },
      b4: {
        step: "Bloque 4",
        title: "Debate abierto: qué creemos que medimos",
        theoryA:
          "Aquí no buscamos una respuesta cerrada. La pregunta de fondo es: ¿un centro es bueno porque atrae alumnado brillante o porque hace progresar mucho a alumnado con niveles iniciales diversos?",
        theoryB:
          "Dicho de forma provocadora: ¿qué es más meritorio, que entre alumnado brillante y salga más brillante, o que entre alumnado con nivel medio y salga competente? La respuesta no es única y depende de qué quieras valorar.",
        theoryC:
          "Sacar buenas notas puede ser una buena señal, pero también puede depender de factores externos (selección previa, apoyo fuera del centro o exigencia desigual). Pulsa cada postura para leer argumentos contrapuestos."
      },
      b5: {
        step: "Bloque 5",
        title: "Cartas de tres lados: indicadores de input",
        theoryA: "Cada carta tiene un centro (el indicador) y dos giros posibles: lectura positiva y lectura negativa.",
        theoryB:
          "La clave didáctica es que un mismo indicador no habla solo: cambia de significado según el contexto, los supuestos del equipo y la pregunta de evaluación que tengas delante. Por eso no basta con medir; hay que interpretar con criterio explícito."
      },
      b6: {
        step: "Bloque 6",
        title: "Caso complejo: alumnado en asignatura optativa",
        theoryA:
          "La cantidad de alumnado en una optativa no se interpreta en una sola dirección. Un grupo pequeño puede leerse como atención personalizada o como bajo interés; un grupo grande puede leerse como alta demanda o como riesgo de masificación.",
        theoryB:
          "Explora ahora sus ramificaciones: parte de un mismo dato, cambia el escenario (pocos o muchos) y añade factores de contexto. Verás cómo se activa una lectura más plausible sin que el dato original cambie."
      },
      b7: {
        step: "Bloque 7",
        title: "Cartas de tres lados: indicadores de output",
        theory: "Sin contexto adicional, los indicadores de resultado también pueden apuntar a explicaciones opuestas."
      },
      b8: {
        step: "Bloque 8",
        title: "Cierre: ¿tu indicador está listo para decidir?",
        theory: "Verifica mínimos antes de usar el indicador en un plan de mejora."
      }
    },
    controls: {
      trafficGroupAria: "Semáforo interactivo",
      trafficActionsAria: "Seleccionar color",
      chips: { green: "Verde", amber: "Ámbar", red: "Rojo" },
      amberGroupAria: "Decisión ante ámbar",
      amberBrake: "Yo freno",
      amberAccelerate: "Yo acelero",
      absentRate: "% de absentismo",
      absentThreshold: "Umbral aceptable",
      absentMotive: "Motivo principal",
      motives: {
        enfermedad: "Enfermedad puntual",
        horario: "Incompatibilidad horaria",
        desmotivacion: "Desmotivación",
        familia: "Contexto familiar complejo"
      },
      dilemmaGroupAria: "Explorar posturas del debate",
      dilemmaEntry: "Explorar postura: selección de entrada",
      dilemmaValue: "Explorar postura: valor añadido",
      optativaModesAria: "Seleccionar escenario de matrícula",
      optativaMiniLabel: "Escenario de partida",
      optativaModePocos: "Pocos matriculados",
      optativaModeMuchos: "Muchos matriculados",
      optativaLegend: "Factores de contexto",
      checklist: {
        umbral: "Tiene umbral explícito.",
        fuente: "Tiene fuente verificable.",
        alternativas: "Considera interpretaciones alternativas.",
        triangulacion: "Tiene indicador complementario."
      },
      evaluateBtn: "Evaluar solidez"
    },
    dynamic: {
      colors: {
        green: { label: "Estado verde", action: "Puedes continuar con seguimiento ordinario." },
        amber: { label: "Estado ámbar", action: "Necesitas criterio adicional antes de decidir." },
        red: { label: "Estado rojo", action: "Debes activar una actuación específica." }
      },
      amber: {
        emptyTitle: "Zona ambigua",
        emptyText: "Sin criterio previo, el ámbar permite decisiones distintas.",
        readingPrefix: "Tu lectura:",
        readingBrake: "frenar",
        readingAccelerate: "acelerar",
        conclusion:
          "Conclusión: un indicador ambiguo sin umbral compartido rompe la coherencia de decisión."
      },
      absentismo: {
        baseWithin: (rate, threshold) => `El ${rate}% queda dentro del umbral aceptable (${threshold}%).`,
        baseOver: (rate, threshold) =>
          `El ${rate}% supera con claridad el umbral (${threshold}% + margen de alerta).`,
        baseMiddle: (rate, threshold) => `El ${rate}% cae en zona intermedia respecto al umbral (${threshold}%).`,
        motiveFallback: "El motivo necesita análisis específico.",
        nextGreen: "Mantén seguimiento regular para confirmar estabilidad.",
        nextAmber: "Define criterio común de intervención para evitar respuestas contradictorias.",
        nextRed: "Activa medidas y documenta evidencias para revisar impacto en el próximo ciclo."
      },
      dilemma: {
        emptyTitle: "Debate abierto",
        emptyText: "No se trata de elegir un bando correcto, sino de explorar dos lecturas legítimas.",
        emptySmall: "Pregunta guía: ¿medimos selección de entrada o aporte real del centro?",
        afterSmall: "Explora también la otra postura: el objetivo es contrastar argumentos, no cerrar el debate."
      },
      cards: {
        kicker: "Carta de análisis",
        buttonNegative: "Flip -",
        buttonCenter: "Centro",
        buttonPositive: "Flip +",
        labelIndicator: "Lado indicador",
        labelPositive: "Lectura positiva",
        labelNegative: "Lectura negativa",
        indicatorPrefix: "Indicador en bruto:"
      },
      optativa: {
        rootType: "Dato base",
        scenarioPrefix: "Escenario activo:",
        scenarioPocos: "pocos matriculados",
        scenarioMuchos: "muchos matriculados",
        branchPositiveType: "Rama positiva",
        branchNegativeType: "Rama crítica",
        noContributions: "Sin factores con peso claro en este escenario.",
        verdictPositive: {
          color: "green",
          title: "Predomina la lectura positiva",
          body: "Con los factores seleccionados, la interpretación favorable gana fuerza."
        },
        verdictNegative: {
          color: "red",
          title: "Predomina la lectura crítica",
          body: "Con los factores seleccionados, la interpretación de riesgo pesa más."
        },
        verdictAmbiguous: {
          color: "amber",
          title: "Empate interpretativo",
          body: "El caso sigue ambiguo: necesitas más evidencias para decidir con seguridad."
        },
        scorePrefix: "Puntuación contextual:"
      },
      checklist: {
        verdictGreen: {
          color: "green",
          title: "Indicador sólido",
          text: "Tu indicador cumple los mínimos para orientar decisiones con consistencia."
        },
        verdictAmber: {
          color: "amber",
          title: "Indicador parcialmente sólido",
          text: "Hay base útil, pero todavía existen zonas ambiguas que pueden romper la fase de Check."
        },
        verdictRed: {
          color: "red",
          title: "Indicador frágil",
          text: "Aún describe más de lo que decide. Necesita mayor definición antes de usarse en el plan."
        },
        markedPrefix: "Criterios marcados:"
      }
    },
    optativaFactors: {
      rendimiento_alto: { label: "Resultados de aprendizaje altos", hint: "Refuerza lectura de calidad." },
      satisfaccion_alta: { label: "Satisfacción alta del alumnado", hint: "Apoya la lectura positiva." },
      lista_espera: { label: "Existe lista de espera", hint: "Señala demanda real." },
      difusion_baja: { label: "Difusión insuficiente de la optativa", hint: "Puede explicar baja matrícula." },
      horario_incompatible: { label: "Horario incompatible con otras materias", hint: "Distorsiona la matrícula." },
      sobrecarga_docente: { label: "Ratio alta y seguimiento limitado", hint: "Aumenta riesgo de masificación." }
    }
  },
  val: {
    page: {
      title: "Indicadors | Dada vs Indicador",
      description:
        "Material interactiu per a distingir dada i indicador i analitzar interpretacions en context educatiu.",
      langAria: "Seleccionar idioma",
      langEs: "Castellano",
      langVal: "Valencià",
      eyebrow: "Mòdul interactiu",
      mainTitle: "Indicadors: una dada no decideix per si sola",
      mainLead:
        "Recorre la metàfora del semàfor, entra en el terreny ambigu i examina com el mateix indicador pot tindre lectures oposades.",
      footerIntro: "App dissenyada per",
      footerAuthor: "José Luis Miralles Bono",
      footerMiddle: "amb ajuda de Codex.",
      footerRepo: "Enllaç al repo de GitHub",
      footerKofi: "Convida'm a una orxata"
    },
    blocks: {
      b1: {
        step: "Bloc 1",
        title: "El semàfor com a indicador",
        theory:
          "Un indicador útil no només mostra una dada: orienta una acció. En un semàfor, cada color activa una conducta compartida."
      },
      b2: {
        step: "Bloc 2",
        title: "El cas ambre: quan apareix l'ambigüitat",
        theory:
          "L'ambre evidencia que, sense criteri previ, dues persones poden llegir el mateix indicador de manera diferent."
      },
      b3: {
        step: "Bloc 3",
        title: "Del semàfor a l'absentisme",
        theoryA:
          "Este bloc mostra per què el mateix percentatge de faltes pot significar coses molt distintes. Un 12% d'absentisme no té el mateix valor si el llindar acceptable és 10% o 18%, ni si el motiu principal és malaltia puntual o desmotivació sostinguda.",
        theoryB:
          "La idea és transformar una dada bruta en un indicador operatiu: definir un llindar previ, contextualitzar el motiu i vincular el resultat a una decisió concreta (seguir, revisar o intervenir)."
      },
      b4: {
        step: "Bloc 4",
        title: "Debat obert: què creiem que mesurem",
        theoryA:
          "Ací no busquem una resposta tancada. La pregunta de fons és: un centre és bo perquè atrau alumnat brillant o perquè fa progressar molt alumnat amb nivells inicials diversos?",
        theoryB:
          "Dit de manera provocadora: què té més mèrit, que entre alumnat brillant i isca més brillant, o que entre alumnat amb nivell mitjà i isca competent? La resposta no és única i depén de què vulgues valorar.",
        theoryC:
          "Traure bones notes pot ser un bon senyal, però també pot dependre de factors externs (selecció prèvia, suport fora del centre o exigència desigual). Prem cada postura per a llegir arguments contraposts."
      },
      b5: {
        step: "Bloc 5",
        title: "Cartes de tres cares: indicadors d'input",
        theoryA:
          "Cada carta té un centre (l'indicador) i dos girs possibles: lectura positiva i lectura negativa.",
        theoryB:
          "La clau didàctica és que un mateix indicador no parla a soles: canvia de significat segons el context, els supòsits de l'equip i la pregunta d'avaluació que tingues al davant. Per això no n'hi ha prou amb mesurar; cal interpretar amb criteri explícit."
      },
      b6: {
        step: "Bloc 6",
        title: "Cas complex: alumnat en assignatura optativa",
        theoryA:
          "La quantitat d'alumnat en una optativa no s'interpreta en una sola direcció. Un grup menut pot llegir-se com atenció personalitzada o com baix interés; un grup gran pot llegir-se com alta demanda o com risc de massificació.",
        theoryB:
          "Explora ara les seues ramificacions: parteix d'una mateixa dada, canvia l'escenari (pocs o molts) i afig factors de context. Veuràs com s'activa una lectura més plausible sense que la dada original canvie."
      },
      b7: {
        step: "Bloc 7",
        title: "Cartes de tres cares: indicadors d'output",
        theory:
          "Sense context addicional, els indicadors de resultat també poden apuntar a explicacions oposades."
      },
      b8: {
        step: "Bloc 8",
        title: "Tancament: el teu indicador està llest per a decidir?",
        theory: "Verifica mínims abans d'usar l'indicador en un pla de millora."
      }
    },
    controls: {
      trafficGroupAria: "Semàfor interactiu",
      trafficActionsAria: "Seleccionar color",
      chips: { green: "Verd", amber: "Ambre", red: "Roig" },
      amberGroupAria: "Decisió davant de l'ambre",
      amberBrake: "Jo frene",
      amberAccelerate: "Jo accelere",
      absentRate: "% d'absentisme",
      absentThreshold: "Llindar acceptable",
      absentMotive: "Motiu principal",
      motives: {
        enfermedad: "Malaltia puntual",
        horario: "Incompatibilitat horària",
        desmotivacion: "Desmotivació",
        familia: "Context familiar complex"
      },
      dilemmaGroupAria: "Explorar postures del debat",
      dilemmaEntry: "Explorar postura: selecció d'entrada",
      dilemmaValue: "Explorar postura: valor afegit",
      optativaModesAria: "Seleccionar escenari de matrícula",
      optativaMiniLabel: "Escenari de partida",
      optativaModePocos: "Pocs matriculats",
      optativaModeMuchos: "Molts matriculats",
      optativaLegend: "Factors de context",
      checklist: {
        umbral: "Té llindar explícit.",
        fuente: "Té font verificable.",
        alternativas: "Considera interpretacions alternatives.",
        triangulacion: "Té indicador complementari."
      },
      evaluateBtn: "Avaluar solidesa"
    },
    dynamic: {
      colors: {
        green: { label: "Estat verd", action: "Pots continuar amb seguiment ordinari." },
        amber: { label: "Estat ambre", action: "Necessites criteri addicional abans de decidir." },
        red: { label: "Estat roig", action: "Has d'activar una actuació específica." }
      },
      amber: {
        emptyTitle: "Zona ambigua",
        emptyText: "Sense criteri previ, l'ambre permet decisions distintes.",
        readingPrefix: "La teua lectura:",
        readingBrake: "frenar",
        readingAccelerate: "accelerar",
        conclusion:
          "Conclusió: un indicador ambigu sense llindar compartit trenca la coherència de decisió."
      },
      absentismo: {
        baseWithin: (rate, threshold) => `El ${rate}% queda dins del llindar acceptable (${threshold}%).`,
        baseOver: (rate, threshold) => `El ${rate}% supera clarament el llindar (${threshold}% + marge d'alerta).`,
        baseMiddle: (rate, threshold) => `El ${rate}% cau en zona intermèdia respecte al llindar (${threshold}%).`,
        motiveFallback: "El motiu necessita anàlisi específica.",
        nextGreen: "Mantín seguiment regular per a confirmar estabilitat.",
        nextAmber: "Defineix criteri comú d'intervenció per a evitar respostes contradictòries.",
        nextRed: "Activa mesures i documenta evidències per a revisar l'impacte en el cicle següent."
      },
      dilemma: {
        emptyTitle: "Debat obert",
        emptyText: "No es tracta de triar un bàndol correcte, sinó d'explorar dues lectures legítimes.",
        emptySmall: "Pregunta guia: mesurem selecció d'entrada o aportació real del centre?",
        afterSmall: "Explora també l'altra postura: l'objectiu és contrastar arguments, no tancar el debat."
      },
      cards: {
        kicker: "Carta d'anàlisi",
        buttonNegative: "Gir -",
        buttonCenter: "Centre",
        buttonPositive: "Gir +",
        labelIndicator: "Cara indicador",
        labelPositive: "Lectura positiva",
        labelNegative: "Lectura negativa",
        indicatorPrefix: "Indicador en brut:"
      },
      optativa: {
        rootType: "Dada base",
        scenarioPrefix: "Escenari actiu:",
        scenarioPocos: "pocs matriculats",
        scenarioMuchos: "molts matriculats",
        branchPositiveType: "Branca positiva",
        branchNegativeType: "Branca crítica",
        noContributions: "Sense factors amb pes clar en este escenari.",
        verdictPositive: {
          color: "green",
          title: "Predomina la lectura positiva",
          body: "Amb els factors seleccionats, la interpretació favorable guanya força."
        },
        verdictNegative: {
          color: "red",
          title: "Predomina la lectura crítica",
          body: "Amb els factors seleccionats, la interpretació de risc pesa més."
        },
        verdictAmbiguous: {
          color: "amber",
          title: "Empat interpretatiu",
          body: "El cas continua ambigu: necessites més evidències per a decidir amb seguretat."
        },
        scorePrefix: "Puntuació contextual:"
      },
      checklist: {
        verdictGreen: {
          color: "green",
          title: "Indicador sòlid",
          text: "El teu indicador compleix els mínims per a orientar decisions amb consistència."
        },
        verdictAmber: {
          color: "amber",
          title: "Indicador parcialment sòlid",
          text: "Hi ha base útil, però encara hi ha zones ambigües que poden trencar la fase de Check."
        },
        verdictRed: {
          color: "red",
          title: "Indicador fràgil",
          text: "Encara descriu més del que decideix. Necessita més definició abans d'usar-lo en el pla."
        },
        markedPrefix: "Criteris marcats:"
      }
    },
    optativaFactors: {
      rendimiento_alto: { label: "Resultats d'aprenentatge alts", hint: "Reforça lectura de qualitat." },
      satisfaccion_alta: { label: "Satisfacció alta de l'alumnat", hint: "Dona suport a la lectura positiva." },
      lista_espera: { label: "Hi ha llista d'espera", hint: "Assenyala demanda real." },
      difusion_baja: { label: "Difusió insuficient de l'optativa", hint: "Pot explicar baixa matrícula." },
      horario_incompatible: { label: "Horari incompatible amb altres matèries", hint: "Distorsiona la matrícula." },
      sobrecarga_docente: { label: "Ràtio alta i seguiment limitat", hint: "Augmenta risc de massificació." }
    }
  }
};

const OPTATIVA_FACTOR_RULES = [
  { id: "rendimiento_alto", weights: { pocos: 1, muchos: 1 } },
  { id: "satisfaccion_alta", weights: { pocos: 1, muchos: 1 } },
  { id: "lista_espera", weights: { pocos: 0, muchos: 1 } },
  { id: "difusion_baja", weights: { pocos: -1, muchos: 0 } },
  { id: "horario_incompatible", weights: { pocos: -1, muchos: 0 } },
  { id: "sobrecarga_docente", weights: { pocos: 0, muchos: -1 } }
];

const DEFAULT_STATE = {
  semaforoColor: "green",
  amberChoice: null,
  absentismo: {
    rate: 12,
    threshold: 10,
    motive: "enfermedad",
    result: "green",
    reason: ""
  },
  dilemmaChoice: null,
  optativaCase: {
    mode: "pocos",
    factors: [],
    result: "ambiguous"
  },
  cardSides: {},
  checklist: []
};

let locale = loadLocale();
let ui = UI_TEXTS[locale] ?? UI_TEXTS[DEFAULT_LOCALE];
let catalog = FALLBACK_CATALOG;
let content = getLocaleContent(catalog, locale);
let state = loadState();

init();

async function init() {
  catalog = await loadCatalog();
  content = getLocaleContent(catalog, locale);
  ui = UI_TEXTS[locale] ?? UI_TEXTS[DEFAULT_LOCALE];

  applyStaticText();
  setupLanguageSwitcher();

  setupRevealAnimation();
  setupTrafficLight();
  setupAmberBlock();
  setupAbsentismoBlock();
  setupDilemmaBlock();
  renderTriCards("input-cards", content.cards.input ?? [], "input", {
    useSavedSide: false,
    persistChanges: false
  });
  setupOptativaBlock();
  renderTriCards("output-cards", content.cards.output ?? [], "output", {
    useSavedSide: false,
    persistChanges: false
  });
  setupChecklist();
}

async function loadCatalog() {
  try {
    const response = await fetch("data/content.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`No se pudo cargar content.json: ${response.status}`);
    }
    const raw = await response.json();
    const normalized = raw?.locales ? raw : { locales: { es: raw } };
    return {
      locales: {
        es: deepMerge(FALLBACK_CATALOG.locales.es, normalized.locales?.es ?? {}),
        val: deepMerge(FALLBACK_CATALOG.locales.val, normalized.locales?.val ?? {})
      }
    };
  } catch (_error) {
    return FALLBACK_CATALOG;
  }
}

function deepMerge(base, patch) {
  if (Array.isArray(base) || Array.isArray(patch)) {
    return Array.isArray(patch) ? patch : base;
  }
  if (!isPlainObject(base) || !isPlainObject(patch)) {
    return patch ?? base;
  }

  const out = { ...base };
  for (const key of Object.keys(patch)) {
    out[key] = key in base ? deepMerge(base[key], patch[key]) : patch[key];
  }
  return out;
}

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function getLocaleContent(catalogData, targetLocale) {
  return catalogData?.locales?.[targetLocale] ?? catalogData?.locales?.[DEFAULT_LOCALE] ?? FALLBACK_CATALOG.locales.es;
}

function loadLocale() {
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored && SUPPORTED_LOCALES.includes(stored)) {
      return stored;
    }
  } catch (_error) {
    // ignore and fallback
  }
  return DEFAULT_LOCALE;
}

function setupLanguageSwitcher() {
  const switcher = document.getElementById("lang-switch");
  if (switcher) {
    switcher.setAttribute("aria-label", ui.page.langAria);
  }

  const buttons = Array.from(document.querySelectorAll(".lang-btn[data-lang]"));
  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === locale);
    button.addEventListener("click", () => {
      const next = button.dataset.lang;
      if (!SUPPORTED_LOCALES.includes(next) || next === locale) {
        return;
      }
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
      window.location.reload();
    });
  });
}

function applyStaticText() {
  document.documentElement.lang = locale === "val" ? "ca" : "es";
  document.title = ui.page.title;
  const description = document.querySelector("meta[name='description']");
  if (description) {
    description.setAttribute("content", ui.page.description);
  }

  setText("txt-eyebrow", ui.page.eyebrow);
  setText("txt-main-title", ui.page.mainTitle);
  setText("txt-main-lead", ui.page.mainLead);
  setText("txt-footer-intro", ui.page.footerIntro);
  setText("lnk-author", ui.page.footerAuthor);
  setText("txt-footer-middle", ui.page.footerMiddle);
  setText("lnk-repo", ui.page.footerRepo);
  setText("lnk-kofi", ui.page.footerKofi);
  setText("btn-lang-es", ui.page.langEs);
  setText("btn-lang-val", ui.page.langVal);

  setText("txt-step-1", ui.blocks.b1.step);
  setText("txt-title-1", ui.blocks.b1.title);
  setText("txt-theory-1", ui.blocks.b1.theory);

  setText("txt-step-2", ui.blocks.b2.step);
  setText("txt-title-2", ui.blocks.b2.title);
  setText("txt-theory-2", ui.blocks.b2.theory);

  setText("txt-step-3", ui.blocks.b3.step);
  setText("txt-title-3", ui.blocks.b3.title);
  setText("txt-theory-3a", ui.blocks.b3.theoryA);
  setText("txt-theory-3b", ui.blocks.b3.theoryB);

  setText("txt-step-4", ui.blocks.b4.step);
  setText("txt-title-4", ui.blocks.b4.title);
  setText("txt-theory-4a", ui.blocks.b4.theoryA);
  setText("txt-theory-4b", ui.blocks.b4.theoryB);
  setText("txt-theory-4c", ui.blocks.b4.theoryC);

  setText("txt-step-5", ui.blocks.b5.step);
  setText("txt-title-5", ui.blocks.b5.title);
  setText("txt-theory-5a", ui.blocks.b5.theoryA);
  setText("txt-theory-5b", ui.blocks.b5.theoryB);

  setText("txt-step-6", ui.blocks.b6.step);
  setText("txt-title-6", ui.blocks.b6.title);
  setText("txt-theory-6a", ui.blocks.b6.theoryA);
  setText("txt-theory-6b", ui.blocks.b6.theoryB);

  setText("txt-step-7", ui.blocks.b7.step);
  setText("txt-title-7", ui.blocks.b7.title);
  setText("txt-theory-7", ui.blocks.b7.theory);

  setText("txt-step-8", ui.blocks.b8.step);
  setText("txt-title-8", ui.blocks.b8.title);
  setText("txt-theory-8", ui.blocks.b8.theory);

  setText("txt-chip-green", ui.controls.chips.green);
  setText("txt-chip-amber", ui.controls.chips.amber);
  setText("txt-chip-red", ui.controls.chips.red);
  setText("txt-amber-brake", ui.controls.amberBrake);
  setText("txt-amber-accelerate", ui.controls.amberAccelerate);

  setText("txt-label-abs-rate", ui.controls.absentRate);
  setText("txt-label-threshold", ui.controls.absentThreshold);
  setText("txt-label-motive", ui.controls.absentMotive);
  setText("txt-motive-enfermedad", ui.controls.motives.enfermedad);
  setText("txt-motive-horario", ui.controls.motives.horario);
  setText("txt-motive-desmotivacion", ui.controls.motives.desmotivacion);
  setText("txt-motive-familia", ui.controls.motives.familia);

  setText("txt-dilemma-entry", ui.controls.dilemmaEntry);
  setText("txt-dilemma-value", ui.controls.dilemmaValue);

  setText("txt-optativa-mini-label", ui.controls.optativaMiniLabel);
  setText("txt-optativa-mode-pocos", ui.controls.optativaModePocos);
  setText("txt-optativa-mode-muchos", ui.controls.optativaModeMuchos);
  setText("txt-optativa-legend", ui.controls.optativaLegend);

  setText("txt-check-umbral", ui.controls.checklist.umbral);
  setText("txt-check-fuente", ui.controls.checklist.fuente);
  setText("txt-check-alternativas", ui.controls.checklist.alternativas);
  setText("txt-check-triangulacion", ui.controls.checklist.triangulacion);
  setText("evaluate-btn", ui.controls.evaluateBtn);

  setAria("traffic-group", ui.controls.trafficGroupAria);
  setAria("traffic-actions", ui.controls.trafficActionsAria);
  setAria("amber-choice-group", ui.controls.amberGroupAria);
  setAria("dilemma-group", ui.controls.dilemmaGroupAria);
  setAria("optativa-modes", ui.controls.optativaModesAria);

  setAriaBySelector(".light[data-color='green']", ui.controls.chips.green);
  setAriaBySelector(".light[data-color='amber']", ui.controls.chips.amber);
  setAriaBySelector(".light[data-color='red']", ui.controls.chips.red);
}

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) {
    node.textContent = value;
  }
}

function setAria(id, value) {
  const node = document.getElementById(id);
  if (node) {
    node.setAttribute("aria-label", value);
  }
}

function setAriaBySelector(selector, value) {
  const node = document.querySelector(selector);
  if (node) {
    node.setAttribute("aria-label", value);
  }
}

function setupTrafficLight() {
  const feedback = document.getElementById("semaforo-feedback");
  const controlButtons = document.querySelectorAll(".light[data-color], .chip[data-color]");

  controlButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setTrafficColor(button.dataset.color);
    });
  });

  function setTrafficColor(color) {
    const entry = content.trafficLight?.[color] ?? FALLBACK_CATALOG.locales[locale].trafficLight.green;

    document.querySelectorAll(".light[data-color]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.color === color);
    });

    document.querySelectorAll(".chip[data-color]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.color === color);
    });

    feedback.className = `feedback state-${color}`;
    feedback.innerHTML = `
      <h3>${entry.title}</h3>
      <p>${entry.action}</p>
      <small>${entry.description}</small>
    `;

    state.semaforoColor = color;
    saveState();
  }

  setTrafficColor(state.semaforoColor ?? "green");
}

function setupAmberBlock() {
  const buttons = document.querySelectorAll(".decision[data-choice]");
  const feedback = document.getElementById("ambar-feedback");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const choice = button.dataset.choice;
      state.amberChoice = choice;
      saveState();
      renderAmber(choice);
    });
  });

  function renderAmber(choice) {
    buttons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.choice === choice);
    });

    if (!choice) {
      feedback.className = "feedback state-amber";
      feedback.innerHTML = `
        <h3>${ui.dynamic.amber.emptyTitle}</h3>
        <p>${ui.dynamic.amber.emptyText}</p>
      `;
      return;
    }

    const text = content.amber?.[choice] ?? "";
    const readingLabel = choice === "frenar" ? ui.dynamic.amber.readingBrake : ui.dynamic.amber.readingAccelerate;

    feedback.className = "feedback state-amber";
    feedback.innerHTML = `
      <h3>${ui.dynamic.amber.readingPrefix} ${readingLabel}</h3>
      <p>${text}</p>
      <small>${ui.dynamic.amber.conclusion}</small>
    `;
  }

  renderAmber(state.amberChoice);
}

function setupAbsentismoBlock() {
  const rateInput = document.getElementById("absent-rate");
  const thresholdInput = document.getElementById("threshold-rate");
  const motiveSelect = document.getElementById("absent-motive");

  const rateValue = document.getElementById("absent-rate-value");
  const thresholdValue = document.getElementById("threshold-rate-value");
  const feedback = document.getElementById("absentismo-feedback");

  rateInput.value = String(state.absentismo.rate ?? DEFAULT_STATE.absentismo.rate);
  thresholdInput.value = String(state.absentismo.threshold ?? DEFAULT_STATE.absentismo.threshold);
  motiveSelect.value = state.absentismo.motive ?? DEFAULT_STATE.absentismo.motive;

  const render = () => {
    const rate = Number(rateInput.value);
    const threshold = Number(thresholdInput.value);
    const motive = motiveSelect.value;

    rateValue.textContent = `${rate}%`;
    thresholdValue.textContent = `${threshold}%`;

    const result = classifyAbsentismo(rate, threshold, motive);
    feedback.className = `feedback state-${result.color}`;
    feedback.innerHTML = `
      <h3>${result.label}</h3>
      <p>${result.action}</p>
      <p>${result.reason}</p>
      <small>${result.nextStep}</small>
    `;

    state.absentismo = {
      rate,
      threshold,
      motive,
      result: result.color,
      reason: result.reason
    };
    saveState();
  };

  rateInput.addEventListener("input", render);
  thresholdInput.addEventListener("input", render);
  motiveSelect.addEventListener("change", render);

  render();
}

function classifyAbsentismo(rate, threshold, motive) {
  let level;
  if (rate <= threshold) {
    level = 0;
  } else if (rate >= threshold + 8) {
    level = 2;
  } else {
    level = 1;
  }

  const motiveShift = {
    enfermedad: -1,
    horario: 0,
    desmotivacion: 1,
    familia: 1
  };

  level = clamp(level + (motiveShift[motive] ?? 0), 0, 2);
  const color = ["green", "amber", "red"][level];

  const baseReason =
    rate <= threshold
      ? ui.dynamic.absentismo.baseWithin(rate, threshold)
      : rate >= threshold + 8
      ? ui.dynamic.absentismo.baseOver(rate, threshold)
      : ui.dynamic.absentismo.baseMiddle(rate, threshold);

  const motiveReason = content.motives?.[motive] ?? ui.dynamic.absentismo.motiveFallback;

  return {
    color,
    label: ui.dynamic.colors[color].label,
    action: ui.dynamic.colors[color].action,
    reason: `${baseReason} ${motiveReason}`,
    nextStep:
      color === "green"
        ? ui.dynamic.absentismo.nextGreen
        : color === "amber"
        ? ui.dynamic.absentismo.nextAmber
        : ui.dynamic.absentismo.nextRed
  };
}

function setupDilemmaBlock() {
  const buttons = document.querySelectorAll(".dilemma-option[data-choice]");
  const feedback = document.getElementById("dilema-feedback");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const choice = button.dataset.choice;
      state.dilemmaChoice = choice;
      saveState();
      renderDilemma(choice);
    });
  });

  function renderDilemma(choice) {
    buttons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.choice === choice);
    });

    if (!choice || !content.dilemma?.[choice]) {
      feedback.className = "feedback";
      feedback.innerHTML = `
        <h3>${ui.dynamic.dilemma.emptyTitle}</h3>
        <p>${ui.dynamic.dilemma.emptyText}</p>
        <small>${ui.dynamic.dilemma.emptySmall}</small>
      `;
      return;
    }

    const entry = content.dilemma[choice];
    feedback.className = "feedback";
    feedback.innerHTML = `
      <h3>${entry.title}</h3>
      <p>${entry.text}</p>
      <small>${ui.dynamic.dilemma.afterSmall}</small>
    `;
  }

  renderDilemma(state.dilemmaChoice);
}

function setupOptativaBlock() {
  const modeButtons = document.querySelectorAll(".optativa-mode[data-mode]");
  const factorsContainer = document.getElementById("optativa-factors");
  const root = document.getElementById("optativa-root");
  const positiveBranch = document.getElementById("optativa-branch-positive");
  const negativeBranch = document.getElementById("optativa-branch-negative");
  const feedback = document.getElementById("optativa-feedback");

  if (!modeButtons.length || !factorsContainer || !root || !positiveBranch || !negativeBranch || !feedback) {
    return;
  }

  factorsContainer.querySelectorAll(".factor-item").forEach((item) => item.remove());

  const factorsMarkup = OPTATIVA_FACTOR_RULES.map((rule) => {
    const factorText = ui.optativaFactors[rule.id];
    return `
      <label class="factor-item">
        <input type="checkbox" class="optativa-factor" data-factor="${rule.id}" />
        <span>${factorText.label}</span>
        <small>${factorText.hint}</small>
      </label>
    `;
  }).join("");
  factorsContainer.insertAdjacentHTML("beforeend", factorsMarkup);

  const factorCheckboxes = Array.from(factorsContainer.querySelectorAll(".optativa-factor[data-factor]"));
  const factorRuleById = Object.fromEntries(OPTATIVA_FACTOR_RULES.map((rule) => [rule.id, rule]));

  let currentMode = state.optativaCase?.mode === "muchos" ? "muchos" : "pocos";
  let selectedFactors = new Set(
    Array.isArray(state.optativaCase?.factors) ? state.optativaCase.factors.filter((id) => factorRuleById[id]) : []
  );

  factorCheckboxes.forEach((checkbox) => {
    checkbox.checked = selectedFactors.has(checkbox.dataset.factor);
  });

  const evaluate = (mode, factorsSet) => {
    let score = 0;
    const contributions = [];

    for (const factorId of factorsSet) {
      const factorRule = factorRuleById[factorId];
      if (!factorRule) {
        continue;
      }
      const value = factorRule.weights?.[mode] ?? 0;
      if (value !== 0) {
        contributions.push({ id: factorId, value });
        score += value;
      }
    }

    const result = score > 0 ? "positive" : score < 0 ? "negative" : "ambiguous";
    return { score, result, contributions };
  };

  const render = () => {
    const scenario =
      content.optativaCase?.scenarios?.[currentMode] ??
      content.optativaCase?.scenarios?.pocos ??
      FALLBACK_CATALOG.locales[locale].optativaCase.scenarios.pocos;
    const rootText = content.optativaCase?.root ?? FALLBACK_CATALOG.locales[locale].optativaCase.root;
    const evaluation = evaluate(currentMode, selectedFactors);

    modeButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.mode === currentMode);
    });

    const scenarioLabel = currentMode === "pocos" ? ui.dynamic.optativa.scenarioPocos : ui.dynamic.optativa.scenarioMuchos;

    root.innerHTML = `
      <p class="branch-type">${ui.dynamic.optativa.rootType}</p>
      <p>${rootText}</p>
      <small>${ui.dynamic.optativa.scenarioPrefix} ${scenarioLabel}.</small>
    `;

    positiveBranch.innerHTML = `
      <p class="branch-type">${ui.dynamic.optativa.branchPositiveType}</p>
      <h3>${scenario.positive.title}</h3>
      <p>${scenario.positive.text}</p>
    `;

    negativeBranch.innerHTML = `
      <p class="branch-type">${ui.dynamic.optativa.branchNegativeType}</p>
      <h3>${scenario.negative.title}</h3>
      <p>${scenario.negative.text}</p>
    `;

    positiveBranch.classList.toggle("is-active", evaluation.result === "positive");
    negativeBranch.classList.toggle("is-active", evaluation.result === "negative");
    positiveBranch.classList.toggle("is-muted", evaluation.result === "negative");
    negativeBranch.classList.toggle("is-muted", evaluation.result === "positive");

    if (evaluation.result === "ambiguous") {
      positiveBranch.classList.remove("is-muted");
      negativeBranch.classList.remove("is-muted");
    }

    const contributionsText = evaluation.contributions.length
      ? evaluation.contributions
          .map((item) => {
            const factorLabel = ui.optativaFactors[item.id]?.label ?? item.id;
            return `${item.value > 0 ? "+" : ""}${item.value} ${factorLabel}`;
          })
          .join(" · ")
      : ui.dynamic.optativa.noContributions;

    const verdict =
      evaluation.result === "positive"
        ? ui.dynamic.optativa.verdictPositive
        : evaluation.result === "negative"
        ? ui.dynamic.optativa.verdictNegative
        : ui.dynamic.optativa.verdictAmbiguous;

    feedback.className = `feedback state-${verdict.color}`;
    feedback.innerHTML = `
      <h3>${verdict.title}</h3>
      <p>${verdict.body}</p>
      <small>${ui.dynamic.optativa.scorePrefix} ${evaluation.score >= 0 ? "+" : ""}${evaluation.score}. ${contributionsText}</small>
    `;

    state.optativaCase = {
      mode: currentMode,
      factors: Array.from(selectedFactors),
      result: evaluation.result
    };
    saveState();
  };

  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentMode = button.dataset.mode === "muchos" ? "muchos" : "pocos";
      render();
    });
  });

  factorCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        selectedFactors.add(checkbox.dataset.factor);
      } else {
        selectedFactors.delete(checkbox.dataset.factor);
      }
      render();
    });
  });

  render();
}

function renderTriCards(containerId, cards, group, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

  const useSavedSide = options.useSavedSide ?? true;
  const persistChanges = options.persistChanges ?? true;

  container.innerHTML = "";

  cards.forEach((card) => {
    const key = `${group}:${card.id}`;
    const side = useSavedSide ? state.cardSides[key] ?? "indicator" : "indicator";

    const article = document.createElement("article");
    article.className = "tri-card";
    article.dataset.key = key;
    article.dataset.currentSide = "indicator";

    article.innerHTML = `
      <div class="tri-head">
        <p class="tri-kicker">${ui.dynamic.cards.kicker}</p>
        <h3>${card.indicator}</h3>
      </div>
      <div class="tri-shell">
        <p class="side-label"></p>
        <p class="side-text"></p>
      </div>
      <div class="face-actions">
        <button type="button" class="face-btn" data-side="negative">${ui.dynamic.cards.buttonNegative}</button>
        <button type="button" class="face-btn" data-side="indicator">${ui.dynamic.cards.buttonCenter}</button>
        <button type="button" class="face-btn" data-side="positive">${ui.dynamic.cards.buttonPositive}</button>
      </div>
    `;

    const actionButtons = article.querySelectorAll(".face-btn");
    actionButtons.forEach((button) => {
      button.addEventListener("click", () => {
        setCardFace(article, card, button.dataset.side, persistChanges, true);
      });
    });

    setCardFace(article, card, side, persistChanges, false);
    container.appendChild(article);
  });
}

function setCardFace(cardElement, cardData, side, persist, animate) {
  const sideLabel = cardElement.querySelector(".side-label");
  const sideText = cardElement.querySelector(".side-text");
  const key = cardElement.dataset.key;
  const prevSide = cardElement.dataset.currentSide ?? "indicator";

  const map = {
    indicator: {
      label: ui.dynamic.cards.labelIndicator,
      text: `${ui.dynamic.cards.indicatorPrefix} ${cardData.indicator}.`
    },
    positive: {
      label: ui.dynamic.cards.labelPositive,
      text: cardData.positive
    },
    negative: {
      label: ui.dynamic.cards.labelNegative,
      text: cardData.negative
    }
  };

  const face = map[side] ?? map.indicator;
  sideLabel.textContent = face.label;
  sideText.textContent = face.text;

  cardElement.querySelectorAll(".face-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.side === side);
  });

  if (animate) {
    const previousIndex = getFaceIndex(prevSide);
    const nextIndex = getFaceIndex(side);
    const flipClass = nextIndex >= previousIndex ? "flip-right" : "flip-left";

    cardElement.classList.remove("flip-right", "flip-left");
    void cardElement.offsetWidth;
    cardElement.classList.add(flipClass);

    window.setTimeout(() => {
      cardElement.classList.remove("flip-right", "flip-left");
    }, 460);
  }

  cardElement.dataset.currentSide = side;

  if (persist) {
    state.cardSides[key] = side;
    saveState();
  }
}

function getFaceIndex(side) {
  const map = {
    negative: -1,
    indicator: 0,
    positive: 1
  };
  return map[side] ?? 0;
}

function setupChecklist() {
  const checklistForm = document.getElementById("checklist");
  const evaluateBtn = document.getElementById("evaluate-btn");
  const feedback = document.getElementById("final-feedback");

  const boxes = Array.from(checklistForm.querySelectorAll("input[type='checkbox']"));
  const selected = new Set(state.checklist ?? []);

  boxes.forEach((box) => {
    box.checked = selected.has(box.value);
    box.addEventListener("change", () => {
      state.checklist = boxes.filter((item) => item.checked).map((item) => item.value);
      saveState();
    });
  });

  const evaluate = () => {
    const marks = boxes.filter((item) => item.checked).map((item) => item.value);
    const score = marks.length;

    const verdict =
      score === 4
        ? ui.dynamic.checklist.verdictGreen
        : score >= 2
        ? ui.dynamic.checklist.verdictAmber
        : ui.dynamic.checklist.verdictRed;

    feedback.className = `feedback state-${verdict.color}`;
    feedback.innerHTML = `
      <h3>${verdict.title}</h3>
      <p>${verdict.text}</p>
      <small>${ui.dynamic.checklist.markedPrefix} ${score}/4.</small>
    `;
  };

  evaluateBtn.addEventListener("click", evaluate);
  evaluate();
}

function setupRevealAnimation() {
  const elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  elements.forEach((element) => observer.observe(element));
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function loadState() {
  try {
    const raw = window.localStorage.getItem(STATE_STORAGE_KEY);
    if (!raw) {
      return cloneDefaultState();
    }

    const parsed = JSON.parse(raw);
    const legacyModeFromView = parsed.optativaView === "muchos" ? "muchos" : "pocos";
    const parsedOptativaCase = parsed.optativaCase ?? {};
    const optativaMode = parsedOptativaCase.mode === "muchos" ? "muchos" : legacyModeFromView;
    const optativaFactors = Array.isArray(parsedOptativaCase.factors) ? parsedOptativaCase.factors : [];
    const optativaResult = ["positive", "negative", "ambiguous"].includes(parsedOptativaCase.result)
      ? parsedOptativaCase.result
      : "ambiguous";

    return {
      ...DEFAULT_STATE,
      ...parsed,
      absentismo: {
        ...DEFAULT_STATE.absentismo,
        ...(parsed.absentismo ?? {})
      },
      optativaCase: {
        ...DEFAULT_STATE.optativaCase,
        mode: optativaMode,
        factors: optativaFactors,
        result: optativaResult
      },
      cardSides: parsed.cardSides ?? {},
      checklist: Array.isArray(parsed.checklist) ? parsed.checklist : []
    };
  } catch (_error) {
    return cloneDefaultState();
  }
}

function saveState() {
  window.localStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(state));
}

function cloneDefaultState() {
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}
