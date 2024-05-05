import { CheckboxInput } from '@payloadcms/ui/fields/Checkbox'
import { TextInput, TextInputProps } from '@payloadcms/ui/fields/Text'
import { FieldDescription } from '@payloadcms/ui/forms/FieldDescription'
import { FieldLabel } from '@payloadcms/ui/forms/FieldLabel'
import { useFormFields } from '@payloadcms/ui/forms/Form'
import { useField } from '@payloadcms/ui/forms/useField'
import '@plugins/enhanced-fields/styles/slug.scss'
import type { SlugifyOptions } from '@plugins/enhanced-fields/types'
import type { CheckboxField } from 'payload/types'
import React, { useMemo } from 'react'
import slugify from 'slugify'

type Props = TextInputProps & {
  path: string
  readOnly?: boolean
  placeholder?: string
  className?: string
  custom: {
    watchFields: string[]
    slugifyOptions?: SlugifyOptions
    editFieldConfig: CheckboxField
    enableEditSlug: boolean
  }
}

const SlugComponent: React.FC<Props> = ({
  readOnly,
  className,
  required,
  path,
  placeholder,
  label,
  custom,
  AfterInput,
  BeforeInput,
  inputRef,
  descriptionProps,
  ...others
}) => {
  const { watchFields, slugifyOptions, editFieldConfig, enableEditSlug } =
    custom
  const { value, setValue, showError, errorMessage } = useField<Props>({ path })

  const checkboxPath = path.includes('.')
    ? path.slice(0, path.lastIndexOf('.')) + '.' + editFieldConfig.name
    : editFieldConfig.name

  const editSlugField = useField<Props>({ path: checkboxPath })

  const classes = [
    'field-type',
    'text',
    className,
    showError && 'error',
    readOnly && 'read-only',
    'container',
  ]
    .filter(Boolean)
    .join(' ')

  const fields = useFormFields(([fields, dispatch]) => {
    return watchFields.map(watch => fields[watch])
  })

  const isRequired = required
  const isReadonly = readOnly || !Boolean(editSlugField.value)

  const processedValue = useMemo(() => {
    const separator = slugifyOptions?.replacement ?? '-'

    return fields
      .filter(item => Boolean(item.value))
      .reduce((accumulator, currentValue, currentIndex) => {
        return (
          String(accumulator) +
          (currentIndex > 0 ? separator : '') +
          slugify(String(currentValue.value), slugifyOptions)
        )
      }, '')
  }, [fields])

  React.useEffect(() => {
    if (isReadonly) {
      /* @ts-expect-error */
      if (processedValue !== value) {
        setValue(processedValue)
      }
    }
  }, [isReadonly, processedValue])

  const handleCheckbox: React.FormEventHandler<HTMLInputElement> = e => {
    editSlugField.setValue(!Boolean(editSlugField.value))
    e.stopPropagation()
  }

  return (
    <div className={`bfSlugFieldWrapper field-type`}>
      <FieldLabel
        htmlFor={`field-${path.replace(/\./gi, '__')}`}
        label={label}
        required={isRequired}
      />
      {Array.isArray(BeforeInput) &&
        BeforeInput.map((Component, i) => <Component key={i} />)}
      <div className={classes}>
        <TextInput
          path={path}
          name={others.name}
          label={false}
          required={isRequired}
          description={descriptionProps?.description}
          readOnly={isReadonly}
          onChange={e => {
            setValue(e.target.value)
          }}
          className={'slugInput'}
          /* @ts-expect-error */
          value={value}
          showError={showError}
          errorMessage={errorMessage}
          style={{
            marginBottom: 0,
          }}
        />
        {custom.enableEditSlug && (
          <div className={'checkbox'}>
            <div className={'srOnly'}>
              <FieldLabel
                htmlFor={`field-${checkboxPath.replaceAll('.', '-')}`}
                label={editFieldConfig?.label ?? ''}
              />
            </div>
            <CheckboxInput
              id={`field-${checkboxPath.replaceAll('.', '-')}`}
              onToggle={handleCheckbox}
              defaultChecked={editSlugField.value}
              /* @ts-expect-error */
              checked={editSlugField.value ?? false}
              label={''}
              name={checkboxPath}
            />
          </div>
        )}
      </div>
      {Array.isArray(AfterInput) &&
        AfterInput.map((Component, i) => <Component key={i} />)}
      <FieldDescription
        className={`field-description-${path.replace(/\./g, '__')}`}
        description={descriptionProps?.description}
        // value={value}
      />
    </div>
  )
}

export default SlugComponent
