'use strict';

// Cargamos el módulo de mongoose
const mongoose = require('mongoose');

// Usaremos los esquemas
const Schema = mongoose.Schema;

// Creamos el objeto del esquema y sus atributos
const subjectSchema = new Schema({

    curso: [
        { type: String, require: true }
    ],

    grado: [
            { type: String, require: true }
    ],

    nombre: { type: String, require: true },

    semestre: { type: String, require: true },

    grupo: [
        {
           nombre: { type: String, require: true },
           dias: [
                {
                  dia: {
                      nombre: { type: String, require: true },
                      hora: { type: Number, require: true },
                      duracion: { type: Numeber, require: true}

                  }
                }
            ]
        }
        ]

});

// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Subject', subjectSchema);