'use strict';

const express = require('express');
const api = express.Router();

const subjectCtrl = require('../controllers/subject');

api.get('/subjects', subjectCtrl.getSubjects());
api.get('/subjects/name', subjectCtrl.getSubjectName());
api.get('/subjects/grado', subjectCtrl.getSubjectGrado());
api.get('/subjects/curso', subjectCtrl.getSubjectCurso());
api.get('/subjects/grupo', subjectCtrl.getSubjectGrupo());
api.post('/user/save', subjectCtrl.saveSubject());
api.put('/userid/:userId', subjectCtrl.updateSubjects());
api.delete('/userid/:userId', subjectCtrl.deleteSubject());

module.exports = api;