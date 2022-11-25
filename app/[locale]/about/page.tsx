import { AboutScreen } from '../../../src/screens/AboutScreen';

export default async function AboutPage(props: { params: { locale: string }, searchParams: any }) {
    const { locale } = props.params;

    return (
        <>
            <AboutScreen />
        </>
    );
}
