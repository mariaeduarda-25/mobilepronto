import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ChatNavigation from "./chat.navigation";
import {Ionicons, MaterialCommunityIcons,Feather, FontAwesome } from "@expo/vector-icons";
import colors from "../styles/colors";
import { ChatScreen, MapScreen, PerfilScreen, SairScreen, CameraScreen, ArquivoScreen, QrCodeScreen, VideoAudioScreen, AcelerometroScreen } from "../screens";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: { backgroundColor: colors.secondary },
                headerTintColor: colors.white,
                drawerStyle: { backgroundColor: colors.secondary },
                drawerActiveTintColor: colors.white,
                drawerInactiveTintColor: colors.white,
            }}
        >
            <Drawer.Screen
                name="Perfil"
                component={PerfilScreen}
                options={{
                    drawerIcon: () => (
                        <Ionicons name="person" size={24} color={colors.white} />
                    ),
                }}
            />
           
            <Drawer.Screen
                name="Map"
                component={MapScreen}
                options={{
                    drawerIcon: () => (
                        <Feather name="map-pin" size={24} color={colors.white} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Sair"
                component={SairScreen}
                options={{
                    drawerLabel: "Sair",
                    drawerIcon: () => (
                        <Ionicons name="exit" size={24} color={colors.white} />
                    ),
                }}
            />
            <Drawer.Screen
                name="QrCode"
                component={QrCodeScreen}
                options={{
                    drawerLabel: "QrCode",
                    drawerIcon: () => (
                        <MaterialCommunityIcons
                            name="qrcode-scan"
                            size={24}
                            color={colors.white}
                        />
                    ),
                }}
            />
           
            <Drawer.Screen
                name="Camera"
                component={CameraScreen}
                options={{
                    drawerLabel: "Camera",
                    drawerIcon: () => (
                        <MaterialCommunityIcons
                            name="camera"
                            size={24}
                            color={colors.primary}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="Arquivos"
                component={ArquivoScreen}
                options={{
                    drawerLabel: "Arquivos",
                    drawerIcon: () => (
                        <MaterialCommunityIcons
                            name="file-account"
                            size={24}
                            color={colors.primary}
                        />
                    ),
                }}
            />  
             <Drawer.Screen
                name="ChatNavigation"
                component={ChatNavigation}
                options={{
                    title:"Chat",
                    drawerLabel: "Chat",
                    drawerIcon: () => (
                      <Ionicons name="chatbubbles" size={24} color={colors.primary}/>
                    ),
                }}
            />
            <Drawer.Screen
               name="AudioVideo"
               component={VideoAudioScreen}
               options={{
                   drawerLabel: "Áudio Vídeo",
                   drawerIcon: () => (
                       <MaterialCommunityIcons 
                       name= "video"
                       size={24}
                       color={colors.primary}
                       />
                   ),
               }}
            />
        <Drawer.Screen
                name="Acelerometro"
                component={AcelerometroScreen}
                options={{
                    drawerLabel: "Acelerômetro",
                    drawerIcon: () => (
                        <FontAwesome
                            name="car"
                            size={24}
                            color={colors.primary}
                        />
                    ),
                }}
            />  
        </Drawer.Navigator>
    )
}







