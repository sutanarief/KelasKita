import * as colors from '../../styles/colors'

const color = [
  {
  cardColor: colors.darkBlue,
  userNameColor: colors.lightCream,
  roleColor: colors.newBlue,
  typeColor: colors.moreGrey,
  dataColor: colors.moreGrey
  },
  {
    cardColor: colors.darkGreen,
    userNameColor: colors.lightCream,
    roleColor: colors.softGreen,
    typeColor: colors.moreGrey,
    dataColor: colors.moreGrey
  },
  {
    cardColor: colors.lessDarkGreen,
    userNameColor: colors.lightCream,
    roleColor: colors.softGreen,
    typeColor: colors.moreGrey,
    dataColor: colors.moreGrey
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
    class: '7-A',
    role: 'Student',
    activityType: 'Asking a question',
    activityData: 'Rumus persegi panjang apa ya ? saya lupa',
    activityColor: colorPicker('Student')
  },
  {
    username: 'Poeti Artha H.I',
    profilePicture: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F04%2F20%2Fbengal-green-eyes-lying-down-1311108564-2000.jpg',
    class: 'IT',
    role: 'Teacher',
    activityType: 'Post a homework',
    activityData: 'Tolong dikerjakan pembuatan website sederhana hanya bagian home page',
    activityColor: colorPicker('Teacher')
  },
  {
    username: 'Heniarti Putri P',
    profilePicture: 'https://imageserver.petsbest.com/marketing/blog/Himalayan_cat_breed.jpg',
    class: '',
    role: 'Parents',
    activityType: 'Asking a question',
    activityData: 'Untuk UTS akan dimulai pada tanggal berapa ya ?',
    activityColor: colorPicker('Parents')
  },
]