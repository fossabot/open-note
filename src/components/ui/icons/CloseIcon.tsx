import React from "react";
import { CustomIconProps } from "../../../types";

export const CloseIcon: React.FC<CustomIconProps<SVGSVGElement>> = (props) => (
  <svg
    aria-hidden="false"
    focusable="true"
    height={props.size ?? "12"}
    width={props.size ?? "12"}
    role="presentation"
    viewBox="0 0 10 10"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>{props.title ?? ""}</title>
    <path
      d="M5 5.70898L0.854492 9.85449C0.756836 9.95215 0.639648 10.001 0.50293 10.001C0.359701 10.001 0.239258 9.95378 0.141602 9.85938C0.0472005 9.76172 0 9.64128 0 9.49805C0 9.36133 0.0488281 9.24414 0.146484 9.14648L4.29199 5.00098L0.146484 0.855469C0.0488281 0.757812 0 0.638997 0 0.499023C0 0.430664 0.0130208 0.36556 0.0390625 0.303711C0.0651042 0.241862 0.100911 0.189779 0.146484 0.147461C0.192057 0.101888 0.245768 0.0660807 0.307617 0.0400391C0.369466 0.0139974 0.43457 0.000976562 0.50293 0.000976562C0.639648 0.000976562 0.756836 0.0498047 0.854492 0.147461L5 4.29297L9.14551 0.147461C9.24316 0.0498047 9.36198 0.000976562 9.50195 0.000976562C9.57031 0.000976562 9.63379 0.0139974 9.69238 0.0400391C9.75423 0.0660807 9.80794 0.101888 9.85352 0.147461C9.89909 0.193034 9.9349 0.246745 9.96094 0.308594C9.98698 0.367188 10 0.430664 10 0.499023C10 0.638997 9.95117 0.757812 9.85352 0.855469L5.70801 5.00098L9.85352 9.14648C9.95117 9.24414 10 9.36133 10 9.49805C10 9.56641 9.98698 9.63151 9.96094 9.69336C9.9349 9.75521 9.89909 9.80892 9.85352 9.85449C9.8112 9.90007 9.75911 9.93587 9.69727 9.96191C9.63542 9.98796 9.57031 10.001 9.50195 10.001C9.36198 10.001 9.24316 9.95215 9.14551 9.85449L5 5.70898Z"
      fill="currentColor"
      fillOpacity="0.8956"
    />
  </svg>
);
