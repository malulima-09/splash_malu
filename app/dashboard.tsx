import { View, Text, ScrollView } from "react-native";
import styles from "./css/style";
import HeaderImage from "./components/HeaderImage";
import CourseCard from "./components/CourseCard";
import ButtonArea from "./components/ButtonArea";


export default function DashBoard() {
  return (
    <ScrollView contentContainerStyle={styles.dashboardContainer}>
      <HeaderImage />

      <Text style={styles.titulo}>
        Cursos em Destaque
      </Text>

      <CourseCard
        title="Inteligência Artificial"
        describe="Cursos online"
        likes={0}
        image={require("../assets/cursoIA.png")}
      />

      <CourseCard
        title="Ciência de Dados"
        describe="Cursos online"
        likes={0}
        image={require("../assets/cursos.dados.png")}
      />

      <CourseCard
        title="Engenharia de Software"
        describe="Cursos online"
        likes={0}
        image={require("../assets/cursoengenharia.png")}
      />
      <ButtonArea text="Sair" href="/login" />
    </ScrollView>
  );
}