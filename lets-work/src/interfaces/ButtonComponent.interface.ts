import { SvgIconTypeMap } from "@material-ui/core"
import { OverridableComponent } from "@material-ui/core/OverridableComponent"
import { MouseEventHandler } from "react";

export type svg = OverridableComponent<SvgIconTypeMap<{}, "svg">>;

export interface ButtonComponent {
    btnProps:{
        Icon?:svg,
        title?:string,
        type: any,
        link?:string,
    },
    action?:MouseEventHandler<HTMLButtonElement>
}