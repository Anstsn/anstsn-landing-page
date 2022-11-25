import { HomeScreen } from '../../src/screens/HomeScreen';

export default async function IndexPage(props: { params: { locale: string }, searchParams: any }) {
    const { locale } = props.params;

    console.log(locale)

    return (
        <>
            <HomeScreen />
        </>
    );
}
