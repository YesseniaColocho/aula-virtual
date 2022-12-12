const usuario = {
    personal_info: {
        name: "Alberto",
        lastname: "Riera",
        tlf: "659855632",
        dni: "48593325T",
        address: "C/ La Floresta, 15, 5-5",
        email: "alber.r.r.90@gmail.com",
        scholarships: []
    },
    tutorInfo: {
        name: "Carmen Gutierrez Aros",
        email: "carmen.g.a@universidad.com",
        mensajes_tablon: "2",
        recursos_estudiantes: "10"
    },
    subjects: [
        {
            name: "Composición",
            teacher: "Andres Garrido B.",
            current_assignment: {
                name: "Ejercicio 3: Conocimientos de la Composición 1",
                due_date: 1666908000000
            },
            modules: [
                {
                    name: "Módulo 1",
                    type: "module",
                    grade: "8",
                    assignments: [
                        "Introducción",
                        "Ejercicio 1: Conocimientos de la Composición 1",
                        "Ejercicio 2: Estructura osea natural y animal. Conocmientos básicos"
                    ]
                },
                {
                    name: "Módulo 2",
                    type: "module",
                    grade: "5",
                    assignments: [
                        "Introducción",
                        "Ejercicio 3: Arte y modelado en nuevas tecnologías",
                        "Ejercicio 4"
                    ]
                },
                {
                    name: "Módulo 3",
                    type: "module",
                    grade: "-",
                    assignments: [
                        "Introducción",
                        "Ejercicio 5",
                        "Ejercicio 6"
                    ]
                },
                {
                    name: "Examen Final",
                    type: "test",
                    grade: "-",
                    assignments: [
                        "Examen Final"
                    ]
                }
            ]
        },
        {
            name: "Componentes visuales de una pieza gráfica: la imagen"
        },
        {
            name: "Componentes visuales de una pieza gráfica: el color"
        },
        {
            name: "Utilización de la composición para potenciar la idea creativa"
        },
        {
            name: "Componentes visuales de una pieza gráfica: el logotipo"
        }
    ]

}

export default usuario