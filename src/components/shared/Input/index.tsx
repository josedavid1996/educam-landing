/* eslint-disable indent */
/* eslint-disable spaced-comment */
/* eslint-disable multiline-ternary */
import { classNames, isEmpty } from '@src/utils'
import {
  useId,
  useState,
  SVGProps,
  forwardRef,
  ReactElement,
  InputHTMLAttributes,
  ForwardedRef
} from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: any
  rightElement?: ReactElement
  icon?: (props: SVGProps<SVGSVGElement>) => ReactElement
  touched?: boolean
}

const Input = (
  { label, icon: Icon, rightElement, touched, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement> | null
) => {
  const uid = useId()
  const [show] = useState(false)

  const hasError =
    props.error?.toString() && !isEmpty(props.error.toString()) && touched
  const isValueEmpty = isEmpty(
    typeof props?.value === 'string' ? props.value : ''
  )

  return (
    <div>
      <div className="relative h-[60px] rounded-tr-md rounded-md  w-full ">
        <input
          ref={ref}
          {...props}
          id={`input-${uid}`}
          autoComplete="off"
          type={
            props.type === 'password'
              ? show
                ? 'text'
                : 'password'
              : props.type
          }
          className={classNames([
            hasError
              ? 'border-red-600  focus:border-red-500'
              : props.value?.toString().length
              ? 'border-primary-500 '
              : 'border-gray-500  focus:border-primary-500',
            ' peer bg-transparent  w-full h-full border-[3px] rounded-md rounded-tl-md pt-5 px-3  transition-all ease-in-out duration-1000 outline-none text-[18px] '
          ])}
        />
        <label
          htmlFor={`input-${uid}`}
          className={classNames([
            isValueEmpty && props.type !== 'date'
              ? 'top-[19px] left-3  text-gray-500'
              : 'top-1 left-2 text-primary-500  font-semibold ',
            hasError
              ? 'text-red-600 dark:text-red-400'
              : 'peer-focus:text-primary-500 ',
            'absolute peer-focus:top-1 peer-focus:left-2 transition-all font-semibold ease-in-out duration-500 text-[18px]'
          ])}
        >
          {label}
        </label>

        {/* {props.type === 'password' && (
          <button
            type="button"
            onClick={() => setShow((prev) => !prev)}
            className={`${
              hasError ? 'btn-ghost-red' : 'btn-ghost-primary'
            } btn-icon  absolute right-3 top-[13px]`}
          >
            {show ? (
              <IconEyeSlash
                className={`${
                  hasError
                    ? 'text-red-600 dark:text-red-400'
                    : 'text-primary-500'
                }`}
              />
            ) : (
              <IconEye
                className={`${
                  hasError
                    ? 'text-red-600 dark:text-red-400'
                    : 'text-primary-500'
                }`}
              />
            )}
          </button>
        )} */}

        {typeof Icon === 'function' && (
          <button className="btn-icon btn-ghost-primary absolute right-3 top-[13px]">
            {<Icon />}
          </button>
        )}

        {rightElement && (
          <div className="absolute right-3 top-[13px]">{rightElement}</div>
        )}

        <p className="text-sm text-red-600 dark:text-red-400">
          {hasError ? props.error : ''}
        </p>
      </div>
    </div>
  )
}

export default forwardRef(Input)
