'use strict';

// Cargamos el módulo de mongoose
const mongoose = require('mongoose');

// Usaremos los esquemas
const Schema = mongoose.Schema;

// Creamos el objeto del esquema y sus atributos
const subjectSchema = new Schema({
    curso: {
        type: String, require: true,
        curso: [
            '1º',
            '2º',
            '3º',
            '4º'
        ]
    },
    grado: {
        type: String, require: true,
        grado: [
            'Grado en Ingeniería del Software',
            'Grado en Ingeniería de Computadores',
            'Grado en Sistemas de Información',
            'Grado en Tecnologías para la Sociedad de la Información',
            'Doble Grado en Ingeniería de Computadores y en Tecnologías para la Sociedad de la Información',
            'Doble Grado en Ingeniería del Software y en Tecnologías para la Sociedad de la Información'
        ]
    },
    nombre: {type: String, require: true},
    dias: {
        type: String, require: true,
        dias: [
            'Lunes',
            'Martes',
            'Miercoles',
            'Jueves',
            'Viernes'
        ]
    },
    hora: {type: date(), require: true},
    grupo: {
        type: String, require: true,
        grupo: [
            curso[0] = ['GM11', 'GM12', 'GM13', 'GM14', 'GM15', 'GT11', 'GT12', 'GT13', 'GT14'],
            curso[1] = ['GM21', 'GM22', 'GM23', 'GT21', 'GT22'],
            grado[0] = {
                3: ['GSWM31', 'GSWT31', 'GMOPT', 'GTOPT 1', 'GTOPT 2'],
                4: ['GSWM41', 'GSWT41', 'GMOPT', 'GTOPT 1', 'GTOPT 2']
            },
            grado[1] = {
                3: ['GCOM31', 'GMOPT', 'GTOPT 1', 'GTOPT 2'],
                4: ['GCOT41', 'GMOPT', 'GTOPT 1', 'GTOPT 2']
            },
            grado[2] = {
                3: ['GSIT31', 'GMOPT', 'GTOPT 1', 'GTOPT 2'],
                4: ['GSIM41', 'GMOPT', 'GTOPT 1', 'GTOPT 2']
            },
            grado[3] = {
                3: ['GTIM31', 'GMOPT', 'GTOPT 1', 'GTOPT 2'],
                4: ['GTIT41', 'GMOPT', 'GTOPT 1', 'GTOPT 2']
            }
        ]
    }
});

// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Subject', subjectSchema);