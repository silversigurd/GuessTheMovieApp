import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { movies } from '../data/movies';
import { RouteProp } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { Color } from "@nativescript/core";

type GameScreenProps = {
    route: RouteProp<MainStackParamList, "Game">;
    navigation: FrameNavigationProp<MainStackParamList, "Game">;
};

export function GameScreen({ route, navigation }: GameScreenProps) {
    const [currentNivel, setCurrentNivel] = React.useState(route.params?.NivelId ? route.params.NivelId - 1 : 0);
    const [currentSceneIndex, setCurrentSceneIndex] = React.useState(0);
    const [guess, setGuess] = React.useState("");
    const [score, setScore] = React.useState(0);
    const [showFeedback, setShowFeedback] = React.useState(false);
    const [isCorrect, setIsCorrect] = React.useState(false);

    const currentMovie = movies[currentNivel];

    const handleGuess = () => {
        const correct = guess.toLowerCase() === currentMovie.title.toLowerCase();
        setIsCorrect(correct);
        setShowFeedback(true);

        if (correct) {
            setScore(score + 1);
        } else if (currentSceneIndex < 2) {
            setCurrentSceneIndex(currentSceneIndex + 1);
        }
    };

    const nextNivel = () => {
        if (currentNivel < movies.length - 1) {
            setCurrentNivel(currentNivel + 1);
            setCurrentSceneIndex(0);
            setGuess("");
            setShowFeedback(false);
        } else {
            navigation.navigate("MainMenu");
        }
    };

    return (
        <flexboxLayout style={styles.container}>
            <label
                className="text-xl mb-4"
                style={{ color: "white", fontSize:"40", fontWeight:"bold" }}
                text={`Nivel ${currentNivel + 1} - ${currentMovie.difficulty}`}
            />

            <image
                src={currentMovie.scenes[currentSceneIndex].imageUrl}
                style={styles.image}
            />

            <textField
                hint="Ingrese el titulo de la pelicula"
                text={guess}
                onTextChange={(args) => setGuess(args.value)}
                style={styles.input}
            />

            <button
                text="Enviar"
                onTap={handleGuess}
                style={styles.button}
            />

            {showFeedback && (
                <flexboxLayout style={styles.feedback}>
                    <label className={isCorrect ? "text-green-500" : "text-red-500"} style={{ color: "white", fontSize:"15", fontWeight:"bold" }}>
                        {isCorrect ? "Correcto!" : "Intenta de nuevo!"}
                    </label>
                    {!isCorrect && currentSceneIndex < 2 && (
                        <label style={{ color: "white", fontSize:"15", fontWeight:"bold" }}>Aqui hay otra escena...</label>
                    )}
                </flexboxLayout>
            )}

            <button
                text={currentNivel < movies.length - 1 ? "Siguiente nivel" : "Volver al menu"}
                onTap={nextNivel}
                style={styles.skipButton}
            />

            <label className="mt-4" style={{ color: "white", fontSize:"20", fontWeight:"bold" }}
            >

                Puntaje: {score}/{currentNivel + 1}
            </label>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#003092",
    },
    image: {
        width: "100%",
        height: "auto",
        marginBottom: 10,
        marginTop: "22%",
        borderRadius:"5",
    },
    input: {
        width: "90%",
        height: 40,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        backgroundColor: "white",
        borderRadius:"5"
    },
    button: {
        backgroundColor: "#2e6ddf",
        color: "white",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    skipButton: {
        backgroundColor: "#666",
        color: "white",
        padding: 10,
        borderRadius: 5,
    },
    feedback: {
        flexDirection: "column",
        alignItems: "center",
        marginVertical: 10,
    },
});