import React, { FC } from "react";

export type HomeScreenProps = {}

export const HomeScreen: FC<HomeScreenProps> = (props) => {
    const {} = props;

    return (
        <div className={'centered'}>
            {/*<div>Anstsn</div>*/}
            {/*<div className={'text-l'}>Anstsn</div>*/}
            {/*<div className={'text-xl'}>Anstsn</div>*/}
            <div className={'text-[164px] font-bold'}>anstsn</div>
        </div>
    )
}
