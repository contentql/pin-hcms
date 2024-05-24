'use client'

import { Text, TextFieldProps } from '@payloadcms/ui/fields/Text'
import { useFormFields } from '@payloadcms/ui/forms/Form'
import * as React from 'react'

const format = (val: string): string =>
  val
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .toLowerCase()

export const CustomSlugComponent: React.FC<TextFieldProps> = props => {
  // Field values can be accessed and updated using the commented `useField` function as well.
  // const { value: slug, setValue: setSlug } =
  //   useField<ValueWithRelation>({ path: path || '' })
  //
  // const { value: title, setValue: SetTile } = useField<number>({
  //   path: 'title',
  // })

  // Retrieve field state and dispatch function using useFormFields hook
  const { fields, dispatch } = useFormFields(([fields, dispatch]) => ({
    fields,
    dispatch,
  }))

  // Extract contest_id field value from fields object
  const { title } = fields

  // Fetch the data if needed
  React.useEffect(() => {
    // Dispatch an action to update the slug field value
    const formattedSlug = format(String(title?.value || ''))

    dispatch({
      type: 'UPDATE',
      path: 'slug',
      value: formattedSlug,
    })
  }, [title?.value, dispatch])

  return (
    // Render the text with provided props
    <Text {...props} />
  )
}
