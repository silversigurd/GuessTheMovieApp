import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type MainMenuProps = {
    navigation: FrameNavigationProp<MainStackParamList, "MainMenu">;
};

export function MainMenu({ navigation }: MainMenuProps) {
    const [username, setUsername] = React.useState("Player");

    return (
        <gridLayout style={styles.container}>
            {/* Nombre de usuario alineado a la derecha */}
            <label style={styles.username} text={username} />

            {/* Contenedor principal */}
            <stackLayout style={styles.content}>
                <label style={styles.title} text="Adivina la pelicula" />

                {/* Botones alineados en columna */}
                <button
                    style={styles.button}
                    text="Iniciar juego"
                    onTap={() => navigation.navigate("Game")}
                />
                <button
                    style={Object.assign({}, styles.button, { marginTop: 20 })}
                    text="Seleccionar nivel"
                    onTap={() => navigation.navigate("NivelSelect")}
                />
            </stackLayout>
        </gridLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ocupa toda la pantalla
        justifyContent: "center", // Centra verticalmente
        alignItems: "center", // Centra horizontalmente
        height: "100%",
        backgroundColor: "#003092",
        padding: 16,
        fontWeight: "bold",
    },
    content: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        fontWeight: "bold",

    },
    username: {
        fontSize: 18,
        color: "#FFF2DB",
        fontWeight: "bold",
        textAlignment: "right",
        width: "100%",
        padding: 10,
        marginTop:"90%"
    },
    title: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 100,
        textAlignment: "center",
        fontFamily: "times", // Nombre del archivo sin extensión
        marginTop: "30%",
    },
    button: {
        backgroundColor: "#FFAB5B",
        color: "white",
        fontWeight: "bold",
        borderRadius: 8,
        fontSize: 18,
        paddingVertical: 50,
        paddingHorizontal: 24, // Añade espacio horizontal
        textAlign: "center",
        width: "80%", // Hace que el botón ocupe el 80% del ancho de la pantalla
    },
});

export default MainMenu;
