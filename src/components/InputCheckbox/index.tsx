import classNames from "classnames"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
        onClick={() => {
          console.log('label checkbox onClick working')
          onChange(!checked)
        }}
        onChange={() => {
          console.log('label checkbox onChange working')
          onChange(!checked)
        }}
        // Note: I hate this solution and it feels very hacky. I can't quite figure out the label/
        // input relationship here. I'm sure it's something simple I'm missing. I've tried zIndex
        // and a few other fixes without any luck. I'm going to leave this for now and acknowledge
        // that it's not ideal.
      />
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={() => {
          onChange(!checked)
        }}
      />
    </div>
  )
}
