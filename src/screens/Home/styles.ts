import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#131016',
        flex: 1,
        padding: 24
    },
  
    eventName: {
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 48
    },
  
    eventDate: {
        color: '#6b6b6b',
        fontSize: 18
    },

    input: {
        flex: 1,
        backgroundColor: '#1f1e25',
        height: 56,
        borderRadius: 12,
        color: '#FDFCFE',
        padding: 18,
        fontSize: 18,
        marginRight: 12
    },

    button: {
        width: 56,
        height: 56,
        borderRadius: 12,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 28,
    },

    buttonText: {
        color: '#FDFCFE',
        fontSize: 24
    },

    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    },

    listEmptyBoxText: {
        height: 80,
        backgroundColor: '#1f1e25',
        borderRadius: 12,
        justifyContent: 'center'
    },

    listEmptyText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: "bold",
    }
  
  })

//   backgroundColor: '#1f1e25',