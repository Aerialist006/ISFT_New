import * as React from "react";
import { styled } from "@mui/joy/styles";
import Input from "@mui/joy/Input";
import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";

const StyledInput = styled("input")({
  border: "none", // remove the native input border
  minWidth: 0, // remove the native input width
  outline: 0, // remove the native input outline
  padding: 0, // remove the native input padding
  paddingTop: 0,
  flex: 1,
  color: "inherit",
  backgroundColor: "transparent",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontStyle: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  textOverflow: "ellipsis",
  "&::placeholder": {
    opacity: 0,
    transition: "0.1s ease-out",
  },
  "&:focus::placeholder": {
    opacity: 1,
  },
  "&:focus ~ label, &:not(:placeholder-shown) ~ label, &:-webkit-autofill ~ label":
    {
      top: "-0.4rem",
      fontSize: "0.75rem",
      backgroundColor: "white",
      zIndex: 30,
      padding: "0px 0.2rem",
    },
  "&:focus ~ label": {
    color: "var(--Input-focusedHighlight)",
  },
  "&:-webkit-autofill": {
    alignSelf: "stretch", // to fill the height of the root slot
  },
  "&:-webkit-autofill:not(* + &)": {
    marginInlineStart: "calc(-1 * var(--Input-paddingInline))",
    paddingInlineStart: "var(--Input-paddingInline)",
    borderTopLeftRadius:
      "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
    borderBottomLeftRadius:
      "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
  },
});

const PhoneMaskdapter = React.forwardRef(function PhoneMaskAdapter(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

const DNIMaskdapter = React.forwardRef(function DNIMaskAdapter(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="#00-0000000-0"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

DNIMaskdapter.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
PhoneMaskdapter.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const StyledLabel = styled("label")(({ theme }) => ({
  position: "absolute",
  lineHeight: 1,
  top: "calc((var(--Input-minHeight) - 1em) / 2)",
  color: theme.vars.palette.text.tertiary,
  fontWeight: theme.vars.fontWeight.md,
  transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
}));

const InnerInput = React.forwardRef(function InnerInput(props, ref) {
  const id = React.useId();
  return (
    <React.Fragment>
      <StyledInput {...props} ref={ref} id={id} />
      <StyledLabel htmlFor={id}>{props.name}</StyledLabel>
    </React.Fragment>
  );
});

const LabeledInput = React.forwardRef(function LabeledInput(props, ref) {
  return (
    <Input
      disabled={props.disabled}
      defaultValue={props.defaultValue}
      size={props.size}
      onFocus={(e) => ( props.type == "date" ? e.target.type = "date" : null)}
      onBlur={(e) => ( props.type == "date" ? e.target.type = "text" : null)}
      slots={{ input: InnerInput }}
      type={props.type != "mask" ? props.type : null}
      slotProps={{
        input: {
          placeholder: props.placeholder,
          name: !props.name ? props.placeholder : props.name,
          component:
            props.mask == "dni"
              ? DNIMaskdapter
              : props.mask == "tel"
              ? PhoneMaskdapter
              : null,
          min: props.min ? props.min : null,
          max: props.max ? props.max : null,
        },
      }}
      sx={{
        "--Input-minHeight":
          props.size == "sm"
            ? "35px"
            : props.size == "lg"
            ? "50px"
            : props.size == "md"
            ? "40px"
            : null,
        "--Input-radius": "6px",
      }}
    />
  );
});

LabeledInput.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  min: PropTypes.string,
  max: PropTypes.string,
  mask: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  defaultValue: PropTypes.string
};

LabeledInput.defaultProps = {
  placeholder: "Label",
  disabled: false,
  type: "text",
  size: "md",
};

export default LabeledInput;