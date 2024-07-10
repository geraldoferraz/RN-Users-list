import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12
    },

    name: {
        color: '#FFF',
        flex: 1,
        fontSize: 18,
        marginLeft: 16,
    },

    button: {
        width: 56,
        height: 56,
        borderRadius: 12,
        backgroundColor: '#E23C44',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 28,
    },

    buttonText: {
        color: '#FDFCFE',
        fontSize: 24
    },
})