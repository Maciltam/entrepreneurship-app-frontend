const mockupCandidates = [
  {
    candidate1: {
      name: "Jean Dupont",
      photoURL:
        "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      competences: [
        "Conception de circuits",
        "Automatisation industrielle",
        "Programmation PLC",
      ],
      contact: "jean.dupont@example.com",
    },
    candidate2: {
      name: "Fatima El Amrani",
      photoURL:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      competences: [
        "Electronique analogique",
        "Conception de cartes électroniques",
        "Systèmes embarqués",
      ],
      contact: "fatima.elamrani@example.com",
    },
    shortDesc:
      "Nous sommes une équipe spécialisée dans l'électronique et l'automatisation, travaillant sur des projets innovants en conception de circuits et systèmes embarqués.",
    longDesc:
      "Notre duo combine des compétences en électronique analogique et en automatisation industrielle. Nous concevons des cartes électroniques performantes et développons des systèmes embarqués pour diverses applications industrielles. Notre objectif est de créer des solutions techniques fiables et efficaces qui répondent aux besoins spécifiques de nos clients.",
    department: "Electronique",
  },
  {
    candidate1: {
      name: "Sophie Martin",
      photoURL:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      competences: [
        "Développement logiciel",
        "Bases de données",
        "Sécurité informatique",
      ],
      contact: "sophie.martin@example.com",
    },
    candidate2: {
      name: "Taro Nakamura",
      photoURL:
        "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      competences: [
        "Réseaux informatiques",
        "Cloud Computing",
        "Virtualisation",
      ],
      contact: "taro.nakamura@example.com",
    },
    shortDesc:
      "Nous sommes une équipe de développeurs spécialisés dans la création de solutions logicielles innovantes et la gestion d'infrastructures informatiques.",
    longDesc:
      "Notre duo combine des compétences en développement logiciel et en administration de réseaux. Nous concevons des applications performantes et développons des architectures cloud sécurisées. Notre objectif est de créer des solutions informatiques robustes qui répondent aux besoins spécifiques de nos clients.",
    department: "Informatique",
  },
  {
    candidate1: {
      name: "Pierre Lefebvre",
      photoURL:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      competences: ["Conception mécanique", "CAO/FAO", "Simulation FEA"],
      contact: "pierre.lefebvre@example.com",
    },
    candidate2: {
      name: "Aisha Mohammed",
      photoURL:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      competences: [
        "Mécanique des fluides",
        "Thermodynamique",
        "Conception de systèmes",
      ],
      contact: "aisha.mohammed@example.com",
    },
    shortDesc:
      "Nous sommes une équipe spécialisée dans la conception mécanique et les systèmes thermiques, travaillant sur des projets innovants en ingénierie mécanique.",
    longDesc:
      "Notre duo combine des compétences en conception mécanique et en mécanique des fluides. Nous concevons des systèmes performants et développons des solutions thermiques innovantes. Notre objectif est de créer des produits mécaniques fiables et efficaces qui répondent aux besoins spécifiques de nos clients.",
    department: "Mécanique",
  },
  {
    candidate1: {
      name: "Claire Dubois",
      photoURL:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      competences: [
        "Conception électrique",
        "Automatisation",
        "Systèmes de contrôle",
      ],
      contact: "claire.dubois@example.com",
    },
    candidate2: {},
    shortDesc:
      "Je suis un professionnel de l'électrotechnique spécialisé dans la conception de systèmes électriques et l'automatisation industrielle.",
    longDesc:
      "En tant que professionnel de l'électrotechnique, je me spécialise dans la conception de systèmes électriques et l'automatisation industrielle. Mon objectif est de créer des solutions techniques fiables et efficaces qui répondent aux besoins spécifiques de nos clients. Je combine une expertise technique avec une approche stratégique pour concevoir des systèmes de contrôle performants.",
    department: "Electrotechnique",
  },
];

export { mockupCandidates };

const departments = [
  "Automatique",
  "Electronique",
  "Electrotechnique",
  "Informatique",
  "Mecanique",
];

export { departments };
