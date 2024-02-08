import './pad.styles.css'
import {useRef,FC,memo} from "react";
import {PadProps} from "../../types/common.ts";

export const Pad:FC<PadProps> = memo(({audio}) => {
    const ref = useRef<HTMLAudioElement | null>(null)
    return (
        <div className={'pad'}>
            <audio src={audio} ref={ref}/>
        </div>
    )
})
