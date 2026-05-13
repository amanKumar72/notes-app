import { Stack } from "expo-router";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { NotesProvider } from "@/contexts/NotesContext";

export default function RootLayout() {
    return (
    <ThemeProvider>
        <NotesProvider>
            <Stack screenOptions={{ headerShown: false }} >
            </Stack>
        </NotesProvider>
    </ThemeProvider>
    );
}
