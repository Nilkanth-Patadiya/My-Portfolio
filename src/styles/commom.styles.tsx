import { TooltipProps, Tooltip, tooltipClasses, styled } from "@mui/material"
import { CSSProperties } from "@mui/styled-engine"

export const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#3e5060eb",
    color: "#fff",
    fontSize: 11,
  },
}))
