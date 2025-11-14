import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  titulo: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 0,
  },

  subtitulo: {
    color: "#ccc",
    fontSize: 20,
    marginTop: 30,
    marginBottom: 25,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#222",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    color: "#fff",
    fontSize: 16,
    marginBottom: 25,
  },

  /*os 2 retangulos de cima */
  containerMaior: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  cardMaior: {
    backgroundColor: "#2b2b2b",
    width: "48%",
    height: 120,
    borderRadius: 14,
    justifyContent: "center",
    alignSelf: "flex-start",
    padding: 8,
  },

  /* os 4 quadrados de baixo*/
  containerMenor: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "nowrap",
  },

  cardMenor: {
    backgroundColor: "#292929",
    width: "23%",
    height: 90,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  icon: {
    width: 60,
    height: 60,
    marginBottom: 10,
    alignSelf: "flex-end",
  },

  iconSmall: {
    width: 50,
    height: 60,
  },

  cardText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "left",
  },

  footer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: "#111",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 0.5,
    borderTopColor: "#444",
  },

  footerItem: {
    justifyContent: "center",
    alignItems: "center",
  },

  footerIcon: {
    width: 28,
    height: 28,
    marginBottom: 2,
  },

  footerTexto: {
    color: "#aaa",
    fontSize: 12,
  },
});
