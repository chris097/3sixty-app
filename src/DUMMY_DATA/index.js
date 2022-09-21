import React from 'react';
import Edit from '../public/svgs/Edit';
import Gsign from '../public/svgs/Gsign';
import Note from '../public/svgs/Note';
import Todo from '../public/svgs/Todo';


export const TRACK_INFO = [
  { icon: <Gsign />, title: `Track your daily activities` },
  { icon: <Gsign />, title: `ave important notes or code snippets you’re likely to reuse` },
  { icon: <Gsign />, title: `Keep a diary of your daily activities` },
];

export const NOTE_LINKS = [
  { icon: <Note />, name: 'Notes', size: (n) => n },
  { icon: <Todo />, name: 'Todos', size: (n) => n }
];

export const DROP_DOWNS = [
  { id: 1, icon: <Edit />, name: 'Edit' },
  { id: 2, icon: <Edit />, name: 'Delete' },
  { id: 3, icon: <Edit />, name: 'Print' },
  { id: 4, icon: <Edit />, name: 'Archive' },
]

export const DART_CARDS = [
  {
    id: 1,
    tag: 'personal',
    title: '10 Hours Fasting every week',
    description: 'Exercitation in consectetur velit enim ullamco aliqua officia mollit eu nulla sunt aliquip aute nulla. Aliquip tempor et exercitation minim adipisicing minim velit. Id elit culpa aute est. Aute aute excepteur et adipisicing adipisicing officia dolor. Commodo incididunt ad labore incididunt aliquip deserunt anim eu incididunt est mollit. Proident aliqua non aliquip dolore sint voluptate adipisicing. Tempor in fugiat incididunt ea officia ullamco ut qui excepteur dolore ut et ut. Ut do laborum culpa consectetur duis et velit est nulla. In consectetur nisi duis ad quis magna anim ut dolor minim irure proident do irure. Sit do quis sunt consequat id incididunt quis.',
    created_at: '23 hours ago'
  },
  {
    id: 2,
    tag: 'personal',
    title: 'Birthday debrief',
    description: 'Exercitation in consectetur velit enim ullamco aliqua officia mollit eu nulla sunt aliquip aute nulla. Aliquip tempor et exercitation minim adipisicing minim velit. Id elit culpa aute est. Aute aute excepteur et adipisicing adipisicing officia dolor. Commodo incididunt ad labore incididunt aliquip deserunt anim eu incididunt est mollit. Proident aliqua non aliquip dolore sint voluptate adipisicing. Tempor in fugiat incididunt ea officia ullamco ut qui excepteur dolore ut et ut. Ut do laborum culpa consectetur duis et velit est nulla. In consectetur nisi duis ad quis magna anim ut dolor minim irure proident do irure. Sit do quis sunt consequat id incididunt quis.',
    created_at: '23 hours ago'
  },
  {
    id: 3,
    tag: 'personal',
    title: 'Visit Plateau State',
    description: 'Exercitation in consectetur velit enim ullamco aliqua officia mollit eu nulla sunt aliquip aute nulla. Aliquip tempor et exercitation minim adipisicing minim velit. Id elit culpa aute est. Aute aute excepteur et adipisicing adipisicing officia dolor. Commodo incididunt ad labore incididunt aliquip deserunt anim eu incididunt est mollit. Proident aliqua non aliquip dolore sint voluptate adipisicing. Tempor in fugiat incididunt ea officia ullamco ut qui excepteur dolore ut et ut. Ut do laborum culpa consectetur duis et velit est nulla. In consectetur nisi duis ad quis magna anim ut dolor minim irure proident do irure. Sit do quis sunt consequat id incididunt quis.',
    created_at: '23 hours ago'
  },
  {
    id: 4,
    tag: 'personal',
    title: 'Learn Dart',
    description: 'Exercitation in consectetur velit enim ullamco aliqua officia mollit eu nulla sunt aliquip aute nulla. Aliquip tempor et exercitation minim adipisicing minim velit. Id elit culpa aute est. Aute aute excepteur et adipisicing adipisicing officia dolor. Commodo incididunt ad labore incididunt aliquip deserunt anim eu incididunt est mollit. Proident aliqua non aliquip dolore sint voluptate adipisicing. Tempor in fugiat incididunt ea officia ullamco ut qui excepteur dolore ut et ut. Ut do laborum culpa consectetur duis et velit est nulla. In consectetur nisi duis ad quis magna anim ut dolor minim irure proident do irure. Sit do quis sunt consequat id incididunt quis.',
    created_at: '23 hours ago'
  },
  {
    id: 5,
    tag: 'personal',
    title: 'Learn Dart',
    description: 'Exercitation in consectetur velit enim ullamco aliqua officia mollit eu nulla sunt aliquip aute nulla. Aliquip tempor et exercitation minim adipisicing minim velit. Id elit culpa aute est. Aute aute excepteur et adipisicing adipisicing officia dolor. Commodo incididunt ad labore incididunt aliquip deserunt anim eu incididunt est mollit. Proident aliqua non aliquip dolore sint voluptate adipisicing. Tempor in fugiat incididunt ea officia ullamco ut qui excepteur dolore ut et ut. Ut do laborum culpa consectetur duis et velit est nulla. In consectetur nisi duis ad quis magna anim ut dolor minim irure proident do irure. Sit do quis sunt consequat id incididunt quis.',
    created_at: '23 hours ago'
  },
  {
    id: 6,
    tag: 'personal',
    title: 'Learn Dart',
    description: 'Exercitation in consectetur velit enim ullamco aliqua officia mollit eu nulla sunt aliquip aute nulla. Aliquip tempor et exercitation minim adipisicing minim velit. Id elit culpa aute est. Aute aute excepteur et adipisicing adipisicing officia dolor. Commodo incididunt ad labore incididunt aliquip deserunt anim eu incididunt est mollit. Proident aliqua non aliquip dolore sint voluptate adipisicing. Tempor in fugiat incididunt ea officia ullamco ut qui excepteur dolore ut et ut. Ut do laborum culpa consectetur duis et velit est nulla. In consectetur nisi duis ad quis magna anim ut dolor minim irure proident do irure. Sit do quis sunt consequat id incididunt quis.',
    created_at: '23 hours ago'
  },
];
