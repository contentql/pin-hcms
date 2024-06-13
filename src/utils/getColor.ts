export const getTagColors = ({ color }: { color: String }) => {
  switch (color) {
    case 'blue':
      return 'bg-blue-100 text-white dark:bg-blue-900 dark:text-white'
    case 'gray':
      return 'bg-gray-100 text-white dark:bg-gray-700 dark:text-white'
    case 'red':
      return 'bg-red-100 text-white dark:bg-red-900 dark:text-white'
    case 'green':
      return 'bg-green-100 text-white dark:bg-green-900 dark:text-white'
    case 'yellow':
      return 'bg-yellow-100 text-white dark:bg-yellow-900 dark:text-white'
    case 'indigo':
      return 'bg-indigo-100 text-white dark:bg-indigo-900 dark:text-white'
    case 'purple':
      return 'bg-purple-100 text-white dark:bg-purple-900 dark:text-white'
    case 'pink':
      return 'bg-pink-100 text-white dark:bg-pink-900 dark:text-white'
    default:
      return 'bg-blue-100 text-white dark:bg-blue-900 dark:text-white'
  }
}
