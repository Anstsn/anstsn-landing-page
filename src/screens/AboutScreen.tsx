import React, { FC } from "react";

export type AboutScreenProps = {}

export const AboutScreen: FC<AboutScreenProps> = (props) => {
    const {} = props;

    return (
        <div className={'centered'}>
            <div className={'text-[164px] font-bold'}>About</div>
        </div>
    )
}
