import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { movies } from "../data/movies";

type NivelSelectProps = {
    navigation: FrameNavigationProp<MainStackParamList, "NivelSelect">;
};

export function NivelSelect({ navigation }: NivelSelectProps) {
    const difficulties = ["Facil", "Medio", "Dificil"];

    return (
        <scrollView style={styles.container}>
        {difficulties.map((difficulty) => (
            <flexboxLayout key={difficulty} style={styles.section}>
                <label className="text-xl font-bold mb-4 capitalize"  style={{ color: "white", fontSize:"40", fontWeight:"bold" }}>
                    {difficulty} Niveles
                </label>
                
                <flexboxLayout style={styles.NivelGrid}>
                    {movies
                        .filter((movie) => movie.difficulty === difficulty)
                        .map((movie) => (
                            <button
                                key={movie.id}
                                className="m-2 p-4"
                                style={styles.NivelButton}
                                ontap={() => navigation.navigate("Game", { NivelId: movie.id })}
                            >
                                Nivel {movie.id}
                            </button>
                        ))}
                </flexboxLayout>
            </flexboxLayout>
        ))}
    </scrollView>
    
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#003092",
        width: "100%",  
        height: "300%", 
        flex: 1,  
     
    },
    section: {
        padding: 20,
        flexDirection: "column",
    },
    NivelGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 10, // Espacio entre los botones (React Native 0.71+)
    },
    NivelButton: {
        width: "45%",
        backgroundColor: "#2e6ddf",
        color: "white",
        borderRadius: 8,
        fontSize: 16,
        padding: 10,
        marginBottom: 10, // Espacio entre filas
    },
    singleButton: {
        alignSelf: "center", // Centra el tercer botón en la fila
    }
});

