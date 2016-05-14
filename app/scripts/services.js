'use strict';

app.factory('profileFactory', function(){

    var dataFact = {};
    var userData = 
    {
        
        name: 'Misael Cázares',
        position: 'Front-End Web Developer',
        birthday: '1993-05-18',
        address: 'Herreros 174B, San Pedrito Peñuelas, 76148',
        phoneNumber: '(442) 230 8556',
        emailAddress: 'misael.upg@gmail.com',
        webLinks: 
        [
            'http://faceboom.com/misael.upg', 
            'http://linkedin.com/misael.upg',
            'http://github.com/misael_upg'
        ], 
        references: 
        [
            {referenceName: 'Estefania Cázares', referencePhone: '(442) 230 8556'},
            {referenceName: 'Estefania Cázares', referencePhone: '(442) 230 8556'},
        ],
        languages: 
        [
            {language:'English', level:75, native:false},
            {language:'French', level: 25, native:false},
            {language:'Spanish', level:100, native:true}
        ],
        workExperience: 
        [
            {
                time:'2012-2012', 
                companyName: 'Contact Center Santander', 
                jobPosition: 'Operdor Banca Telefónica', 
                jobDescription: 'Material takes cues from contemporary architecture, road signs, pavement marking tape, and athletic courts. Color should be unexpected and vibrant.'
            },
            {
                time:'2012-2012', 
                companyName: 'Abstract Inc.', 
                jobPosition: 'Operdor Banca Telefónica', 
                jobDescription: 'Material takes cues from contemporary architecture, road signs, pavement marking tape, and athletic courts. Color should be unexpected and vibrant.'
            },
            {
                time:'2012-2012', 
                companyName: 'Facebook Inc.', 
                jobPosition: 'Operdor Banca Telefónica', 
                jobDescription: 'Material takes cues from contemporary architecture, road signs, pavement marking tape, and athletic courts. Color should be unexpected and vibrant.'
            }
        ],
        education: 
        [
            {
                time:'2012-2012', 
                career: 'Inegeniería en Nanotencología - Trunca (1er Semestre)', 
                institutionName: 'Universidad Autónoma de Querétaro', 
                experience: 'Material takes cues from contemporary architecture, road signs, pavement marking tape, and athletic courts. Color should be unexpected and vibrant.'
            },
            {
                time:'2012-2012', 
                career: 'Abstract Inc.', 
                institutionName: 'Operdor Banca Telefónica', 
                experience: 'Material takes cues from contemporary architecture, road signs, pavement marking tape, and athletic courts. Color should be unexpected and vibrant.'
            },
            {
                time:'2012-2012', 
                career: 'Facebook Inc.', 
                institutionName: 'Operdor Banca Telefónica', 
                experience: 'Material takes cues from contemporary architecture, road signs, pavement marking tape, and athletic courts. Color should be unexpected and vibrant.'
            }
        ],
        skills: 
        {
            professionalSkills: 
            [
                {skill: 'UX, UI, HCI, HCD', level: 80 },
                {skill: 'Python, Django, Flask', level: 75 },
                {skill: 'PHP, Laravel', level: 70 },
                {skill: 'Ruby', level: 70 },
                {skill: 'Angular, Polymer', level: 70 },
                {skill: 'Git, Github, Gitlab, TaskRunners', level: 75 },
                {skill: 'Sketch, Illustrator, Photoshop', level: 80 },
                {skill: 'Relational & Non Relational DB', level: 50 }
            ],
            personalSkills: 
            [
                {skill: 'Colaboration, Team Work', level: 80 },
                {skill: 'Self-learning, Curiosity', level: 75 },
                {skill: 'Attention to detail, Obsession, Quality', level: 70 },
                {skill: 'Empathy', level: 70 },
                {skill: 'Vision, Creativity', level: 70 },
                {skill: 'Sociable, Friendly', level: 75 }
            ]
        }
    };

    dataFact.getProfileData = function() {
        return userData;
    };
    return dataFact;
});