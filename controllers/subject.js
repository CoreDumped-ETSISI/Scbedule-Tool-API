'use strict';

const Subject = require('../models/subject');

// Get de todas las asignaturas

function getSubjects(req, res) {
    Subject.find({}, (err, subjects) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` });
        if (!subjects) return res.status(404).send({ message: 'No existen asignaturas' });

        res.status(200).send({ subjects })
    })
}

// Get de cada asignatura por su nombre

function getSubjectName(req, res) {
    let subjectName = req.params.name;

    if (!subjectName) return res.status(500).send({ message: 'Es necesario introducir un Nombre.' });

    Subject.find({ 'name': subjectName }, (err, subjects) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` });
        if (!subjects) return res.status(404).send({ message: 'No existen asignaturas' });

        res.status(200).send({ subjects })
    })
}

// Get de todas las asignaturas de una carrera

function getSubjectGrado(req, res) {
    let subjectGrado = req.params.grado;

    if (!subjectGrado) return res.status(500).send({ message: 'Es necesario introducir un Grado.' });

    Subject.find({ 'grado': subjectGrado }, (err, subjects) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` });
        if (!subjects) return res.status(404).send({ message: 'No existen asignaturas' });

        res.status(200).send({ subjects })
    })
}

// Get de todas las asignaturas de un curso

function getSubjectCurso(req, res) {
    let subjectCurso = req.params.curso;

    if (!subjectCurso) return res.status(500).send({ message: 'Es necesario introducir un Curso.' });

    Subject.find({ 'curso': subjectCurso }, (err, subjects) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` });
        if (!subjects) return res.status(404).send({ message: 'No existen asignaturas' });

        res.status(200).send({ subjects })
    })
}

// Get de todas las asignaturas de una clase

function getSubjectGrupo(req, res) {
    let subjectGrupo = req.params.grupo;

    if (!subjectGrupo) return res.status(500).send({ message: 'Es necesario introducir un Grupo.' });

    Subject.find({ 'grupo': subjectGrupo }, (err, subjects) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` });
        if (!subjects) return res.status(404).send({ message: 'No existen asignaturas' });

        res.status(200).send({ subjects })
    })
}

// Post guardar asigantura (falta implementar lo del array para el json)

function saveSubject(req, res) {
    console.log('POST /api/subject');
    console.log(req.body);

    let subject = new Subject(req.body);

    subject.save((err, subjectStored) => {
        if (err) res.status(500).send({ message: `Error al guardar en la base de datos ${err}` });
        else res.status(200).send({ subject: subjectStored })
    })
}

// Put actualizar asignatura

function updateSubjects(req, res) {
    let subjectId = req.params.subjectId;
    let update = req.body;

    Subject.findByIdAndUpdate(subjectId, update, (err, subjectUpdated) => {
        if (err) res.status(500).send({ message: `Error al actualizar la asignatura: ${err}` });

        res.status(200).send({ subject: subjectUpdated })
    })
}

// Delete borrar asignatura
function deleteSubject(req, res) {
    let subjectName = req.params.name;

    if (!subjectName) return res.status(500).send({ message: 'Es necesario introducir un Nombre.' });

    Subject.find({ 'name': subjectName }, (err, subjects) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` });
        if (!subjects) return res.status(404).send({ message: 'No existen asignaturas con ese nombre' });

        subject.remove(err => {
            if (err) res.status(500).send({ message: `Error al borrar la Asignatura: ${err}` });
            res.status(200).send({ message: 'La asignatura ha sido eliminada' })
        })
    })
}

module.exports = {
    getSubjects,
    getSubjectName,
    getSubjectGrado,
    getSubjectCurso,
    getSubjectGrupo,
    saveSubject,
    updateSubjects,
    deleteSubject
};