import * as colors from '../../styles/colors'

const color = [
  {
  cardColor: colors.darkBlue,
  userNameColor: colors.lightCream,
  roleColor: colors.newBlue,
  typeColor: colors.moreGrey,
  dataColor: colors.moreGrey,
  timeColor: colors.newBlue,
  seeMoreColor: colors.newBlue
  },
  {
    cardColor: colors.darkGreen,
    userNameColor: colors.lightCream,
    roleColor: colors.softGreen,
    typeColor: colors.moreGrey,
    dataColor: colors.moreGrey,
    timeColor: colors.softGreen,
    seeMoreColor: colors.softGreen
  },
  {
    cardColor: colors.lessDarkGreen,
    userNameColor: colors.lightCream,
    roleColor: colors.softGreen,
    typeColor: colors.moreGrey,
    dataColor: colors.moreGrey,
    timeColor: colors.softGreen,
    seeMoreColor: colors.softGreen
  }
]

const colorPicker = (role: string) => {
  switch (role.toLowerCase()) {
    case 'student':
      return color[0]
    case 'teacher':
      return color[1]
    default:
      return color[2]
  }
}

export const activityList = [
  {
    username: 'Sutan Arief S.A',
    profilePicture: 'https://i.pinimg.com/originals/e1/0b/23/e10b2318c56218f4f75591457a0c4b8f.jpg',
    class: 'as',
    role: 'Student',
    activityType: '',
    activityData: 'Terbaik',
    activityColor: colorPicker('Student'),
    time: 'Thu Aug 11 2022 09:17:07',
    rating: '1'
  },
  {
    username: 'Poeti Artha H.I',
    profilePicture: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F04%2F20%2Fbengal-green-eyes-lying-down-1311108564-2000.jpg',
    class: 'as',
    role: 'Teacher',
    activityType: '',
    activityData: 'Memudahkan untuk melakukan kegiatan operasional kelas',
    activityColor: colorPicker('Teacher'),
    time: 'Thu Sep 15 2022 09:17:07',
    rating: '1.5'
  },
  {
    username: 'Heniarti Putri P',
    profilePicture: 'https://imageserver.petsbest.com/marketing/blog/Himalayan_cat_breed.jpg',
    class: 'as',
    role: 'Parents',
    activityType: '',
    activityData: 'Aplikasi yang mudah digunakan',
    activityColor: colorPicker('Parents'),
    time: 'Thu Oct 13 2022 15:00:07',
    rating: '2'
  },
  {
    username: 'Sutan Abdillah Ali S.P',
    profilePicture: 'https://i.pinimg.com/originals/e1/0b/23/e10b2318c56218f4f75591457a0c4b8f.jpg',
    class: 'as',
    role: 'Student',
    activityType: '',
    activityData: 'Terima kasih',
    activityColor: colorPicker('Student'),
    time: 'Thu Aug 11 2022 09:17:07',
    rating: '2.5'
  },
  {
    username: 'Uzumaki Naruto',
    profilePicture: 'https://i.pinimg.com/originals/e1/0b/23/e10b2318c56218f4f75591457a0c4b8f.jpg',
    class: 'as',
    role: 'Student',
    activityType: '',
    activityData: 'Terbaik',
    activityColor: colorPicker('Student'),
    time: 'Thu Aug 11 2022 09:17:07',
    rating: '3'
  },
  {
    username: 'Ratu Ayomi Sinar S',
    profilePicture: 'https://imageserver.petsbest.com/marketing/blog/Himalayan_cat_breed.jpg',
    class: 'as',
    role: 'Parents',
    activityType: '',
    activityData: 'Aplikasi yang mudah digunakan',
    activityColor: colorPicker('Parents'),
    time: 'Thu Oct 13 2022 15:00:07',
    rating: '3.5'
  },
  {
    username: 'Poeti Artha H.I',
    profilePicture: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F04%2F20%2Fbengal-green-eyes-lying-down-1311108564-2000.jpg',
    class: 'as',
    role: 'Teacher',
    activityType: '',
    activityData: 'Memudahkan untuk melakukan kegiatan operasional kelas',
    activityColor: colorPicker('Teacher'),
    time: 'Thu Sep 15 2022 09:17:07',
    rating: '4'
  },
  {
    username: 'Poeti Artha H.I',
    profilePicture: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F04%2F20%2Fbengal-green-eyes-lying-down-1311108564-2000.jpg',
    class: 'as',
    role: 'Teacher',
    activityType: '',
    activityData: 'Memudahkan untuk melakukan kegiatan operasional kelas',
    activityColor: colorPicker('Teacher'),
    time: 'Thu Sep 15 2022 09:17:07',
    rating: '4.5'
  },
  {
    username: 'Poeti Artha H.I',
    profilePicture: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F04%2F20%2Fbengal-green-eyes-lying-down-1311108564-2000.jpg',
    class: 'as',
    role: 'Teacher',
    activityType: '',
    activityData: 'Memudahkan untuk melakukan kegiatan operasional kelas',
    activityColor: colorPicker('Teacher'),
    time: 'Thu Sep 15 2022 09:17:07',
    rating: '5'
  },
  {
    username: 'Poeti Artha H.I',
    profilePicture: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F04%2F20%2Fbengal-green-eyes-lying-down-1311108564-2000.jpg',
    class: 'as',
    role: 'Teacher',
    activityType: '',
    activityData: 'Memudahkan untuk melakukan kegiatan operasional kelas',
    activityColor: colorPicker('Teacher'),
    time: 'Thu Sep 15 2022 09:17:07',
    rating: '5'
  },
]