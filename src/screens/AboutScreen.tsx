'use client';

import React, { FC } from "react";
import { useI18n } from '../i18n';

export type AboutScreenProps = {}

export const AboutScreen: FC<AboutScreenProps> = (props) => {
    const {} = props;

    const { t } = useI18n();

    return (
        <div className={'centered'}>
            <div className={'text-[164px] font-bold'}>About</div>
            <div className={'p-4 mt-10'}>{t('common.test')}</div>
        </div>
    )
}
