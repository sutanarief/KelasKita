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
    class: '7-A',
    role: 'Student',
    activityType: 'Asking a question',
    activityData: 'Rumus persegi panjang apa ya ? saya lupa',
    activityColor: colorPicker('Student'),
    time: 'Thu Aug 11 2022 09:17:07'
  },
  {
    username: 'Poeti Artha H.I',
    profilePicture: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F04%2F20%2Fbengal-green-eyes-lying-down-1311108564-2000.jpg',
    class: 'IT',
    role: 'Teacher',
    activityType: 'Post a homework',
    activityData: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda incidunt quibusdam aut rerum quos tempore velit hic perferendis harum illum consequuntur aperiam tempora libero sint ratione, quas dolor corporis provident quaerat quidem nemo explicabo? Dolores facilis fugit veritatis, porro commodi expedita quo sit reiciendis, laudantium quas ullam molestias accusamus saepe officia odio vel similique dolorem. Impedit qui, molestias sint nam nisi doloremque quae minima quia! Quo saepe ex modi nemo est! Laboriosam dolor harum exercitationem suscipit quaerat veniam quasi nihil sed. Ipsum dolor amet deserunt necessitatibus, ipsa alias. Corporis dolorem inventore enim fugit, ea veniam incidunt aut, tenetur, voluptates sit culpa unde nobis maxime quod sequi quae facilis tempora fugiat vitae. Officiis, eum aliquam laboriosam labore veniam quasi inventore sapiente ducimus quas soluta quia, fuga culpa magni iure ipsa consequuntur nemo aut at adipisci. Dignissimos natus odio tempore, laborum tempora architecto ab perspiciatis veniam. Dolorem cupiditate nostrum blanditiis doloremque, non optio debitis quo libero a, quibusdam consequuntur molestias maxime est provident quos ut necessitatibus aliquid hic? Similique ipsam excepturi harum dolores dignissimos at fugit corporis laborum ad veniam dolorum facilis provident esse natus, est expedita numquam. Quam ullam voluptates architecto? Cum repellat nemo ipsa eius, modi molestias consequuntur maiores veniam',
    activityColor: colorPicker('Teacher'),
    time: 'Thu Sep 15 2022 09:17:07'
  },
  {
    username: 'Heniarti Putri P',
    profilePicture: 'https://imageserver.petsbest.com/marketing/blog/Himalayan_cat_breed.jpg',
    class: '',
    role: 'Parents',
    activityType: 'Asking a question',
    activityData: 'Untuk UTS akan dimulai pada tanggal berapa ya ?',
    activityColor: colorPicker('Parents'),
    time: 'Thu Oct 13 2022 15:00:07'
  },
]