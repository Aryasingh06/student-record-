const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/student')
    .then(() => console.log('database connected successfully'))
    .catch((e) => console.log('not connected', e));

const acedemicSchema = new mongoose.Schema({
    student_id: String,
    name: String,
    grades: {
        science: Number,
        english: Number,
    },
    other_information: String
});

const acedemicRecord = mongoose.model('acedemicRecord', acedemicSchema);

// Create document
const Reactdata = new acedemicRecord({
    student_id: 'S001',
    name: 'Riya',
    grades: {
        science: 85,
        english: 78,
    },
    other_information: 'student of the month, jan 2023'
});

Reactdata.save()
    .then(() => console.log('Reactdata saved successfully'))
    .catch((error) => console.log('Error saving Reactdata', error));

const co_curricularActivitiesSchema = new mongoose.Schema({
    student_id: String,
    name: String,
    activity_type: String,
    duration: String,
    achievement: String
});

const co_curricularActivitiesRecord = mongoose.model('co_curricularActivities', co_curricularActivitiesSchema);

// Create document
const Reactdata1 = new co_curricularActivitiesRecord({
    student_id: 'S001',
    name: 'Riya',
    activity_type: 'sports',
    duration: '2 years',
    achievement: 'first place in football tournament'
});

Reactdata1.save()
    .then(() => console.log('Reactdata1 saved successfully'))
    .catch((error) => console.log('Error saving Reactdata1', error));