import aulaVirtual from '../mocks/aulaVirtual'
import mensajeria from '../mocks/mensajeria'
import usuario from '../mocks/usuario'

export const getUser = () => {
    return usuario.personal_info
}

export const getTutor = () => {
    return usuario.tutor_info
}

export const getSubjects = () => {
    return usuario.subjects
}

export const getEmails = () => {
    return mensajeria.emails
}

export const getCourse = () => {
    return aulaVirtual
}