import React from 'react';
import Gsign from '../public/svgs/Gsign';
import Note from '../public/svgs/Note';
import Todo from '../public/svgs/Todo';


export const TRACK_INFO = [
  { icon: <Gsign />, title: "Track your daily activities" },
  { icon: <Gsign />, title: "Save important notes or code snippets you’re likely to reuse" },
  { icon: <Gsign />, title: "Keep a diary of your daily activities" },
];

export const NOTE_LINKS = [
  { icon: <Note />, name: 'Notes', size: (n) => n },
  { icon: <Todo />, name: 'Todos', size: (n) => n}
]