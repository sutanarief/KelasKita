import * as colors from '../../styles/colors'

export const perkList = [
  {
    label: 'Teachers',
    role: 'teacher',
    color: colors.darkBlue,
    perks: [
      "Input students mark",
      "Check student attendance",
      "Share homework to students",
      "Create report card for every student"
    ]
  },
  {
    label: 'Parents',
    role: 'parent',
    color: colors.darkGreen,
    perks: [
      "Monitoring your child progress",
      "Chatting with homeroom teacher",
      "Check the report card",
      "Take advice from the teacher"
    ]
  },
  {
    label: 'Students',
    role: 'student',
    color: colors.lessDarkGreen,
    perks: [
      "Handing over the homework",
      "Ask to the teacher about something",
      "Discuss with your friends",
      "Do the exam easily"
    ]
  },
]