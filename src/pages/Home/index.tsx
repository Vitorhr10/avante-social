import React from "react";
import { WebView } from 'react-native-webview';
import { Text } from 'react-native';

import styles from './styles';

const Home = (props: any) => {

    return (
        <>
        <WebView styles={styles.container}
            source={{
                uri: 'https://www.avantesocial.org.br/sobre-avante/'
            }}
            cacheEnabled={true}
            onError={(syntheticEvent) => {
                const { nativeEvent } = syntheticEvent;
                <Text>{nativeEvent}</Text>
            }}
        />
        </>
    );
};

export default Home;