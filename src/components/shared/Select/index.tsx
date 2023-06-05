import { useState, ChangeEvent, useEffect, useMemo, useRef } from 'react'

import Input from '../Input'

import Icon from '../Icon'

import { classNames, isEmpty } from '@src/utils'

import Option, { OptionProps } from './Option'

interface Data {
  value: string
  label: string
}

interface InnerData {
  value: string
  label: string | null
}

interface Props<T> {
  options?: T[]
  label?: string
  placeholder?: string
  error?: string
  withFilter?: boolean
  value?: string | number
  dataExtractor?: { value: keyof T; label: keyof T }
  onBlur?: () => void
  onChange?: (data: Data) => void
}

const Select = <T extends object>({
  label,
  options,
  onBlur,
  onChange,
  withFilter,
  dataExtractor,
  placeholder,
  ...props
}: Props<T>) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isFiltering, setIsFiltering] = useState(false)
  const [innerData, setInnerData] = useState<InnerData>({
    value: '',
    label: null
  })

  const keyValue = dataExtractor ? dataExtractor.value : 'value'
  const keyLabel = dataExtractor ? dataExtractor.label : 'label'

  const innerValue = innerData.label ? innerData.label : innerData.value

  useEffect(() => {
    if (Array.isArray(options)) {
      const i = options?.findIndex(
        (o: any) => String(o[keyValue]) === String(props.value)
      )
      setInnerData({
        label: i === -1 ? '' : (options as any)[i][keyLabel],
        value: i === -1 ? '' : (options as any)[i][keyValue]
      })
    }
  }, [options?.length && options, props.value])

  const filterOptions = useMemo(() => {
    if (withFilter) {
      const _label =
        typeof innerData.value === 'string' ? innerData.value.toLowerCase() : ''
      return options?.filter((option) => {
        return (option as any)[keyLabel].toLowerCase().includes(_label)
      })
    }

    return options
  }, [innerValue, options, withFilter])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (innerData.label !== null) {
      onChange?.({ label: '', value: '' })
    }
    setInnerData({ label: null, value })
    setIsOpen(!isEmpty(String(value)))
    setIsFiltering(true)
  }

  const handleSelect = (data: OptionProps) => {
    onChange?.(data)
    setInnerData(data)
    setIsOpen(false)
    setIsFiltering(false)
  }

  return (
    <div className="w-full">
      <div className="relative w-full">
        <Input
          // ref={inputRef}
          label={label}
          placeholder={placeholder}
          value={innerValue}
          error={props.error}
          onBlur={onBlur}
          onChange={handleChange}
          rightElement={
            <button
              type="button"
              className="btn-icon  border-0 hover:bg-primary-300"
              onClick={() => {
                inputRef.current?.focus()
                setIsFiltering(false)
                setIsOpen((prev) => !prev)
              }}
            >
              <Icon
                name="arrow-down"
                className={classNames([
                  isOpen ? 'rotate-180' : 'rotate-0',
                  'transition-transform'
                ])}
              />
            </button>
          }
        />

        <div
          className={classNames([
            isOpen ? 'max-h-[300px]' : 'max-h-0',
            'absolute z-40 w-full overflow-y-auto bg-white  da  shadow  select-contendor'
          ])}
        >
          <div className="flex flex-col w-full">
            {isOpen &&
              isFiltering &&
              filterOptions?.map((data) => {
                const value = (data as any)[keyValue]
                const label = (data as any)[keyLabel]
                return (
                  <Option
                    key={value}
                    label={label}
                    value={value}
                    onClick={() => handleSelect({ value, label })}
                  />
                )
              })}

            {isOpen &&
              !isFiltering &&
              options?.map((data) => {
                const value = (data as any)[keyValue]
                const label = (data as any)[keyLabel]
                return (
                  <Option
                    key={value}
                    label={label}
                    value={value}
                    onClick={() => handleSelect({ value, label })}
                  />
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Select
