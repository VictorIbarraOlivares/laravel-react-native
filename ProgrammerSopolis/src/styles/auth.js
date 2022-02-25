import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$authBg',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 0,
    },
    title: {
        fontFamily: '$700Bold',
        color: '$primary',
        fontWeight: '$fontWeight900',
    },
    buttonTitle: {
        fontFamily: '$400Regular',
        color: '$primary',
        fontSize: 22,
    },
    button: {
        borderColor: 'transparent',
    },
    input: {
        fontFamily: '$400Regular',
        color: '$black',
    },
    link: {
        fontFamily: "$400Regular",
        fontSize: '$font12',
        color: '$black',
        textDecorationLine: "underline",
    },
    errorValidation: {
        color: "$red",
        fontSize: "$font12"
    }
});

export default styles;