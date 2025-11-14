import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { styles } from "./styles";
import carroViagem from "./assets/carroViagem.png";
import calendarioRelogio from "./assets/calendarioRelogio.png";
import enviarItens from "./assets/enviarItens.png";
import moto from "./assets/moto.png";
import senior from "./assets/senior.jpg";
import teens from "./assets/teens.jpg";
import home from "./assets/home.jpg";
import opcoesIcon from "./assets/opcoesIcon.jpg";
import atividadeIcon from "./assets/atividadeIcon.jpg";
import usuarioIcon from "./assets/usuarioIcon.jpg";

export default function OptionsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Opções</Text>
      <Text style={styles.subtitulo}>
        Vá para onde quiser, peça o que precisar
      </Text>

      <TextInput
        placeholder="O que precisa?"
        placeholderTextColor="#aaa"
        style={styles.input}
      />
      {/* os 2 retangulos de cima */}
      <View style={styles.containerMaior}>
        <TouchableOpacity style={styles.cardMaior}>
          <Image source={carroViagem} style={styles.icon} />
          <Text style={styles.cardText}>Viagem</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardMaior}>
          <Image source={enviarItens} style={styles.icon} />
          <Text style={styles.cardText}>Enviar itens</Text>
        </TouchableOpacity>
      </View>

      {/* os 4 quadrados da parte de baixo */}
      <View style={styles.containerMenor}>
        <TouchableOpacity style={styles.cardMenor}>
          <Image source={calendarioRelogio} style={styles.iconSmall} />
          <Text style={styles.cardText}>Reserve</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardMenor}>
          <Image source={moto} style={styles.iconSmall} />
          <Text style={styles.cardText}>Moto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardMenor}>
          <Image source={senior} style={styles.iconSmall} />
          <Text style={styles.cardText}>Seniors</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardMenor}>
          <Image source={teens} style={styles.iconSmall} />
          <Text style={styles.cardText}>Teens</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Image source={home}
          style={styles.footerIcon} />
          <Text style={styles.footerTexto}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <Image source={opcoesIcon} style={styles.footerIcon} />
          <Text style={styles.footerTexto}>Opções</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <Image source={atividadeIcon} 
          style={styles.footerIcon} />
          <Text style={styles.footerTexto}>Atividade</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <Image source={usuarioIcon}
    style={styles.footerIcon} />
          <Text style={styles.footerTexto}>Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
